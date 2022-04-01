import Album from './Album/Album';
import styles from './Albums.module.css';

const Albums = (props) => {
    console.log(props.albums[0])
    return (
        <div className={styles.albums}>
            {
                props.albums?.map(album => (
                    <Album isSelected={props.selectedAlbums.has(album.uri)} toggleSelected={() => props.toggleSelected(album.uri)} key={album.uri} album={album} />
                ))
            }
        </div>
    )
}

export default Albums
