import React from 'react';
import styles from '../styles/SearchInput.module.css';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import CartBox from './CartBox';

type SearchInputProps = {
  rootStore: IRootStore;
};

const SearchInput = injectStore((props: SearchInputProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      filters: { setNameFilter, phoneSearchQuery },
    },
  } = rootStore!;

  const searchPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setNameFilter(value);
  };

  return (
    <div className={styles.SearchBox}>
      <CartBox />
      <h3>Search Phones</h3>
      <input
        type="text"
        value={phoneSearchQuery}
        onChange={searchPhone}
        placeholder="Search..."
      />
    </div>
  );
});

export default SearchInput;
