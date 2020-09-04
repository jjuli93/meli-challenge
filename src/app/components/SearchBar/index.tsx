import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import searchIcon from './assets/searchIcon.png';
import styles from './styles.module.scss';

interface Props {
  onSearch: (searchText: string) => void;
}

interface FormData {
  searchText: string;
}

function SearchBar({ onSearch }: Props) {
  const { register, handleSubmit } = useForm<FormData>();

  const handleSearch = (data: FormData) => {
    onSearch(data.searchText);
  };

  return (
    <form className="row full-width" onSubmit={handleSubmit(handleSearch)}>
      <input
        name="searchText"
        ref={register}
        className={`item-1 p-4 ${styles.input}`}
        type="text"
        autoFocus
        placeholder={i18next.t('SearchBar:placeholder') as string}
      />
      <button className={styles.button} type="submit">
        <img className={styles.searchIcon} src={searchIcon} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
