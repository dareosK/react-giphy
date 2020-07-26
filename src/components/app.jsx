import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif'
import GifList from './gif_list'

// const giphy = require('giphy-api')('LXDTRWUITSEkVccvdmwScrwjmjxUXiZY');

class App extends Component { // creates the view for the app
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "buz1nMlNHqIdG"
    };
    this.search('aliens');
  }

  search = (query) => {
    giphy('LXDTRWUITSEkVccvdmwScrwjmjxUXiZY').search({
      q: query,
      rating: 'g',
      limit: 30
    }, (err, result) => { // ! Doc uses function(err, result), however
    this.setState({       // 'this' would refer to the function if not turned into arrow function
      gifs: result.data   // and we need 'this' to refer to the state !
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifID: id
    });
  }
 // lines 42 and 48 -> pass functions to the respective children
  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
