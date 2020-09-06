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
  condition: string;
  freeShipping: boolean;
}

export interface ProductDetail {
  id: number;
  title: string;
  categories: string[];
  price: {
    currency: CurrencyType;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
}
