import React from 'react';
import styled from 'styled-components';

const ModalInner = ({ children, title, closeButton }) => {
  return (
    <Wrapper>
      <Header title={title}>
        <Title>{title}</Title>
        {closeButton}
      </Header>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div(({ theme }) => ({
  borderRadius: 20,
  padding: '1em',
  color: 'inherit',
  minWidth: 400,
  maxWidth: 600,
  minHeight: 200,
  background: theme.color.bgColor,
  borderBottom: `1px solid ${theme.color.normalAlpha}`,
  boxShadow: `0 3px 5px ${theme.color.normalAlpha}`,
  zIndex: 200,
}));
const Header = styled.div({ paddingBottom: '0.5em', display: 'flex' });

const Title = styled.div(({ theme }) => ({
  display: 'block',
  color: theme.color.textColor,
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  borderBottom: `1px solid ${theme.color.normalAlpha}`,
  padding: '0.5em',
}));
export default ModalInner;
