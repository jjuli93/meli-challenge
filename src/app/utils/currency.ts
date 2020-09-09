import { Price } from '~app/models/product';

import { formatNumber } from './numbers';

export type CurrencyType = 'ars' | 'usd';

export const getCurrencySymbol = (currency: CurrencyType) => {
  switch (currency) {
    case 'ars':
      return '$';
    case 'usd':
      return 'U$S';
    default:
      return '$';
  }
};

// eslint-disable-next-line no-magic-numbers
export const getDecimals = (decimal: number) => (decimal > 10 ? decimal.toString() : `0${decimal}`);

export const formatTotalPrice = ({ amount, currency, decimals }: Price) => {
  const integerPart = `${getCurrencySymbol(currency)}${formatNumber(amount)}`;
  return decimals ? `${integerPart},${getDecimals(decimals)}` : integerPart;
};
