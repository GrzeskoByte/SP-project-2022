import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { ModalStyled } from "./Modal.styled";

const Modal = ({
  children,
  handleOnClose,
  isOpen,
  shouldBeCloseOnOutsideClick,
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if (shouldBeCloseOnOutsideClick && target === current) {
      handleOnClose();
    }
  };

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const { current: modal } = modalRef;

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    const handleCancel = (e) => {
      e.preventDefault();
      handleOnClose();
    };

    modal.addEventListener("cancel", handleCancel);

    return () => {
      modal.removeEventListener("cancel", handleCancel);
    };
  }, [handleOnClose]);

  return ReactDOM.createPortal(
    <ModalStyled ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </ModalStyled>,
    document.body
  );
};

export default Modal;
