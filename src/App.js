import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
require('dotenv').config()

class App extends Component {
  state = {images:[]}
  onFormSubmit = async term => {
    const response = await Axios.get('https://api.unsplash.com/search/photos', {
      params:{query:term},
      headers:{
        Authorization: `Client-ID ${REACT_APP_UNSPLASH_kEY}`
      }
    })
    this.setState({images:response.data.results})
  }
  render()
  {   
    console.log(this.state.images) 
    const images = this.state.images.map(image=><img key={image.id} alt={image.alt_description} src={image.urls.regular} />)
    return (
      <div className="App">
        <SearchBar onSubmit = {this.onFormSubmit} />
        {images}
      </div>
    );
  }
}

export default App;
