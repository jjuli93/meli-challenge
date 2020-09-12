import React from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

import { ProductDetailParams } from '~components/Routes/paths';
import { getProduct } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';
import { useRequest } from '~app/hooks/useRequest';
import Loading from '~components/Spinner/loading';
import ErrorHandler from '~components/ErrorHandler';

import ProductInfo from './components/ProductInfo';

function ProductDetail() {
  const { id } = useParams<ProductDetailParams>();
  const [product, loading, error] = useRequest(
    {
      request: getProduct,
      payload: id
    },
    [id]
  );

  return (
    <>
      {loading && <Loading className="screen-center" />}
      {error && <ErrorHandler error={error} />}
      {product && (
        <>
          <Helmet>
            <title>{product.item.title}</title>
          </Helmet>
          <CategoryBreadcrumb categories={product.item.categories} />
          <ProductInfo product={product.item} />
        </>
      )}
    </>
  );
}

export default ProductDetail;
