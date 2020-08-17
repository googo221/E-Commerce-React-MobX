import React from 'react';
import styles from '../styles/Backdrop.module.css';
import injectStore from '../utils/mobx-react';
import { IRootStore } from '../stores/root-store';

type BackdropProps = {
  rootStore: IRootStore;
};

const Backdrop = injectStore((props: BackdropProps) => {
  const { rootStore } = props;
  const {
    uiStore: { show, closeModal },
  } = rootStore!;

  return show ? (
    <div className={styles.Backdrop} onClick={closeModal}></div>
  ) : null;
});

export default Backdrop;
