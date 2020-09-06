import React from 'react';
import { useParams } from 'react-router';

import { ProductDetailParams } from '~components/Routes/paths';
import { getProduct } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';

import ProductInfo from './components/ProductInfo';

function ProductDetail() {
  const { id } = useParams<ProductDetailParams>();
  const product = getProduct(parseInt(id));

  return (
    <>
      <CategoryBreadcrumb categories={product.categories} />
      <ProductInfo product={product} />
    </>
  );
}

export default ProductDetail;
