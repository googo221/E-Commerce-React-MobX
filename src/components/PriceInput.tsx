import React, { useState, useEffect } from 'react';

type PriceInputProps = {
  placeholder: string;
  setPriceFilter: (price?: number) => void;
  minMaxPriceValue?: number;
};

const PriceInput = (props: PriceInputProps) => {
  const { placeholder, setPriceFilter, minMaxPriceValue } = props;

  const [priceValue, setPriceValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (minMaxPriceValue !== undefined) {
      setPriceValue(minMaxPriceValue);
    }
  }, [minMaxPriceValue]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value);
  };

  const setPriceFilterValues = () => {
    if (priceValue === '') {
      setPriceFilter();
    } else {
      setPriceFilter(priceValue);
    }
  };

  const setFilterOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPriceFilterValues();
    }
  };

  const setFilterOnBlur = () => {
    setPriceFilterValues();
  };

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={priceValue || ''}
      onBlur={setFilterOnBlur}
      onKeyDown={setFilterOnEnter}
      onChange={inputChangeHandler}
    />
  );
};

export default PriceInput;
