import React, { Component } from 'react';

class Gif extends Component {
  render() {
    // id = "buz1nMlNHqIdG"
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} className="gif" />
      )
  };
}

export default Gif;
