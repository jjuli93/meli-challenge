import React from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';
import { Helmet } from 'react-helmet';
import i18next from 'i18next';

import { QueryParamsKeys } from '~app/utils/queryParams';
import { getProducts } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';
import { useRequest } from '~app/hooks/useRequest';
import Loading from '~components/Spinner/loading';
import ErrorHandler from '~components/ErrorHandler';

import styles from './styles.module.scss';
import ProductItem from './components/ProductItem';

function SearchList() {
  const location = useLocation();
  const searchText = parse(location.search)[QueryParamsKeys.search] as string;

  const [products, loading, error] = useRequest(
    {
      request: getProducts,
      payload: searchText
    },
    [searchText]
  );

  return (
    <>
      <Helmet>
        <title>{i18next.t('SearchList:title', { searchText })}</title>
      </Helmet>
      {loading && <Loading className="screen-center" />}
      {error && <ErrorHandler error={error} />}
      {products && (
        <>
          <CategoryBreadcrumb categories={products.categories} />
          <div className={`${styles.searchContainer}`}>
            {products.items.map((product, index, productsArray) => (
              <ProductItem
                key={product.id}
                product={product}
                isLastItem={productsArray.length === index + 1}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SearchList;
