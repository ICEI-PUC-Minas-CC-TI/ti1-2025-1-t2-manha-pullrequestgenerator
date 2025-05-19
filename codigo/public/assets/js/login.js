$(document).ready(function () {
  $('#loginForm').submit(function (e) {
    e.preventDefault(); // Impede envio do formulário

    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
    const message = $('#loginMessage');

    // Limpa estilos anteriores
    message.removeClass('text-red-500 text-green-500').text('');

    if (!email || !password) {
      message.addClass('text-red-500').text('Por favor, preencha todos os campos.');
    } else {
      // Simulando login bem-sucedido
      message.addClass('text-green-500').text('Login realizado com sucesso!');
      
      // Redirecionamento simulado após 1s
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }
  });
});