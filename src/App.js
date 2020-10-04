import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchBar';

class App extends Component {
  onFormSubmit = (term) => {
    console.log(term)
  }
  render()
  {
    return (
      <div className="App">
        <SearchBar onSubmit = {this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
  //GJmLCx7tMPxEPVrsU1W9DuFIi3p90fYRGHCLsIXbisQ
