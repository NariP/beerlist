import { Home, BeerList, Cart } from 'Pages';
import { PageNotFound } from 'components';
import { GuestGuard } from 'Guards';
import { PATH_PAGE, ROOTS } from './paths';
import { GeneralLayout } from '../Layout';

export const PageRoutes = [
  {
    path: ROOTS,
    exact: true,
    guard: GuestGuard,
    component: Home,
  },
  {
    path: PATH_PAGE.HOME,
    exact: true,
    component: Home,
    layout: GeneralLayout,
  },
  {
    path: PATH_PAGE.BEER_LIST,
    exact: true,
    component: BeerList,
    layout: GeneralLayout,
  },
  {
    path: PATH_PAGE.CART,
    exact: true,
    component: Cart,
    layout: GeneralLayout,
  },
  {
    path: '',
    exact: true,
    component: PageNotFound,
    layout: GeneralLayout,
  },
];
