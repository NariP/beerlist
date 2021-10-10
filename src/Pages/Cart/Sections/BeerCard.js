import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const BeerCard = ({ data }) => {
  const { Meta } = Card;
  return (
    <StyledCard
      hoverable
      style={{ width: 240, borderRadius: 20 }}
      cover={<Thumbnail alt={data.name} src={data.image_url} />}
    >
      <Meta title={data.name} description={data.tagline} />
    </StyledCard>
  );
};
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.color.bgColor,
  borderColor: theme.color.normalAlpha,
  '.ant-card-meta-title, .ant-card-meta-description': {
    color: theme.color.textColor,
  },
}));
const Thumbnail = styled.img({
  height: 200,
  objectFit: 'contain',
  padding: '1em 0',
});

export default BeerCard;
