const getPath = (root, subLink) => {
  return `${root}/${subLink}`;
};

export const ROOTS = '/';

export const PATH_PAGE = {
  root: ROOTS,
  HOME: getPath('', 'home'),
  BEER_LIST: getPath('', 'beerList'),
  CART: getPath('', 'cart'),
};
