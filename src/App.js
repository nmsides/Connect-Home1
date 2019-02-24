import React, { Component } from 'react';
import './App.css';
import PreLogin from './PreLogin';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';

class App extends Component {
  render() {
    return (
      <div id="bod" >
        <img src="./Resources/Asset1.svg" id = 'mainLogo'></img>
        {/* <PreLogin /> */}
        <PostLogin />
        {/* <LoginBox /> */}
    </div>
    );
  }
}

export default App;
