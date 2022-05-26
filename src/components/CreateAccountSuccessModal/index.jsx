import React from "react";
import Modal from "react-modal";

export function CreateAccountSuccessModal({ onRequestClose, isOpen }) {
  return (
    <Modal
      className="react-modal-content"
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
    >
      <h1>Cadastro realizado com sucesso!</h1>
    </Modal>
  );
}
