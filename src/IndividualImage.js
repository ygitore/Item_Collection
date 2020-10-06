import React from 'react'

const IndividualImage = (props) => {
    return (
        <div key={props.image.id} className="four wide column">
            <img alt={props.image.alt_description} src={props.image.urls.regular} />
        </div>
    )
}

export default IndividualImage
