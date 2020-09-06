export const home = '/';
export const searchList = '/items';
export const productDetail = {
  path: `${searchList}/:id`,
  params: {
    id: ':id'
  }
};
