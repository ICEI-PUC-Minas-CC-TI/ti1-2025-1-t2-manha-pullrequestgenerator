// sidebar.js

const CHAT_STORAGE_KEY = "userChats";

// Recupera os chats salvos do localStorage
function getSavedChats() {
  return JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY)) || [];
}

// Salva os chats no localStorage
function saveChats(chats) {
  localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chats));
}

// Gera um ID único simples
function generateChatId() {
  return "chat_" + Date.now();
}

// Renderiza os chats
function renderChatList() {
  const chats = getSavedChats();
  const chatList = document.getElementById("chat-list");
  chatList.innerHTML = "";

  const selectedId = localStorage.getItem("selectedChatId");

  chats.forEach(chat => {
    const li = document.createElement("li");
    li.className = `flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100 cursor-pointer ${
      chat.id === selectedId ? "bg-gray-200" : ""
    }`;
    li.dataset.id = chat.id;

    const nameSpan = document.createElement("span");
    nameSpan.className = "truncate flex-1 mr-2 text-gray-800";
    nameSpan.textContent = chat.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "text-red-500 hover:text-red-300";
    deleteBtn.textContent = "🗑";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteChat(chat.id);
    });

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);

    li.addEventListener("click", (e) => {
      if (e.target !== deleteBtn) {
        selectChat(chat.id);
      }
    });

    chatList.appendChild(li);
  });
}

// Cria um novo chat
function createNewChat() {
  const name = prompt("Digite o nome do novo chat:");
  if (!name) return;

  const chats = getSavedChats();
  const newChat = { id: generateChatId(), name };
  chats.push(newChat);
  saveChats(chats);
  renderChatList();
  selectChat(newChat.id);
}

// Seleciona um chat
function selectChat(id) {
  localStorage.setItem("selectedChatId", id);
  renderChatList(); // Re-renderiza para aplicar visual
  console.log("Chat selecionado:", id);

  // Aqui você pode adicionar lógica para carregar as mensagens do chat
}

// Deleta um chat
function deleteChat(id) {
  let chats = getSavedChats();
  chats = chats.filter(chat => chat.id !== id);
  saveChats(chats);

  const selectedId = localStorage.getItem("selectedChatId");
  if (selectedId === id) {
    localStorage.removeItem("selectedChatId");
  }

  renderChatList();
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderChatList();
  document.getElementById("new-chat-btn").addEventListener("click", createNewChat);
});


