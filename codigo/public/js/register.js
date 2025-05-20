$(document).ready(function () {
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    const message = $('#registerMessage');

    message.removeClass('text-red-500 text-green-500').text('');

    if (!name || !email || !password) {
      message.addClass('text-red-500').text('Preencha todos os campos.');
      return;
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          message.addClass('text-red-500').text('Erro ao criptografar a senha.');
          return;
        }

        // Verifica se já existe um usuário com o mesmo email
        fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}`)
          .then(res => res.json())
          .then(users => {
            if (users.length > 0) {
              message.addClass('text-red-500').text('Este email já está cadastrado.');
              return;
            }

            // Envia o novo usuário
            fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, password: hash })
            })
              .then(res => {
                if (res.ok) {
                  message.addClass('text-green-500').text('Cadastro realizado com sucesso!');
                  $('#registerForm')[0].reset();
                } else {
                  message.addClass('text-red-500').text('Erro ao cadastrar.');
                }
              })
              .catch(() => {
                message.addClass('text-red-500').text('Erro ao se comunicar com o servidor.');
              });
          });
      });
    });
  });
});
