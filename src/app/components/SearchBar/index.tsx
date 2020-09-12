import React from 'react';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import searchIcon from './assets/searchIcon.png';
import styles from './styles.module.scss';

interface Props {
  onSearch: (searchText: string) => void;
  initialValue?: string;
}

interface FormData {
  searchText: string;
}

function SearchBar({ onSearch, initialValue = '' }: Props) {
  const { register, handleSubmit } = useForm<FormData>();

  const handleSearch = (data: FormData) => {
    onSearch(data.searchText);
  };

  return (
    <form className="row item-1" onSubmit={handleSubmit(handleSearch)}>
      <input
        name="searchText"
        ref={register({ required: true })}
        className={`item-1 p-4 text-medium ${styles.input}`}
        type="text"
        autoFocus
        placeholder={i18next.t('SearchBar:placeholder') as string}
        defaultValue={initialValue}
        aria-label={i18next.t('SearchBar:label') as string}
      />
      <button className={styles.button} type="submit" aria-label={i18next.t('SearchBar:label') as string}>
        <img className={styles.searchIcon} src={searchIcon} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
