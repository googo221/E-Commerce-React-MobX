import React from 'react';
import { Link } from 'react-router-dom';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import image from './img/product1.png';
import styles from '../styles/Phone.module.css';

type PhoneProps = {
  rootStore?: IRootStore;
  phoneId: number;
};

const Phone = injectStore((props: PhoneProps) => {
  const { phoneId, rootStore } = props;
  const {
    dataStore: {
      addToCart,
      phones: { phones },
    },
  } = rootStore!;

  const phone = phones.get(phoneId.toString());

  return (
    <div className={styles.Layout}>
      <div className={styles.ContainerImg}>
        <img className={styles.Img} src={image} alt="phone" />
      </div>
      <div className={styles.ContainerInfo}>
        <div className={styles.ContainerTitle}>
          <p>{phone?.name}</p>
          <p>{`Price: $${phone?.price}`}</p>
        </div>
        <p className={styles.Description}>{phone?.desc}</p>
      </div>
      <div className={styles.Buttons}>
        <button onClick={() => addToCart(phone!.id)} className={styles.Button}>
          Add
        </button>
        <Link to={`/phones/${phone?.id}`} className={styles.Button}>
          More info
        </Link>
      </div>
    </div>
  );
});

export default Phone;
