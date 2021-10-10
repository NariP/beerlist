import React from 'react';
import styled from 'styled-components';

const BeerDetail = ({ selectedBeer }) => {
  if (!selectedBeer) return null;
  const {
    name,
    abv,
    image_url,
    tagline,
    first_brewed,
    description,
    food_pairing,
    brewers_tips,
  } = selectedBeer;
  return (
    <Wrapper>
      <Title>
        <span>{name}</span>
        <span>( {abv}% )</span>
      </Title>
      <StyledDetail>
        <img
          src={image_url}
          alt={name}
          style={{ height: 400, padding: '0 2em' }}
        />
        <DetailList>
          <li>
            <Label>tagline:</Label>
            <span>{tagline}</span>
          </li>
          <li>
            <Label>first_brewed:</Label>
            <span>{first_brewed}</span>
          </li>
          <li>
            <Label>description</Label>
            <p>{description}</p>
          </li>
          <li>
            <Label>food paring</Label>
            <p>{food_pairing.join(', ')}</p>
          </li>
          <li>
            <Label>brewers_tips</Label>
            <p>{brewers_tips}</p>
          </li>
        </DetailList>
      </StyledDetail>
    </Wrapper>
  );
};
const Wrapper = styled.div(({ theme }) => ({
  maxHeight: 600,
  overflowY: 'scroll',
  padding: '1em',
  color: theme.color.textColor,
}));
const Title = styled.div({
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginBottom: '1em',
  '& > span + span': {
    marginLeft: '0.5em',
  },
});
const Label = styled.span({
  fontWeight: 'bold',
  marginRight: '0.5em',
});
const StyledDetail = styled.div({
  display: 'flex',
});
const DetailList = styled.ul(({ theme }) => ({
  padding: '0.5em 2em',
  borderLeft: `2px solid ${theme.color.normalAlpha}`,
  backgroundColor: theme.color.secondaryBgColor,
  'li + li': {
    marginTop: '1em',
  },
  p: {
    textIndent: '0.8em',
  },
}));
export default BeerDetail;
