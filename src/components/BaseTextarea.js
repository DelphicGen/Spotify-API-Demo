import { useState } from 'react';
import styles from './BaseTextarea.module.css'

const BaseTextarea = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <textarea
        className={styles.textarea}
        val={props.val}
        name={props.name}
        onChange={props.handleValChange}
        placeholder={props.placeholder || ''}
        onBlur={() => setIsFocused(true)}
      ></textarea>
      {
        props.showErrorMessage && isFocused && <p className={styles.errorMessage}>{props.errorMessage}</p>
      }
    </div>
  );
  };
export default BaseTextarea;
  