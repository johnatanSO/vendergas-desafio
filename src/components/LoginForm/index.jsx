import React from "react";
import { useState } from "react";
import { api } from "../../services/api";
import {useContext} from 'react'
import {userDataContext} from '../../userDataContext'

export function LoginForm({ setLogged }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const {name, setName} = useContext(userDataContext)
  const {token, setToken} = useContext(userDataContext)

  async function handleLogin(event) {
    event.preventDefault();
    await api
      .post("user/login", {
        id: Math.random() * 100,
        usernameOrEmail,
        password,
      })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          setLogged(true);
          /* setToken(res.data.token) */
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("Usuário ou senha inválidos");
          alert("Usuário ou senha inválido!");
          setUsernameOrEmail("");
          setPassword("");
        }
      });
  }

  return (
    <div className="inputs">
      <h2>Entrar com uma conta existente</h2>
      <form>
        <input
          onChange={(e) => {
            setUsernameOrEmail(e.target.value);
          }}
          value={usernameOrEmail}
          type="text"
          name="usernameOrEmailLogin"
          id="usernameOrEmailLogin"
          placeholder="Nome de usuário ou E-mail"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          id="passwordLogin"
          placeholder="Senha"
        />
        <button onClick={handleLogin} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
