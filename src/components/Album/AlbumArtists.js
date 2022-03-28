import styles from './Album.module.css'
import { useMemo } from "react";

const AlbumArtists = (props) => {

    const getArtistsName = useMemo(() => {
        let name = '';
        props.artists?.forEach(artist => {
            name += `${artist.name}, `
        });
        return name.slice(0, -2) || 'anonymous';
    }, []);

    return (
        <p className={styles.album__artist}>Artist: {getArtistsName}</p>
    )
}

export default AlbumArtists
