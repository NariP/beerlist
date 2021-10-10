import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import BeerCard from './BeerCard';

const BeerCards = ({ savedData }) => {
  return (
    <Row justify="center" gutter={[16, 16]}>
      {savedData.map(data => {
        return (
          <StyledCol
            key={data.id}
            xs={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <BeerCard data={data} />
          </StyledCol>
        );
      })}
    </Row>
  );
};
const StyledCol = styled(Col)({
  display: 'flex',
  justifyContent: 'center',
});
export default BeerCards;
