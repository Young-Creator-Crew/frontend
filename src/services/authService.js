async function login(email, password) {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    return response.status;

  } catch (error) {
    console.log("Failed to connect to the API");
  }
}

async function register(email, password, name) {
  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });

    return response.status;

  } catch (error) {
    console.log("Failed to connect to the API");
  }
}

export { login, register };
