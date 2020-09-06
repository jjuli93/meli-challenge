import React from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';

import { QueryParamsKeys } from '~app/utils/queryParams';
import { getProducts } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';

import styles from './styles.module.scss';
import ProductItem from './components/ProductItem';

function SearchList() {
  const location = useLocation();
  const searchText = parse(location.search)[QueryParamsKeys.search] as string;

  // TODO make lazy request
  const products = getProducts(searchText).data;

  return (
    <div>
      <CategoryBreadcrumb categories={products.categories} />
      <div className={`${styles.searchContainer}`}>
        {products.items.map((product, index, productsArray) => (
          <ProductItem key={product.id} product={product} isLastItem={productsArray.length < index + 1} />
        ))}
      </div>
    </div>
  );
}

export default SearchList;
