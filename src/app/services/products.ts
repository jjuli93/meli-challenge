import api from '~config/api';
import { Product, ProductDetail } from '~app/models/product';
import { ApiError } from '~app/models/apiError';

const productsBasePath = 'api/products';
interface GetProductsResponse {
  categories: string[];
  items: Product[];
}
export const getProducts = (searchText: string) =>
  api.get<GetProductsResponse, ApiError>(productsBasePath, { search: searchText });

interface GetProductResponse {
  item: ProductDetail;
}
export const getProduct = (productId: string) =>
  api.get<GetProductResponse, ApiError>(`${productsBasePath}/${productId}`);
