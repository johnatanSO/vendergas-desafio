import React, { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import "./styles/global.scss";
import { CreateAccountSuccessModal } from "./components/CreateAccountSuccessModal";
import Modal from "react-modal";
import {UserDataContextProvider} from './userDataContext'

Modal.setAppElement("#root");

function App() {
  const [logged, setLogged] = useState(false);
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false);

  function handleCloseCreateAccountModal() {
    setCreateAccountSuccess(false);
  }

  return (
    <UserDataContextProvider>
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
        <h1>Logado</h1>
      )}
    </UserDataContextProvider>
  );
}

export default App;
