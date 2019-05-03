import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifID: 'lJ0JGfNBrRWJVCRChd'
    }

    this.search('disney')
  }

  search = (query) => {
    giphy('4XJ3VFtRErzcc1tEgbyo8598qBrzdRPV').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, res) => {
      this.setState({
        gifs: res.data
      })
    })
  }

  updateGif = (id) => {
    this.setState({
      selectedGifID: id
    })
  }

  render() {
    const gifs = [
      {id: 'mJ8XzJTfA6BmNb1ykm' },
      {id: 'lJ0JGfNBrRWJVCRChd' },
      {id: '90m8XWiWBIEWssXhJJ' }
    ]

    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFunction={this.updateGif} />
        </div>
      </div>
    )
  }
}

export default App;
