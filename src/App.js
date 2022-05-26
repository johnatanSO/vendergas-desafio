import React, { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import "./styles/global.scss";
import { CreateAccountSuccessModal } from "./components/CreateAccountSuccessModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [logged, setLogged] = useState(false);
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false);

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
        <h1>Logado</h1>
      )}
    </>
  );
}

export default App;
