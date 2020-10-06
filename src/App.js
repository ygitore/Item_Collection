import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Unsplash from './api/Unsplash';

class App extends Component {
  state = {images:[]}
  onFormSubmit = async term => {
    const response = await Unsplash.get('search/photos', {
      params:{query:term},      
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
