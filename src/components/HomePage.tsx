import React from 'react';
import Phones from './Phones';
import SearchInput from './SearchInput';
import AddPhoneBtn from './AddPhoneBtn';
import styles from '../styles/HomePage.module.css';
import BrandFilterBox from './BrandFilterBox';
import PriceFilterInput from './PriceFilterInput';

const HomePage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.FiltersContainer}>
        <SearchInput />
        <PriceFilterInput />
        <BrandFilterBox />
        <AddPhoneBtn />
      </div>
      <Phones />
    </div>
  );
};

export default HomePage;
