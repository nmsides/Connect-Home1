import React, { Component } from 'react';
import './App.css';
import PreLogin from './PreLogin';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Contact from "./Contact";
import LoginButton from './LoginButton';
import axios from 'axios';

let thisUser;
let url;

//testing for update

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAdmin: false
    }

    if (process.env.REACT_APP_BACKEND_HOST) {
      url = process.env.REACT_APP_BACKEND_HOST;
    } else {
      url = "http://localhost:5000";
    }
  }

  render() {
    const onLogin = () => this.setState({isLoggedIn: true});
    const onAdminLogin = () => this.setState({isAdmin: true});
    console.log("isLoggedIn: " + this.state.isLoggedIn);
      if(this.state.isLoggedIn == false && this.state.isAdmin == false) {
        return (
          // <PreLogin onLogin = {onLogin} isAdmin = {onAdminLogin}/>
          <Admin />
        );
      } else if(this.state.isLogged == true && this.state.isAdmin == false) {
        return (
          <PostLogin />
        );
      }
      return (
        <Admin />
      )
  }


}

export default App;
