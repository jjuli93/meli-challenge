import api from '~config/api';
import { Product, ProductDetail } from '~app/models/product';

const productsBasePath = 'products';
interface GetProductsResponse {
  categories: string[];
  items: Product[];
}
export const getProducts = (searchText: string) =>
  api.get<GetProductsResponse>(productsBasePath, { search: searchText });

interface GetProductResponse {
  item: ProductDetail;
}
export const getProduct = (productId: number) =>
  api.get<GetProductResponse>(`${productsBasePath}/${productId}`);
