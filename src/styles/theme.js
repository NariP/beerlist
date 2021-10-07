import { COLORS } from './colors';
export const light = {
  color: {
    primary: COLORS.LIGHT.PRIMARY,
    secondary: COLORS.LIGHT.SECONDARY,
    bgColor: 'white',
    textColor: '#333',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
export const dark = {
  color: {
    primary: COLORS.LIGHT.SECONDARY,
    secondary: COLORS.LIGHT.PRIMARY,
    bgColor: COLORS.DARK.PRIMARY,
    textColor: '#fcfcfc',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
