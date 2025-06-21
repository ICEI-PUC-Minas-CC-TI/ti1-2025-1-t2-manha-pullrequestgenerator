function useAI() {
  const store = window.useState();
  const models = window.getModels();
  const router = window.useRouter();

  const apikeys = store.getState("apiKeys") || {};

  const availableModels = models.filter((m) => apikeys[m.provider]);

  if (availableModels.length == 0) {
    router.push("settings.html");
  }

  const getCurrentModel = () => {
    let currentModelId = store.getState("current-ai-model");

    if (!availableModels.find((c) => c.id == currentModelId)) {
      currentModelId = availableModels[0];
      store.setState("current-ai-model", availableModels[0]);
    }

    const model = availableModels.find((c) => c.id == currentModelId);

    return model;
  };

  const providersMap = {
    openai: window.createOpenAIConnector(
      apikeys["openai"],
      "gpt-4o",
      "https://api.openai.com/v1/chat/completions"
    ),
    xai: window.createOpenAIConnector(
      apikeys["xai"],
      "grok-3",
      "https://api.x.ai/v1/chat/completions"
    ),
    deepseek: window.createOpenAIConnector(
      apikeys["deepseek"],
      "deepseek-chat",
      "https://api.deepseek.com/chat/completions"
    ),
  };

  const getConnector = () => {
    const currentModel = getCurrentModel();
    return currentModel ? providersMap[currentModel] : null;
  };

  return {
    models: availableModels,
    getConnector,
  };
}

window.useAI = useAI;
