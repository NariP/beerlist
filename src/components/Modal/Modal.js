import React, { useRef } from 'react';
import styled from 'styled-components';
import { Portal } from 'components';

const Modal = ({ children, toggleModal, open, method }) => {
  const modalRef = useRef(null);
  const clickHandler = ({ target }) => {
    if (target !== modalRef.current) return;
    toggleModal();
    if (!method) return;
    method();
  };
  return (
    <Portal>
      <StyledModal ref={modalRef} open={open} onClick={clickHandler}>
        {children}
      </StyledModal>
    </Portal>
  );
};
const StyledModal = styled('div')(({ open }) => ({
  display: open ? 'flex' : 'none',
  background: 'rgba(200, 200, 200, 0.6)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
}));

export default Modal;
