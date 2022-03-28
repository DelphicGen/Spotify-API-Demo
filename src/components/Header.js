import styles from './Header.module.css'

const Header = (props) => {
    return (
        <h1 className={styles.heading}>
            {props.heading}    
        </h1>
    )
}

export default Header
