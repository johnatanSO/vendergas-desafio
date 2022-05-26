import React from "react";
import { useState } from "react";
import { api } from "../../services/api";

export function CreateAccountForm({ setCreateAccountSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleCreateAccount(event) {
    event.preventDefault();
    await api
      .post("user/createAccount", {
        id: Math.random() * 100,
        email,
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCreateAccountSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setUsername("");
    setPassword("");
  }

  return (
    <div className="inputs">
      <h2>Cadastrar uma nova conta</h2>
      <form>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          id="emailCreateAccount"
          placeholder="E-mail"
        />

        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          name="username"
          id="usernameCreateAccount"
          placeholder="Usuário"
        />

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          id="passwordCreateAccount"
          placeholder="Senha"
        />

        <button onClick={handleCreateAccount} type="submit">
          Cadastrar novo usuário
        </button>
      </form>
    </div>
  );
}
