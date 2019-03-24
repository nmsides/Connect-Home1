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
        <div className = "row">
          <div className = "col-sm-12">
            {/* <PreLogin /> */}
           {/* <PostLogin /> */}
            {/* <Admin/> */}
            <LoginBox/>
          </div>
        </div>

    </div>
    );
  }
}

export default App;
