import React, { useEffect } from 'react';
import { IRootStore } from '../stores/root-store';
import injectStore from '../utils/mobx-react';
import Phone from './Phone';
import styles from '../styles/Phones.module.css';

type PhonesProps = {
  rootStore?: IRootStore;
};

const Phones = injectStore((props: PhonesProps) => {
  const { rootStore } = props;
  const {
    dataStore: {
      filteredPhoneList,
      phones: { getPhones },
    },
  } = rootStore!;

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  return (
    <div className={styles.Phones}>
      {filteredPhoneList.map((phone) => (
        <Phone phoneId={phone.id} key={phone.id} />
      ))}
    </div>
  );
});

export default Phones;
