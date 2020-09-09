import { parse } from 'query-string';
import React from 'react';
import i18next from 'i18next';
import { Link, useHistory, useLocation } from 'react-router-dom';

import logo from 'app/assets/Logo_ML.png';
import SearchBar from '~components/SearchBar';
import { home, searchList } from '~components/Routes/paths';
import { createSearchQueryParam, QueryParamsKeys } from '~app/utils/queryParams';

import styles from './styles.module.scss';

function Header() {
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (searchText: string) => {
    history.push({
      pathname: searchList,
      search: createSearchQueryParam(searchText)
    });
  };

  const searchText = parse(location.search)[QueryParamsKeys.search] as string;

  return (
    <header className={`row center ${styles.header}`}>
      <div className="row p-5 container full-width">
        <Link className="m-right-7" to={home}>
          <img className={styles.logo} src={logo} alt={i18next.t('General:appTitle') as string} />
        </Link>
        <SearchBar onSearch={handleSearch} initialValue={searchText} />
      </div>
    </header>
  );
}

export default Header;
