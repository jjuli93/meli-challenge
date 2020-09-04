export enum QueryParamsKeys {
  search = 'search'
}

export const createSearchQueryParam = (searchText: string) => `${QueryParamsKeys.search}=${searchText}`;
