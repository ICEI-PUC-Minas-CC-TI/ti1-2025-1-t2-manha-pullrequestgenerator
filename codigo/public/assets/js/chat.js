
$(document).ready(async (e) => {
    // Inicialização de dependências
    const chat = window.useChat();
    const chatStore = window.useState();
    const githubClient = window.newGithub();
    const openaiConnector = window.createOpenAIConnector("API_KEY_HERE");
    
    openaiConnector.setModel("chatgpt-4o-latest");
    let job = {};

    // Inicialização do chat
    const existingMessages = chat.getMessages();
    
    if (Array.isArray(existingMessages) && existingMessages.length > 0) {
        chat.hydrate(existingMessages);
    } 
    else {
        chat.hydrate([]);
        const jobsProcessor = window.newJobsProcessor(chatStore, githubClient);
        const queue = chatStore.getState("queue");

        if (queue.length > 0) {
            job = queue[queue.length - 1];
            const commits = await jobsProcessor.processNextJob();
            const commitsData = commits.map((d) => JSON.stringify(d));
            const assistantRespId = chat.prepareChat(commitsData);

            await openaiConnector.send(
                assistantRespId,
                (msgId, chunck) => chat.updateMessage(msgId, chunck),
                [...chat.getMessages().map(c => ({ role: c.role, content: c.content }))]
            );
        }
    }

    // Event Handlers
    $('#chat-form').on('submit', async function (e) {
        e.preventDefault();
        $('#feedback-form').remove();
        
        const userMsg = $('#chat-input').val().trim();
        if (!userMsg) return;

        chat.addMessage('user', userMsg);
        $('#chat-input').val('');
        
        const respId = chat.addMessage('assistant', '');

        await openaiConnector.send(
            respId,
            (msgId, chunck) => chat.updateMessage(msgId, chunck),
            [
                ...chat.getMessages().map(c => ({ role: c.role, content: c.content })),
                { role: "user", content: userMsg }
            ]
        );
    });

    $('#chat-messages').on('click', '#cancel-feedback', function () {
        $('#feedback-form').remove();
    });

    $('#chat-messages').on('click', '#send-feedback', async function (e) {
        e.preventDefault();
        const msgs = chat.getMessages();

        const resp = await githubClient.createPullRequest({
            owner: job.owner,
            repo: job.repo,
            headBranch: job.headBranch,
            baseBranch: job.baseBranch,
            title: job.headBranch,
            body: msgs[msgs.length - 1].content,
            githubToken: job.githubToken,
        });

        chat.addMessage("assistant", `✅ Pull Request criado com sucesso!

        Obrigado por usar nosso serviço para automatizar seus pull requests.
        Estamos felizes em ajudar a tornar seu fluxo de trabalho mais ágil e eficiente!

        Se precisar de algo mais, estamos por aqui. 🚀

🔗 Link do PR: ${resp.html_url || 'URL não disponível'}`);

        $('#feedback-form').remove();
    });
});
