import styles from './BaseInput.module.css'

const BaseInput = (props) => {
    return (
      <input
        className={styles.input}
        val={props.val}
        name={props.name}
        onChange={props.handleValChange}
      />
    );
  };
export default BaseInput;
  