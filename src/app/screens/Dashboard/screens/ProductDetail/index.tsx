import React from 'react';
import { useParams } from 'react-router';

import { ProductDetailParams } from '~components/Routes/paths';
import { getProduct } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';
import { useRequest } from '~app/hooks/useRequest';
import Loading from '~components/Spinner/loading';

import ProductInfo from './components/ProductInfo';

function ProductDetail() {
  const { id } = useParams<ProductDetailParams>();
  const [product, loading, error] = useRequest(
    {
      request: getProduct,
      payload: parseInt(id)
    },
    [id]
  );

  return (
    <>
      {loading && <Loading className="screen-center" />}
      {product && (
        <>
          <CategoryBreadcrumb categories={product.item.categories} />
          <ProductInfo product={product.item} />
        </>
      )}
    </>
  );
}

export default ProductDetail;
