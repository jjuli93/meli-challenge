import { CurrencyType } from '~app/utils/currency';

export interface Product {
  id: number;
  title: string;
  price: {
    currency: CurrencyType;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: boolean;
  freeShipping: boolean;
}
