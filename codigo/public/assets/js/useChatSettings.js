async function initializeAccountConfig() {
  const { getState, setState } = useState();
  const currentChatSettings = getState('chatSettings');

  if (!currentChatSettings) {
    const newChatSettings = {
      id: generateUniqueId(),
      template: chatSettings.template,
      basePrompt: chatSettings.base_prompt,
      analysisPrompt: chatSettings.analysis_prompt,
      descriptionPrompt: chatSettings.description_prompt
    };

    // 1. Salva no localStorage
    setState('chatSettings', newChatSettings);
    console.log('Configuração salva no localStorage');

    // 2. Salva no db.json
    try {
      await saveToBackend(newChatSettings);
      console.log('Configuração salva no db.json');
    } catch (error) {
      console.error('Erro ao salvar no backend:', error);
      // Você pode adicionar uma lógica de retry ou fallback aqui
    }
  }
}

// salvar no db.json
async function saveToBackend(configData) {
  const response = await fetch('http://localhost:3000/chatSettings', {
    method: 'POST', // ou 'PUT' se for atualização
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(configData),
  });

  if (!response.ok) {
    throw new Error('Falha ao salvar');
  }

  return response.json();
}

// Função auxiliar para gerar IDs únicos
function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Chama a função de inicialização quando necessário
initializeAccountConfig();
