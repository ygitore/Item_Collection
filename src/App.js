import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Unsplash from './api/Unsplash';
import ImageList from './ImageList';

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
    return (
      <div className="App">
        <SearchBar onSubmit = {this.onFormSubmit} />
        <ImageList images = {this.state.images} />
      </div>
    );
  }
}

export default App;
