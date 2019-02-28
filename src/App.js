import React, { Component } from 'react';
import './App.css';
import PreLogin from './PreLogin';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';

class App extends Component {
  render() {
    return (
      <div id="bod" >
        <div class = "row">
          <div class = "col-sm-12">
            {/* <PreLogin /> */}
           {/* <LoginBox /> */}
            <PostLogin />
           {/* <Admin/> */}
          </div>
        </div>
        
    </div>
    );
  }
}

export default App;
