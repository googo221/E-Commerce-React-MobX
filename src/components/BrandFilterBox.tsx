import React from 'react';
import BrandFilter from './BrandFilter';
import styles from '../styles/BrandFilterBox.module.css';

const BrandFilterBox = () => {
  return (
    <div className={styles.BrandFilterBox}>
      <h3>Filter by Brand</h3>
      <BrandFilter />
    </div>
  );
};

export default BrandFilterBox;
