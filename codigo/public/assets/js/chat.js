$(document).ready(async (e) => {
    // Inicializa serviços
    const chat = window.useChat();
    const chatStore = window.useState();
    const githubClient = window.newGithub();
    const openaiConnector = window.createOpenAIConnector("API_KEY_HERE");
    
    openaiConnector.setModel("chatgpt-4o-latest");
    let job = {};

    // Restaura ou inicia novo chat
    const messages = chat.getMessages();
    if (messages?.length) chat.hydrate(messages);
    else {
        chat.hydrate([]);
        const queue = chatStore.getState("queue");
        if (queue?.length) {
            job = queue[queue.length - 1];
            const commits = await window.newJobsProcessor(chatStore, githubClient).processNextJob();
            const respId = chat.prepareChat(commits.map(d => JSON.stringify(d)));
            await openaiConnector.send(respId, (id, chunk) => chat.updateMessage(id, chunk), 
                [...chat.getMessages().map(c => ({ role: c.role, content: c.content }))]);
        }
    }

    // Envio de mensagens
    $('#chat-form').on('submit', async function(e) {
        e.preventDefault();
        const msg = $('#chat-input').val().trim();
        if (!msg) return;
        
        chat.addMessage('user', msg);
        $('#chat-input').val('');
        
        const respId = chat.addMessage('assistant', '');
        await openaiConnector.send(respId, (id, chunk) => chat.updateMessage(id, chunk), [
            ...chat.getMessages().map(c => ({ role: c.role, content: c.content })),
            { role: "user", content: msg }
        ]);
    });

    // Criação de PR no GitHub
    $('#chat-messages').on('click', '#send-feedback', async function(e) {
        e.preventDefault();
        const lastMsg = chat.getMessages().slice(-1)[0].content;
        const pr = await githubClient.createPullRequest({
            owner: job.owner,
            repo: job.repo,
            headBranch: job.headBranch,
            baseBranch: job.baseBranch,
            title: job.headBranch,
            body: lastMsg,
            githubToken: job.githubToken,
        });

        chat.addMessage("assistant", `✅ PR criado: ${pr.html_url}`);
    });
});
