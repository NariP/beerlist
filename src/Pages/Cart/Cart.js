import styled from 'styled-components';
import { BeerCards } from './Sections';
import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constatns';
const Cart = () => {
  const savedData = localWorker.getItem(LS_KEY.selected_beer);
  return (
    <Wrapper>
      <PageName>Cart</PageName>
      {savedData ? (
        <BeerCards savedData={savedData} />
      ) : (
        <div>장바구니에 추가된 맥주가 없습니다.</div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div({
  maxWidth: 1200,
  margin: '0 auto',
});
const PageName = styled.h2(({ theme }) => ({
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: theme.color.textColor,
}));

export default Cart;
