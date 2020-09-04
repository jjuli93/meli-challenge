import React from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';

import { QueryParamsKeys } from '~app/utils/queryParams';
import { getProducts } from '~app/services/products';
import CategoryBreadcrumb from '~components/CategoryBreadcrumb';

function SearchList() {
  const location = useLocation();
  const searchText = parse(location.search)[QueryParamsKeys.search] as string;

  // TODO make lazy request
  const products = getProducts(searchText);

  return (
    <div>
      <CategoryBreadcrumb categories={products.data.categories} />
    </div>
  );
}

export default SearchList;
