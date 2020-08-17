import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CartPage.module.css';
import image from './img/product1.png';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';
import Modal from './Modal';
import UserForm from './UserForm';

type CartPageProps = {
  rootStore?: IRootStore;
};

const CartPage = injectStore((props: CartPageProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      cartPhoneListing,
      cartSum,
      increment,
      decrement,
      removeFromCart,
      clearCart,
    },
    uiStore: { openModal, show },
  } = rootStore!;

  return (
    <div className={styles.CartPage}>
      <div className={styles.CartPageGrid}>
        <div className={styles.CartPageItems}>
          {cartPhoneListing.length === 0 ? (
            <h1>Your cart is currently empty</h1>
          ) : null}
          <div className={styles.CartPageItemList}>
            {cartPhoneListing.length > 0
              ? cartPhoneListing.map((phone) => {
                  return (
                    <div className={styles.CartPageItem} key={phone.id}>
                      <div className={styles.CartPageItemImg}>
                        <img src={image} alt="phone" />
                      </div>

                      <div className={styles.CartPageItemDetails}>
                        <p>{phone.name}</p>
                        <div className={styles.CartPageItemBlock}>
                          <p>Price: ${phone.price}</p>
                          <div className={styles.FlexRow}>
                            <p>Quantity: {phone.quantity}</p>
                            <div
                              className={styles.Add}
                              onClick={() => increment(phone.id)}
                            >
                              +
                            </div>
                            <div
                              className={styles.Sub}
                              onClick={() => decrement(phone.id)}
                            >
                              -
                            </div>
                          </div>
                        </div>
                        <button
                          className={styles.Remove}
                          onClick={() => removeFromCart(phone.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <div className={styles.CartPageSidebar}>
        <h3 className={styles.Title}>My Cart</h3>
        <p className={styles.Total}>Total: ${cartSum}</p>
        <Link className={styles.GoBack} to="/">
          Go Back
        </Link>
        <button
          className={styles.ClearCart}
          disabled={cartPhoneListing.length === 0}
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          className={styles.BuyNow}
          disabled={cartPhoneListing.length === 0}
          onClick={openModal}
        >
          Buy Now!
        </button>
      </div>
      <Modal show={show}>
        <UserForm />
      </Modal>
    </div>
  );
});

export default CartPage;
