import React, { Component } from 'react';

class Gif extends Component {
  updateMainGif = (event) => {
    if (this.props.updateFunction) this.props.updateFunction(this.props.id)
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif`
    return(
      <img src={src} alt="" className="gif" onClick={this.updateMainGif}/>
    )
  }
}

export default Gif;
