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
import helpFooter from './helpFooter';

let thisUser;
let url;

//testing for update

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAdmin: false,
      user: null,
      username: null,
      name: null
    }

    if (process.env.REACT_APP_BACKEND_HOST) {
      url = process.env.REACT_APP_BACKEND_HOST;
    } else {
      url = "http://localhost:5000";
    }
  }

  render() {
    const onLogin = (userID, usernameInput, nameInput) => this.setState({
      isLoggedIn: true, 
      user:userID,
      username: usernameInput,
      name: nameInput
    });

    const onAdminLogin = () => this.setState({isAdmin: true});
    const onLogout = () => this.setState({isLoggedIn: false});
    const onAdminLogout = () => this.setState({
      isLoggedIn: false,
      isAdmin: false
    });


      if(this.state.isLoggedIn == false && this.state.isAdmin == false) {
        return (
          // <PreLogin onLogin = {onLogin} isAdmin = {onAdminLogin}/>
          <div><PreLogin onLogin = {onLogin} onAdminLogin = {onAdminLogin}/>
          </div>
          
        );
      } else if(this.state.isLoggedIn == true && this.state.isAdmin == false) {
        return (
          
          <PostLogin onLogout = {onLogout} user = {this.state.user} username = {this.state.username} name = {this.state.name}/>
        );
      }
      return (
        <Admin onAdminLogout = {onAdminLogout} />
      )
  }


}

export default App;