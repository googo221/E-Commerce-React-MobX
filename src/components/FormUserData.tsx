import React from 'react';
import FormInput from './FormInput';

import styles from '../styles/FormUserData.module.css';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import { OrderDraft } from '../types/common';

type FormUserDataProps = {
  rootStore?: IRootStore;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: OrderDraft;
};

const FormUserData = injectStore((props: FormUserDataProps) => {
  const { handleChange, values } = props;

  return (
    <div className={styles.Container}>
      <h3>Shipping address</h3>
      <form className={styles.Form}>
        <FormInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.firstName}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.lastName}
        />
        <FormInput
          label="Address Line 1"
          name="address"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.address}
        />
        <FormInput
          label="City"
          name="city"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.city}
        />
        <FormInput
          label="State/Province/Region"
          name="state"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.state}
        />
        <FormInput
          label="Zip / Postal Code"
          name="zip"
          type="number"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.zip}
        />
        <FormInput
          label="Country"
          name="country"
          type="text"
          placeholder="Type here!"
          onChange={handleChange}
          value={values.country}
        />
      </form>
    </div>
  );
});

export default FormUserData;
