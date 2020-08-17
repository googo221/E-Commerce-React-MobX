import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import image from './img/product1.png';
import styles from '../styles/PhoneItemList.module.css';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import CartBox from './CartBox';

type PhoneItemListProps = {
  rootStore: IRootStore;
};

const PhoneItemList = injectStore((props: PhoneItemListProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      addToCart,
      phones: { phones, getPhones },
    },
  } = rootStore!;

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  const { phoneId } = useParams();

  const phone = phones.get(phoneId);

  return (
    <div className={styles.PhoneItemList}>
      <div className={styles.PhoneItemListGrid}>
        <div className={styles.PhoneContainer}>
          <div className={styles.ImgContainer}>
            <img src={image} alt="phone" />
          </div>
          <div className={styles.PhoneTitleContainer}>
            <p>{phone?.name}</p>
            <p>{`$${phone?.price}`}</p>
            <p>{phone?.desc}</p>
          </div>
        </div>

        <div className={styles.PhoneStats}>
          <h2>Phone Details</h2>
          <div className={styles.PhoneStat}>
            <h3>CPU</h3>
            <p>{`${phone?.cpu.name} ${phone?.cpu.speed} GHz`}</p>
          </div>
          <div className={styles.PhoneStat}>
            <h3>GPU</h3>
            <p>{phone?.gpu.name}</p>
          </div>
        </div>
        <div className={styles.SearchBox}>
          <CartBox />
          <div>
            <h3>{phone?.name}</h3>
          </div>
          <button
            className={styles.Button}
            onClick={() => addToCart(phone!.id)}
          >
            Add to cart
          </button>
          <Link to="/" className={styles.BackToStore}>
            Back to store
          </Link>
        </div>
      </div>
    </div>
  );
});

export default PhoneItemList;
