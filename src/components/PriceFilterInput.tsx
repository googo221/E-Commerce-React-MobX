import React from 'react';
import styles from '../styles/PriceFilterInput.module.css';
import PriceInput from './PriceInput';
import { IRootStore } from '../stores/root-store';
import injectStore from '../utils/mobx-react';

type PriceFilterInputProps = {
  rootStore?: IRootStore;
};

const PriceFilterInput = injectStore((props: PriceFilterInputProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      minPrice,
      maxPrice,
      filters: { setMinPrice, setMaxPrice },
    },
  } = rootStore!;

  return (
    <div className={styles.PriceInputBox}>
      <h3>Search by Price Range</h3>
      <div className={styles.PriceInputsBox}>
        <PriceInput
          placeholder="from"
          setPriceFilter={setMinPrice}
          minMaxPriceValue={minPrice}
        />
        <PriceInput
          placeholder="to"
          setPriceFilter={setMaxPrice}
          minMaxPriceValue={maxPrice}
        />
      </div>
    </div>
  );
});

export default PriceFilterInput;
