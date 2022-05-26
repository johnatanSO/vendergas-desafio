import React, { useState, useContext } from "react";
import { LoginScreen } from "./components/LoginScreen";
import "./styles/global.scss";
import { CreateAccountSuccessModal } from "./components/CreateAccountSuccessModal";
import Modal from "react-modal";
import {userDataContext} from './userDataContext'

Modal.setAppElement("#root");

function App() {
  const [logged, setLogged] = useState(false);
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false); 
  const {name} = useContext(userDataContext)

  function handleCloseCreateAccountModal() {
    setCreateAccountSuccess(false);
  }

  return (
    <>
      <CreateAccountSuccessModal
        onRequestClose={handleCloseCreateAccountModal}
        isOpen={createAccountSuccess}
      />
      {!logged ? (
        <LoginScreen
          setCreateAccountSuccess={setCreateAccountSuccess}
          setLogged={setLogged}
        />
      ) : (
        <div>
          <h2>Usuário logado</h2>
          <span>Seja bem vindo, {name}</span>
        </div>
      )}
    </>
  );
}

export default App;
