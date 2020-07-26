import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';

// const giphy = require('giphy-api')('LXDTRWUITSEkVccvdmwScrwjmjxUXiZY');

class App extends Component { // creates the view for the app
  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
