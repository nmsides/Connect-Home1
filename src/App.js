import React, { Component } from 'react';
import './App.css';
// import PreLogin from './PreLogin';
// import LoginBox from './LoginBox';
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

import News from './News';
import Understand from "./Understand";
import Services from "./Services";
import About from "./About";
import Files from 'react-files'

var gState = {
  u: "",
  p: "",
  all: "",
  isLoggedIn: false
}

//Login Box
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let allUsers;
let userNameInput;
let successfulLogin;

// const state = {
//     u: "",
//     p: "",
//     all: "",
//     isLoggedIn: false
// }

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

class LoginBox extends Component{

    constructor(props){
        super(props);

        this.state = {
            u: "",
            p: "",
            all: "",
            isLoggedIn: false
        }

        this.checkUserName = this.checkUserName.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        // this.successLog = this.successLog.bind(this);
      }

      forceUpdateHandler(){
        this.forceUpdate();
      };

      checkUserName(){
        let userNameInput = document.getElementById("userNameInput").value;
        this.getUserNames();
        // this.successLog();
        this.props.handler;
      }

      componentDidMount() {
        console.log(this.state.isLoggedIn)
        this.loadUsers();
        // this.successLog();
      }

      componentDidUpdate(){
          console.log('updated');
          console.log(gState)
          console.log(gState.isLoggedIn)
        //   this.successLog();
      }
      

     loadUsers() {
        return axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
            .then(response => {
              this.response = response.data;
            //   this.setState({u: this.response[0].username});
            //   this.setState({p: this.response[0].password})
              this.setState({all: this.response})
            //   this.setState({isLoggedIn: false});
              let allUsers = this.state.all;
              console.log(allUsers)
              return this.response[0].username});
        }

    getUserNames(){
            let userNameInput = document.getElementById("userNameInput").value;
            let passwordInput = document.getElementById("passwordInput").value;
            return axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
            .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++){
               if(response.data[i].username == userNameInput){
                   console.log("username in list")
                   if(response.data[i].password == passwordInput){
                       console.log("password correct");
                       let successfulLogin = true;
                       this.setState({isLoggedIn: true})
                      //  gState.isLoggedIn = this.state.isLoggedIn;
                       gState.isLoggedIn = true;
                       console.log(gState.isLoggedIn)
                       this.forceUpdateHandler();
                       break;
                   }else{
                       console.log("password incorrect");
                       break;
                   }
               }else{
                   console.log("username not found");
                //    break;
               }
            }
           
            
            return this.response.data});
        }

        // su

        // onClick(){
        //     {this.checkUserName()};
        //     this.successLog()
        //     this.handleLogin();
        //     console.log(this.state.isLoggedIn)
        // }

    render(){
        return (
            <div id="loginBox">
                 <div className="input-group" id = "logInput">
                     {/* <img src="stock-profile.jpg"/> */}
                     
                     <div><input type="text"  id='userNameInput' placeholder="Email" /></div>
                     <div><input type="text"  placeholder="Password" id='passwordInput'/></div>
                     <button type="button" className="btn" id="loginBtn" onClick={this.checkUserName}>Login</button>
 
                     </div>
                    {/* <this.successLog/> */}
                 </div>
         );
    }
    }


    //start PreLogin
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
          handler(){
            this.setState({
              someVar: someValue
            })
          }
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
                          <Route path="/LoginBox" component={<LoginBox {...this.handler} />}/>
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
    //End PreLogin

    //End Login Box
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
     a: ""
  }

  this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  componentDidUpdate(){
    console.log('updated');
    console.log(gState);
    console.log(gState.isLoggedIn);
    
  //   this.successLog();
}
handler(){
  this.setState({
    a: "a"
  })
}
  render() {
    console.log(gState.isLoggedIn);
    if(gState.isLoggedIn){
      return(<PostLogin/>);
    }else{
      return(
      <div>
        <PreLogin handler={this.handler}/>
        <button onClick= {this.forceUpdateHandler} >Proceed to Portal</button>
      </div>
      )
    }
  }
}

export default App;
