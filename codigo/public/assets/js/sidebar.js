// sidebar.js atualizado com jQuery + JSON Server + useRouter + melhorias

$(document).ready(function () {
  const chatList = $('#chat-list');
  const router = useRouter();
  const currentChatId = router.query.id;
  const API_URL = 'http://localhost:3000/chats'; // ajuste conforme necessário
  const userId = sessionStorage.getItem('userId');

  // Verifica se o userId está presente
  if (!userId) {
    alert('Usuário não autenticado. Redirecionando para login.');
    window.location.href = '/login.html'; // ajuste para sua rota de login
    return;
  }

  function loadChats() {
    $.get(`${API_URL}?userId=${userId}`, function (chats) {
      renderChats(chats);
    }).fail(function () {
      alert('Erro ao carregar chats.');
    });
  }

  function renderChats(chats) {
    chatList.empty();

    if (chats.length === 0) {
      chatList.append('<li class="text-gray-400 italic">Nenhum chat encontrado.</li>');
      return;
    }

    chats.forEach((chat, index) => {
      const li = $(`
        <li class="px-3 py-2 rounded cursor-pointer hover:bg-gray-100 flex justify-between items-center ${chat.id == currentChatId ? 'bg-gray-200' : ''}" data-id="${chat.id}">
          <span class="truncate block">${chat.name}</span>
          ${chats.length > 1 && chat.id != currentChatId ? '<button class="text-red-500 hover:text-red-300 delete-chat">🗑</button>' : ''}
        </li>
      `);

      // Ao clicar no item da lista (mas não no botão de excluir)
      li.on('click', function (e) {
        if (!$(e.target).hasClass('delete-chat')) {
          router.push(`/chat.html?id=${chat.id}`);
        }
      });

      // Excluir chat
      li.find('.delete-chat').on('click', function (e) {
        e.stopPropagation();
        if (confirm('Tem certeza que deseja excluir este chat?')) {
          $.ajax({
            url: `${API_URL}/${chat.id}`,
            type: 'DELETE',
            success: function () {
              if (chat.id == currentChatId) {
                const nextChat = chats.find(c => c.id !== chat.id);
                if (nextChat) {
                  router.push(`/chat.html?id=${nextChat.id}`);
                } else {
                  location.reload();
                }
              } else {
                loadChats();
              }
            },
            error: function () {
              alert('Erro ao excluir o chat.');
            }
          });
        }
      });

      chatList.append(li);
    });
  }

  // Criar novo chat
  $('#new-chat-btn').on('click', function () {
    const name = prompt('Nome do novo chat:');
    if (!name) return;

    $.post(API_URL, { name, userId }, function (newChat) {
      router.push(`/chat.html?id=${newChat.id}`);
    }).fail(function () {
      alert('Erro ao criar novo chat.');
    });
  });

  // Filtro de busca
  $('#search-input').on('input', function () {
    const searchTerm = $(this).val().toLowerCase();
    $('#chat-list li').each(function () {
      const chatName = $(this).find('span').text().toLowerCase();
      $(this).toggle(chatName.includes(searchTerm));
    });
  });

  loadChats();
});


