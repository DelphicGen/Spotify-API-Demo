import React from 'react'

const AlbumImage = (props) => {
    return (
        <picture>
            <source className="image" srcSet={props.images[0]?.url} type="image/jpg" />
            <source className="image" srcSet={props.images[1]?.url} type="image/jpg" />
            <img className="image" src={props.images[2]?.url} alt={props.title} />
        </picture>
    )
}

export default AlbumImage
