import React, { Fragment } from 'react';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import styles from '../styles/BrandFilter.module.css';

type BrandFilterProps = {
  rootStore: IRootStore;
};

const BrandFilter = injectStore((props: BrandFilterProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      filters: { toggleBrandFilter },
      brands: { brandsListing },
    },
  } = rootStore!;

  return (
    <Fragment>
      {brandsListing.map((brand) => (
        <div
          className={styles.BrandFilter}
          key={brand.id}
          onClick={() => toggleBrandFilter(brand)}
        >
          {brand.name}
        </div>
      ))}
    </Fragment>
  );
});

export default BrandFilter;
