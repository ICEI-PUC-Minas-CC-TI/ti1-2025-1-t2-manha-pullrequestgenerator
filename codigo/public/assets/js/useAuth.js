const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};

function useAuth() {
  const store = window.useState();

  const setToken = async (token, user) => {
    const resp = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!resp.ok) {
      throw new Error("Erro ao validar o token. Verifique e tente novamente.");
    }

    const ghUser = await resp.json();

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    const session = {
      token: token,
      email: user?.email || "",
      username: ghUser.login,
      expiration: expirationDate.toISOString(),
      userId: user?.id || "",
    };

    store.setState("session", session);
  };

  const login = async (email, password) => {
    const response = await fetch(
      `http://localhost:3000/users?email=${encodeURIComponent(email)}`
    );

    const users = await response.json();

    if (users.length == 0) {
      throw new Error("Erro ao realizar o login");
    }

    const user = users[0];

    const storedHash = user.password;

    const hashedInput = await hashPassword(password);

    if (storedHash !== hashedInput) {
      throw new Error("Erro ao realizar o login");
    }

    await setToken(user.token, user);

    return user;
  };

  const register = async (email, name, password) => {
    const tempSession = store.getState("session");
    if (!tempSession) {
      window.location.href = "token.html";
      return;
    }

    const res = await fetch(
      `http://localhost:3000/users?email=${encodeURIComponent(email)}`
    );
    const users = await res.json();

    if (users.length > 0) {
      throw new Error("Este email já está cadastrado.");
    }

    const hashedPassword = await hashPassword(password);

    const registerRes = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password: hashedPassword,
        token: tempSession.token,
      }),
    });

    if (!registerRes.ok) {
      return false;
    }

    await login(email, password);

    return true;
  };

  const getUserMetadata = async () => {
    const session = store.getState("session");

    if (!session) return;

    const resp = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!resp.ok) {
      throw new Error(
        "client error: cannot get the github user metadata may be an incorrect token issue."
      );
    }

    const ghUser = await resp.json();

    return {
      avatar: ghUser.avatar_url,
      username: ghUser.login,
    };
  };

  const getSession = () => {
    const session = store.getState('session');

    if (!session) return null;

    const now = new Date();
    const expiration = new Date(session.expiration);

    if (now > expiration) {
      store.setState('session', null);
      window.location.href = "login.html";

      return null;
    }

    return session;
  }

  return {
    login,
    setToken,
    register,
    getUserMetadata,
    getSession
  };
}

window.useAuth = useAuth;
