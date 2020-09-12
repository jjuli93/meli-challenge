export type CurrencyType = 'ARS' | 'USD';
export interface Price {
  currency: CurrencyType;
  amount: number;
  decimals: number;
}

export type Condition = 'new' | 'used';
export interface Product {
  id: number;
  title: string;
  city: string;
  price: Price;
  picture: string;
  condition: Condition;
  freeShipping: boolean;
}

export interface ProductDetail {
  id: number;
  title: string;
  categories: string[];
  price: Price;
  picture: string;
  condition: Condition;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
}
