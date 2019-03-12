import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {

  render() {

    renderList = () => {
      this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id}/>)
    }

    return(
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
