import React, { useState } from 'react';
import FormUserData from './FormUserData';
import axios from '../apis/axios-orders';

import styles from '../styles/UserForm.module.css';
import { OrderDraft } from '../types/common';
import FormPaymentData from './FormPaymentData';
import FormReview from './FormReview';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';

type UserFormProps = {
  rootStore: IRootStore;
};

const UserForm = injectStore((props: UserFormProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      orders: { orderInfo },
    },
  } = rootStore!;

  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<OrderDraft>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    country: '',
    cardName: '',
    cardNumber: 0,
    expiryDate: '',
    cvv: 0,
  });

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   axios.post('/order.json');
  // }

  const getCurrentStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <FormUserData handleChange={handleChange} values={values} />
            <button className={styles.Button} onClick={nextStep}>
              Next
            </button>
          </>
        );
      case 1:
        return (
          <>
            <FormPaymentData handleChange={handleChange} values={values} />
            <button
              className={styles.Button}
              style={{ bottom: '22rem' }}
              onClick={nextStep}
            >
              Next
            </button>
            <button className={styles.Back} onClick={prevStep}>
              Back
            </button>
          </>
        );
      case 2:
        return <FormReview prevStep={prevStep} values={values} />;
      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit}>{getCurrentStep()}</form>;
});

export default UserForm;
