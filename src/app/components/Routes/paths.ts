export const home = '/';
export const searchList = '/items';
export type ProductDetailParams = {
  id: string;
};

export const productDetail = {
  path: `${searchList}/:id`,
  params: {
    id: ':id'
  }
};
