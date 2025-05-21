$(document).ready(function () {
  $('#loginForm').submit(async function (e) {
    e.preventDefault();

    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
    const message = $('#loginMessage');

    message.removeClass('text-red-500 text-green-500').text('');

    if (!email || !password) {
      message.addClass('text-red-500').text('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}`);
      const users = await response.json();

      if (users.length === 0) {
        message.addClass('text-red-500').text('Usuário não encontrado.');
        return;
      }

      const user = users[0];
      const storedHash = user.password;

      bcrypt.compare(password, storedHash, function (err, result) {
        if (result) {
          message.addClass('text-green-500').text('Login realizado com sucesso!');
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 1000);
        } else {
          message.addClass('text-red-500').text('Senha incorreta.');
        }
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      message.addClass('text-red-500').text('Erro ao tentar fazer login.');
    }
  });
});