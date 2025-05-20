function handleLoginSubmit(e) {
  e.preventDefault(); 

  const formData = new FormData(e.target);
  const token = formData.get("token"); 
  if (!token) {
    alert("Por favor, insira um token válido.");
    return;
  }


  $.ajax({
    url: "https://api.github.com/user",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json"
    },
    success: function (data) {

      const session = {
        ...data,
        expiration: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      };
      localStorage.setItem("session", JSON.stringify(session));
      console.log("Sessão salva com sucesso:", session);

      const userPayload = {
        email: data.email,
        name: data.name || data.login 
      };


      $.ajax({
        url: "http://localhost:3000/users", 
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(userPayload),
        success: function () {
          console.log("Usuário registrado com sucesso no JSON Server:", userPayload);
          alert("Login e registro concluídos com sucesso!");
        },
        error: function (err) {
          console.error("Erro ao registrar no JSON Server:", err);
        }
      });
    },
    error: function (err) {
      alert("Token inválido ou erro de autenticação.");
      console.error("Erro na autenticação:", err);
    }
  });
}
