import styles from './BaseButton.module.css'

const BaseButton = (props) => {
    return (
        <button
            className={`${styles.btn} ${props.disable && styles.btnDisabled}`}
            disabled={props.disable}
            onClick={props.handleButtonClick}
        >
            {props.text}
        </button>
    )
}

export default BaseButton
