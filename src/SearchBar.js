import React, { Component } from 'react'

class SearchBar extends Component {
    state = {term:''}
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render()
    {
        return (
            <form className="ui form" style={{margin:'20px'}} onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Search</label>
                    <input type="text" onChange={(e)=>this.setState({term:e.target.value})}/>
                </div>
            </form>
        )
    }
}

export default SearchBar
