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
      <div id="bod" >
        <div className = "row">
          <div className = "col-sm-12">
            
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
                </div>
                <div className = 'row'>
                  <div className = 'col-sm-5 preLinks'>
                    <ul className="verticalNav nav flex-column">
                      <li><NavLink className="nav-item preNavItem preLink" exact to="/">Home</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/LoginBox">Login</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/stuff">Understanding Connect Home</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/contact">Services and Supports</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/contact">News</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/contact">About Us</NavLink></li>
                      <li><NavLink className="nav-item preNavItem preLink" to="/contact">Contact</NavLink></li>
                    </ul>
                  </div>
                
                  <div className = 'col-sm-7'>
                    <Route exact path="/" component={HomeCarousel}/>
                    <Route path="/LoginBox" component={LoginBox}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={LoginBox}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/contact" component={Contact}/>
                  </div>
                </div>
              </div>
          </HashRouter>
          {/* <PreLogin /> */}
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
