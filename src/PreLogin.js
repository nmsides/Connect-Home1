import React, { Component } from 'react';
import './App.css';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';
import News from './News';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Understand from "./Understand";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Files from 'react-files'

class FilesDemo extends Component{
  constructor(props){
    super(props);

  }
  onFilesChange(files) {
    console.log(files)
  }
 
  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }
 
  render() {
    return (
      <div className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['image/png', '.pdf', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </div>
    )
  }
};

class PreLogin extends Component{
    constructor(props){
        super(props);

      }

    render() {
        return (
          <div id="bod" >
          <div className = "row">
            <div className = "col-sm-12">
            <FilesDemo/>
              <HashRouter>
                <div>
                <div className = "row" id="preLogLogoDiv">
                      <div className = "col-sm-5">
                          <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                      </div>
                      <div className = "col-sm-4">
                          <div id="preInfoText">
                              <p className="text-black-50">Information: "Lorem ipsum dolor sit amcitation ullamco laboris nisi uodo cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                          </div>
                      </div>
                      {/* <LoginButton/> */}
                  </div>
                  <div className = 'row'>
                    <div className = 'col-sm-5 preLinks'>
                      <ul className="verticalNav nav flex-column">
                        <li><NavLink className="nav-item preNavItem preLink" exact to="/">Home</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/LoginBox">Login</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/Understand">Understanding Connect Home</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/Services">Services and Supports</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/News">News</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/About">About Us</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/contact">Contact</NavLink></li>
                      </ul>
                    </div>
                  
                    <div className = 'col-sm-7'>
                      <Route exact path="/" component={HomeCarousel}/>
                      <Route path="/LoginBox" component={LoginBox}/>
                      <Route path="/Understand" component={Understand}/>
                      <Route path="/Services" component={Services}/>
                      <Route path="/News" component={News}/>
                      <Route path="/About" component={About}/>
                      <Route path="/contact" component={Contact}/>
                    </div>
                  </div>
                </div>
            </HashRouter>
            </div>
          </div>
  
      </div>
        );
    }
}

export default PreLogin;
