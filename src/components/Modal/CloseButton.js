import React from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

const CloseButton = ({ toggleModal, method }) => {
  const clickHandler = () => {
    toggleModal();
    method && method();
  };
  return (
    <Close type="button" onClick={clickHandler}>
      <CgClose />
    </Close>
  );
};

const Close = styled.button(({ theme }) => ({
  color: theme.color.textColor,
  border: 'none',
  backgroundColor: theme.color.bgColor,
}));

export default CloseButton;
