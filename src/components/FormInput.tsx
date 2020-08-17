import React from 'react';

import styles from '../styles/FormInput.module.css';

type FormInputProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number';
};

const FormInput = (props: FormInputProps) => {
  const { label, placeholder, name, onChange, value, type } = props;

  return (
    <div className={styles.Container}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default FormInput;
