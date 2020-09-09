import { CurrencyType } from '~app/utils/currency';

export interface Price {
  currency: CurrencyType;
  amount: number;
  decimals: number;
}
export interface Product {
  id: number;
  title: string;
  city: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
}

export interface ProductDetail {
  id: number;
  title: string;
  categories: string[];
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
}
