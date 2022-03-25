import BaseButton from '../BaseButton'
import AlbumArtists from './AlbumArtists'
import AlbumImage from './AlbumImage'

const Album = (props) => {
    return (
        <div className="app__album">
            <AlbumImage images={props.album.album.images} />
            <h2 className="app__song-title">Title: {props.album.album.name}</h2>
            <AlbumArtists artists={props.album.album.artists} />
            <BaseButton text="Select" />
        </div>
    )
}

export default Album
