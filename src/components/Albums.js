import Album from './Album/Album';
import styles from './Albums.module.css';

const Albums = (props) => {
    return (
        <div className={styles.albums}>
            {
                props.albums?.map(album => (
                    <Album key={album.id} album={album} />
                ))
            }
        </div>
    )
}

export default Albums
