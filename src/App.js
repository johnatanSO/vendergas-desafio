import React, { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import "./styles/global.scss";
import { CreateAccountSuccessModal } from "./components/CreateAccountSuccessModal";
import Modal from "react-modal";
import {Dashboard} from "./components/Dashboard";

Modal.setAppElement("#root");

function App() {
  const [logged, setLogged] = useState(true);
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
        <Dashboard />
      )}
    </>
  );
}

export default App;
