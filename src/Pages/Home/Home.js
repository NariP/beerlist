import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const Home = () => {
  return (
    <Wrapper>
      <PageName>Home</PageName>
      <Card>
        <Title>세상의 모든 맥주!</Title>
        <p>
          맥주 정보 페이지에서 원하는 맥주를 장바구니에 추가해보세요!
          <br /> 장바구니에 추가한 맥주는 장바구니 페이지에서 확인할 수
          있습니다.
        </p>
        <div>
          <span>api 제공</span>
          <Url href="https://punkapi.com/documentation/v2" target="_blank">
            @Punk API
          </Url>
        </div>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.div(({ theme }) => ({
  maxWidth: 1200,
  margin: '0 auto',
  '.ant-card': {
    background: theme.color.bgColor,
    color: theme.color.textColor,
    borderColor: theme.color.normalAlpha,
  },
}));
const PageName = styled.h2(({ theme }) => ({
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: theme.color.textColor,
}));

const Title = styled.div({
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginBottom: '0.5em',
});
const Url = styled.a(({ theme }) => ({
  color: theme.color.third,
  marginLeft: '0.3em',
}));
export default Home;
