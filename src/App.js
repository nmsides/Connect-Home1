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
import Stuff from "./Stuff";
import Contact from "./Contact";
import LoginButton from './LoginButton';

class App extends Component {


  render() {
    return (
      <PreLogin/>
    );
  }
}

export default App;
