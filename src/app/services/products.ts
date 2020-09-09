import api from '~config/api';
import { Product, ProductDetail } from '~app/models/product';
import { ApiError } from '~app/models/apiError';

const productsBasePath = 'products';
interface GetProductsResponse {
  categories: string[];
  items: Product[];
}
export const getProducts = (searchText: string) =>
  api.get<GetProductsResponse, ApiError>(productsBasePath, { search: searchText });

interface GetProductResponse {
  item: ProductDetail;
}
export const getProduct = (productId: number) =>
  api.get<GetProductResponse, ApiError>(`${productsBasePath}/${productId}`);
