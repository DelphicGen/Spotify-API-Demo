import { useState } from 'react';
import styles from './BaseInput.module.css'

const BaseInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <input
        className={styles.input}
        val={props.val}
        name={props.name}
        onChange={props.handleValChange}
        placeholder={props.placeholder || ''}
        onBlur={() => setIsFocused(true)}
      />
      {
        props.showErrorMessage && isFocused && <p className={styles.errorMessage}>{props.errorMessage}</p>
      }
    </>
  );
  };
export default BaseInput;
  