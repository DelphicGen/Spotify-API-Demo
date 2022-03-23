import data from '../../data'
import BaseButton from '../BaseButton'
import AlbumArtists from './AlbumArtists'
import AlbumImage from './AlbumImage'

const Album = () => {
    return (
        <>
            <AlbumImage images={data.album.images} />
            <h2 className="app__song-title">Title: {data.album.name}</h2>
            <AlbumArtists artists={data.album.artists} />
            <BaseButton text="Select" />
        </>
    )
}

export default Album
