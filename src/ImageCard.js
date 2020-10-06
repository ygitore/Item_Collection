import React, { Component } from 'react'

class IndividualCard extends Component {
    render(){
        const {id,alt_description,urls:{regular}} = this.props.image
        return (
            <div key={id} className="four wide column">
                <img alt={alt_description} src={regular} />
            </div>
        )
    }
}

export default IndividualCard
