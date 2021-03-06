import React, { Component } from 'react';
import './App.css';


let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Chris',
    playlists:[
      {
        name: 'My favorites',
        songs: [
         {name: 'Beat It', duration: 1345}, 
         {name: 'Cannelloni Makaroni', duration: 1236} ,
         {name: 'Rosa helikopter', duration: 70000}
        ]
      },

      {
        name: 'Discover Weekly',
        songs:  [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236} ,
          {name: 'Rosa helikopter', duration: 70000}
         ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Hallelujah', duration: 1236} ,
          {name: 'Rosa helikopter', duration: 70000}
         ]
      },
      {
        name: 'Playlist - yeah!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236} ,
          {name: 'Hej Hej Monika', duration: 70000}
         ]

      }
    ]
  }
};

class PlaylistCounter extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
      <h2>{this.props.playlists.length} playlists </h2>
      </div>

    );
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce( (songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)

    }, [])

    let totalDuration =  allSongs.reduce((sum, eachSong) =>  {
      return sum + eachSong.duration
    }, 0)

    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
      <h2>{Math.floor(totalDuration / 60)} hours </h2>
      </div>

    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{defaultStyle}}>
        <img src="" alt=""/>
        <input type="text"/>
       

      </div>

    );
  }
}

class PlayList extends Component{
  render(){
    let playlist = this.props.playlist
      return ( 
      <div style ={{...defaultStyle, display: 'inline-block', width: '25%' }}>
        <img src="" alt=""/>
        <h3>{playlist.name}</h3>
        <ul> 
          {this.props.playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
          
        </ul>

      </div>

      );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout( () =>  {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }
  render() {
     
    // let green = '#FF1212'
  // let headerStyle = {color: green, 'font-size':'50px'}
    return (
  <div className="App">

     {this.state.serverData.user ?
      <div>
        <h1 style = {{...defaultStyle, fontSize: '54px'}}>
          {this.state.serverData.user.name} playlists
        </h1>}
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user.playlists}/>
        <Filter />
        { this.state.serverData.user.playlists.map(playlist  => 
           <PlayList playlist={playlist}/>
     )}
         </div> : <h4 style={defaultStyle}>Loading...</h4>
      }                 
       </div>
    );
  }
}

export default App;
