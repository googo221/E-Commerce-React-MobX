import React from 'react';

import styles from '../styles/FormUserData.module.css';
import FormInput from './FormInput';
import { OrderDraft } from '../types/common';

type FormPaymentDataProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: OrderDraft;
};

const FormPaymentData = (props: FormPaymentDataProps) => {
  const { handleChange, values } = props;

  return (
    <div className={styles.Container}>
      <h3>Payment Method</h3>
      <form className={styles.Form} style={{ height: '23%' }}>
        <FormInput
          label="Name on Card"
          name="cardName"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.cardName}
        />
        <FormInput
          label="Card Number"
          name="cardNumber"
          type="number"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.cardNumber}
        />
        <FormInput
          label="Expiry Date"
          name="expiryDate"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.expiryDate}
        />
        <FormInput
          label="CVV"
          name="cvv"
          type="number"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.cvv}
        />
      </form>
    </div>
  );
};

export default FormPaymentData;
