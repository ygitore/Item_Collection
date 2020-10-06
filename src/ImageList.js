import React from 'react'
import IndividualCard from './ImageCard'

const ImageList = (props) => {
    return <div className="ui centered grid container">
                <div className="four column row">
                    {props.images.map(image => <IndividualCard key={image.id} image = {image} />) }
                </div>
            </div>
}

export default ImageList
