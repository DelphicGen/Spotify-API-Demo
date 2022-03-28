import styles from './Album.module.css'

const AlbumImage = (props) => {
    return (
        <picture>
            <source className={styles.album__image} srcSet={props.images[0]?.url} type="image/jpg" />
            <source className={styles.album__image} srcSet={props.images[1]?.url} type="image/jpg" />
            <img className={styles.album__image} src={props.images[2]?.url} alt={props.title} />
        </picture>
    )
}

export default AlbumImage
