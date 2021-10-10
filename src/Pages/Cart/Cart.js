import { BeerCards } from './Sections';
import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constatns';
const Cart = () => {
  const savedData = localWorker.getItem(LS_KEY.selected_beer);
  return (
    <div>
      <h2>Cart</h2>
      {savedData ? (
        <BeerCards savedData={savedData} />
      ) : (
        <div>장바구니에 추가된 맥주가 없습니다.</div>
      )}
    </div>
  );
};

export default Cart;
