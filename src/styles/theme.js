import { COLORS } from './colors';
export const light = {
  color: {
    primary: COLORS.LIGHT.PRIMARY,
    secondary: COLORS.LIGHT.SECONDARY,
    third: COLORS.LIGHT.THIRD,
    bgColor: 'white',
    secondaryBgColor: '#f2f6fc',
    textColor: '#333',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
export const dark = {
  color: {
    primary: COLORS.LIGHT.SECONDARY,
    secondary: COLORS.LIGHT.PRIMARY,
    third: COLORS.DARK.THIRD,
    bgColor: COLORS.DARK.PRIMARY,
    secondaryBgColor: COLORS.DARK.SECONDARY,
    textColor: '#f2f6fc',
    secondaryText: '#999',
    normalAlpha: 'rgba(153, 153, 153, 0.3)',
  },
};
