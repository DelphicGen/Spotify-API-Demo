import styles from './Album.module.css'
import BaseButton from '../BaseButton'
import AlbumArtists from './AlbumArtists'
import AlbumImage from './AlbumImage'

const Album = (props) => {
    return (
        <div className={styles.album}>
            <AlbumImage images={props.album.album.images} />
            <h2 className="app__song-title">Title: {props.album.album.name}</h2>
            <AlbumArtists artists={props.album.album.artists} />
            <BaseButton text={props.isSelected ? 'DeSelect' : 'Select'} handleButtonClick={props.toggleSelected} />
        </div>
    )
}

export default Album
