function useChat() {
  const store = window.useState();

  const NewMessage = (role, content, shouldDisplay) => {
    const id = window.generateUUID();
    return { id, role, content, shouldDisplay };
  };

  const getMessages = () => {
    return store.getState("chat-messages") || [];
  };

  const chatUI = window.useChatUI({ getMessages });

  const setMessages = (messages) => {
    store.setState("chat-messages", messages);
    chatUI.render();
  };

  const addContextMessage = (role, content) => {
    const message = NewMessage(role, content, false);

    setMessages([...getMessages(), message]);

    return message.id;
  };

  const addMessage = (role, content) => {
    const message = NewMessage(role, content, true);

    setMessages([...getMessages(), message]);

    chatUI.render();

    return message.id;
  };

  const clear = () => {
    setMessages([]);
    chatUI.render();
  };

  const updateMessage = (id, chunck) => {
    const messages = getMessages();

    const message = messages.find((c) => c.id == id);

    if (!message) {
      throw new Error("Client error: cannot update a undefined message");
    }

    message.content = message.content + chunck;

    setMessages(
      messages.map((c) => {
        if (c.id == id) {
          return message;
        }

        return c;
      })
    );
  };

  const prepareChat = (commitsData) => {
    clear();

    const prompt = `Gerar uma descrição de pull request a partir das seguintes mensagens de commit:\n\n${commitsData.join(
      "\n"
    )}`;

    addContextMessage("system", window.basePrompt());
    addContextMessage("user", prompt);

    const assistantRespId = addMessage("assistant", " ");

    return assistantRespId;
  };

  return {
    hydrate: setMessages,
    getMessages,
    addMessage,
    clear,
    updateMessage,
    prepareChat
  };
}
