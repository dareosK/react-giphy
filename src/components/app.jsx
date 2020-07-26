import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif'
import GifList from './gif_list'

// const giphy = require('giphy-api')('LXDTRWUITSEkVccvdmwScrwjmjxUXiZY');
// let giflist = []

class App extends Component { // creates the view for the app
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render () {
    const gifs = [
    { id: "buz1nMlNHqIdG" },
    { id: "hpN4l9ygZHVUk" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="buz1nMlNHqIdG"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
