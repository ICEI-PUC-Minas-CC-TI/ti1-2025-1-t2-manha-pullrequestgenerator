/**
 * Factory to create an OpenAI HTTP connector with built-in message management.
 *
 * @param {string} apiKey - Your OpenAI API key.
 * @param {string} [defaultModel="gpt-3.5-turbo"] - The default model to use.
 * @returns {Object} - A connector with methods to manage messages and send requests.
 */
function createOpenAIConnector(apiKey, defaultModel = "gpt-3.5-turbo") {
  return {
    apiKey,
    model: defaultModel,
    messages: [],

    /**
     * Set a different model for subsequent requests.
     * @param {string} newModel
     */
    setModel(newModel) {
      this.model = newModel;
    },

    /**
     * Add a chat message to the queue.
     * @param {string} role - "user", "assistant", or "system".
     * @param {string} content - The message content.
     */
    addMessage(role, content) {
      this.messages.push({ role, content });
    },

    /**
     * Clear all queued messages.
     */
    clearMessages() {
      this.messages = [];
    },

    /**
     * Send the accumulated messages to the OpenAI API.
     * @returns {Promise<Object>} - The API response.
     * @throws {Error} - On HTTP or network errors.
     */
    async send() {
      const url = "https://api.openai.com/v1/chat/completions";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: this.messages
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
      }

      return await response.json();
    }
  };
};


window.createOpenAIConnector = createOpenAIConnector;