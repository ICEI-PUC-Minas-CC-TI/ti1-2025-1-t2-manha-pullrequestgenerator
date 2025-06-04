function useChatUI(r) {
  const renderFeedbackForm = (container) => {
    const form = $(`
                <div id="feedback-form" class="flex flex-col items-start space-y-2 p-4 bg-white border rounded shadow">
                    <p class="text-sm text-gray-700">Gostou da descrição gerada pelo assistente? Sinta-se livre para pedir alterações.</p>
                    <div class="flex space-x-2">
                        <button id="send-feedback" class="bg-blue-600 text-white px-3 py-1 rounded text-sm">Enviar</button>
                        <button id="cancel-feedback" class="bg-gray-300 text-black px-3 py-1 rounded text-sm">Cancelar</button>
                    </div>
                </div>
            `);
    container.append(form);
  };

  const render = () => {
    const container = $("#chat-messages");
    const messages = r.getMessages();
    container.empty();

    messages.forEach((msg) => {
      if (msg.shouldDisplay) {
        const messageClass =
          msg.role === "user"
            ? "bg-blue-100 self-end text-right"
            : "bg-gray-200 self-start text-left";

        const message = $(`
                    <div id="message-${msg.id}" class="rounded-lg px-4 py-2 ${messageClass} max-w-[80%]">
                        <p class="text-sm">${msg.content}</p>
                    </div>
                `);
        container.append(message);
      }
    });

    if (messages.at(-1)?.role === "assistant") {
      renderFeedbackForm(container);
    }

    container.scrollTop(container[0].scrollHeight);
  };

  return {
    render,
    renderFeedbackForm,
  };
}

window.useChatUI = useChatUI;
