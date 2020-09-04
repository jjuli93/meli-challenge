import React from 'react';
import i18next from 'i18next';
import { Link, useHistory } from 'react-router-dom';

import logo from 'app/assets/Logo_ML.png';
import SearchBar from '~components/SearchBar';
import { home, searchList } from '~components/Routes/paths';
import { createSearchQueryParam } from '~app/utils/queryParams';

import styles from './styles.module.scss';

function Header() {
  const history = useHistory();

  const handleSearch = (searchText: string) => {
    history.push({
      pathname: searchList,
      search: createSearchQueryParam(searchText)
    });
  };

  return (
    <header className={`row center ${styles.header}`}>
      <div className="row p-5 container full-width">
        <Link className="m-right-7" to={home}>
          <img className={styles.logo} src={logo} alt={i18next.t('General:appTitle') as string} />
        </Link>
        <SearchBar onSearch={handleSearch} />
      </div>
    </header>
  );
}

export default Header;
