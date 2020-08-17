import React from 'react';
import styles from '../styles/Modal.module.css';
import Backdrop from './Backdrop';
import injectStore from '../utils/mobx-react';

type ModalProps = {
  show: boolean;
  children: any;
};

const Modal = injectStore((props: ModalProps) => {
  const { show, children } = props;

  return (
    <>
      <Backdrop />
      <div
        className={styles.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
});

export default Modal;
