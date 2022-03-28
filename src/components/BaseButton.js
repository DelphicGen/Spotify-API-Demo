import styles from './BaseButton.module.css'

const BaseButton = (props) => {
    return (
        <button className={styles.btn} onClick={props.handleButtonClick}>{props.text}</button>
    )
}

export default BaseButton
