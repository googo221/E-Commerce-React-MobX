import React from 'react';
import styles from '../styles/AddPhoneBtn.module.css';

const AddPhoneBtn = () => {
  return (
    <div className={styles.AddPhoneButton}>
      <a className={styles.Button} href="/">
        ADD A NEW PHONE
      </a>
    </div>
  );
};

export default AddPhoneBtn;
