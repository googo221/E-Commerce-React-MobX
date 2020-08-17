import React from 'react';

import styles from '../styles/FormReview.module.css';
import injectStore from '../utils/mobx-react';
import { OrderDraft } from '../types/common';
import { IRootStore } from '../stores/root-store';

type FormReviewProps = {
  rootStore?: IRootStore;
  values: OrderDraft;
  prevStep: () => void;
};

const FormReview = injectStore((props: FormReviewProps) => {
  const { prevStep, values, rootStore } = props;
  const {
    dataStore: { cartSum, cartPhoneListing },
  } = rootStore!;

  return (
    <div className={styles.Container}>
      <h2>Order Summary</h2>
      <form>
        <ul className={styles.List}>
          {cartPhoneListing.map((product) => (
            <li>
              <div className={styles.PhoneInfoContainer}>
                <span>{product.name}</span>
                <div className={styles.FlexRow}>
                  <p>Quantity: {product.quantity}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </li>
          ))}
          <li>
            <div className={styles.FlexRow}>
              <span>Total</span>
              <p>${cartSum}</p>
            </div>
          </li>
        </ul>
        <div className={styles.FlexRow} style={{ height: '30%' }}>
          <div className={styles.FormInfo}>
            <h3>Shipping</h3>
            <p>
              {values.firstName} {values.lastName}
            </p>
            <p>{values.address}</p>
            <p>{values.city}</p>
            <p>{values.country}</p>
          </div>
          <div className={styles.FormInfo}>
            <h3>Payment Details</h3>
            <p>Card Type: Master Card</p>
            <p>{`Card Holder: ${values.firstName} ${values.lastName}`}</p>
            <p>Card Number: {values.cardNumber}</p>
            <p>Expiry Date: {values.expiryDate}</p>
          </div>
        </div>
        <div className={styles.ButtonContainer}>
          <button className={styles.Back} onClick={prevStep}>
            Back
          </button>
          <button className={styles.Button}>Place Order</button>
        </div>
      </form>
    </div>
  );
});

export default FormReview;
