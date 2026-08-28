import { useState } from "react";
import { login } from "../../services/authService.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");

    const result = await login(email, password);

    if (result === 200) {
      console.log("Login successful");
      alert("IRRAAAAAAAAAA")
      return;
    }

    if (result === 401) {
      setErrorMessage("Invalid password");
      return;
    }

    if (result === 422) {
      setErrorMessage("User not found");
      return;
    }

    if (result === 500) {
      setErrorMessage("Internal server error");
      return;
    }

    setErrorMessage("An unexpected error occurred.");
  }

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      Email
      <input
        type="text"
        id="emailInput"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />

      Password
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />

      {errorMessage && <p>{errorMessage}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;