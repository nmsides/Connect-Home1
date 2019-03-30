import React, { Component } from 'react';
import './App.css';
import PreLogin from './PreLogin';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';
import Users from './user'; 
import News from './news';


class App extends Component {


  render() {
    return (
      <div id="bod" >
        <div className = "row">
          <div className = "col-sm-12">
        {/* <LoginBox/> */}
           {/* <PostLogin /> */}
             <Admin/> 
            {/* <LoginBox/> */}
          </div>
        </div>

    </div>
    );
  }
}

export default App;
