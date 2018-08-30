import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number Text</h2>
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
      return ( 
      <div style ={{...defaultStyle, display: 'inline-block', width: '25%' }}>
        <img src="" alt=""/>
        <h3>Playlist Name</h3>
       
        <ul> <li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
        

      </div>

      );
  }
}

class App extends Component {
  render() {
  let name = 'David'
  let green = '#FF1212'
  let headerStyle = {color: green, 'font-size':'50px'}

    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <PlayList />
      <PlayList />
      <PlayList />
       
       
      </div>
    );
  }
}

export default App;
