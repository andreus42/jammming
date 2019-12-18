import React from 'react';
import './App.css';
import _ from 'lodash'

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [{
          name: 'Thriller',
          artist: 'Michael Jackson',
          album: 'Bad',
          id: 1 
      },
      {
          name: 'Girls Just Want to Have Fun',
          artist: 'Cindy Lauper',
          album: 'Top 80s hits',
          id: 2
      },
      {
          name: 'For the Longest Time',
          artist: 'Billy Joel',
          album: 'Billy\'s top hits',
          id: 3
      }],
          playlist: 'Wicked top 20',
          playlistTracks: [{
            name: 'Thriller',
            artist: 'Michael Jackson',
            album: 'Bad',
            id: 1 
        }],
      };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
      let tracks = this.state.playlistTracks;
      if (tracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      }
      tracks.push(track);
      this.setState ({playlistTracks: tracks});
    }

    removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({playlistTracks: tracks});
    }

    updatePlaylistName(name) {
      this.setState({playlist: name})
    }

  render () {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} 
                       onAdd={this.addTrack}
                       isRemoval={false}
                        />
        <Playlist playlist={this.state.playlist}
                  playlistTracks={this.state.playlistTracks}
                  isRemoval={true}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
