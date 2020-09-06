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
export const getTotalPrice = (price: number, decimal: number) => price + decimal / 100;