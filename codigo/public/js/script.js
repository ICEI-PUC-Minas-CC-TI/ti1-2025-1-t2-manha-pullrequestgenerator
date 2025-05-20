$(document).ready(function () {
  // Redireciona para a página de login
  $('#loginBtn').on('click', function () {
    window.location.href = 'login.html';
  });

  // Redireciona para a página de cadastro
  $('#startBtn').on('click', function () {
    window.location.href = 'register.html';
  });
});
