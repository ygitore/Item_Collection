import React from 'react'
import IndividualImage from './IndividualImage'

const ImageList = (props) => {
    return <div className="ui centered grid container">
                <div className="four column row">
                    {props.images.map(image => <IndividualImage key={image.id} image = {image} />) }
                </div>
            </div>
}

export default ImageList
