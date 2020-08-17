import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CartBox.module.css';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';

type CartBoxProps = {
  rootStore?: IRootStore;
};

const CartBox = injectStore((props: CartBoxProps) => {
  const { rootStore } = props;
  const {
    dataStore: { cartSum, cartQuantity },
  } = rootStore!;

  return (
    <Fragment>
      <Link to="/cart" className={styles.CartBox}>
        <p>{`${cartQuantity} items in cart $${cartSum}`}</p>
      </Link>
    </Fragment>
  );
});

export default CartBox;
