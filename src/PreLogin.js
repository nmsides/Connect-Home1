import React, { Component } from 'react';
import './App.css';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';
import News from './news';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

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
import axios from 'axios';

let allUsers;
let userNameInput;
let successfulLogin;
let thisUser;
let url;



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



      if (process.env.REACT_APP_BACKEND_HOST) {
        url = process.env.REACT_APP_BACKEND_HOST;
      } else {
        url = "http://localhost:5000";
      }

      this.state = {
          u: "",
          p: "",
          all: "",
          isLoggedIn: false,
          news: [{title: "",
              body: "",
              id: "",
              date: ""}]
      }

      this.getUserNames = this.getUserNames.bind(this);
    }



    componentDidMount() {
      this.loadUsers();
    }



   loadUsers() {
      return axios.get(url + "/api/users")
          .then(response => {
            this.response = response.data;
            this.setState({all: this.response})
            let allUsers = this.state.all;
            return this.response[0].username});
      }

  getUserNames(){
          let userNameInput = document.getElementById("userNameInput").value;
          let passwordInput = document.getElementById("passwordInput").value;

          return axios.get(url + "/api/users")
          .then(response => {
            this.response = response.data;

            for(let i = 0; i < response.data.length; i++){
               if(response.data[i].username === userNameInput){
                   if(response.data[i].password === passwordInput){
                       let successfulLogin = true;

                       thisUser = response.data[i]._id; //Added to then pass to new page
                       this.props.onLogin(thisUser, userNameInput, response.data[i].name);
                       if(userNameInput === "toles" && passwordInput === "tolespw"){
                         this.props.onAdminLogin();
                       }
                       break; //listen to the state and then load new page
                   }else{
                       break;
                   }
               }else{
                   console.log("username not found");
                //    break;
               }
            }

            return this.response.data
        });
      }

     

 

  render() {

    const loginAttempt = () =>  {
        this.getUserNames();
    }
  

        return (
          <div id="bod" >

            {/* <iframe id = "testPDF" href={testFile} download="file.pdf">
              <p>Your browser does not support iframes.</p>
            </iframe>
            <a href = {testFile} download="file.pdf">asdf</a>  */}

          <div className = "row">
            <div className = "col-sm-12">
            {/* <FilesDemo/> */}
              <HashRouter>
                <div>
                <div className = "row" id="preLogLogoDiv">
                      <div className = "col-sm-5">
                          <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                      </div>
                      <div className = "col-sm-4">
                         
                      </div>
                      {/* <LoginButton/> */}
                  </div>
                  <div className = 'row'>
                    <div className = 'col-sm-5 preLinks'>
                      <ul className="verticalNav nav flex-column">
                        <li><NavLink className="nav-item preNavItem preLink" exact to="/">Home</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/LoginBox">Login</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/Understand">Understanding Connect-Home</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/Services">Services and Support</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/News">News</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/About">About Us</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/contact">Contact</NavLink></li>
                      </ul>
                      <ButtonToolbar>
                    {['top'].map(placement => (
                      <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                          <Popover
                            id={`popover-positioned-${placement}`}
                            title={`Help`}
                          >
                          <p>If additional help is needed to navigate the site, contact Mark Toles. </p>
                          <p> - Select the Understanding Connect-Home, Services and Support, News, and About Us menu links to view more information about the Connect-Home experience.</p>
                          <p> - Contact Us page: fill in the required fields and press Submit to send your information to Connect-Home. </p>
                          </Popover>
                        }
                      >
                        <Button variant="secondary" id = 'popButtonPre'>Need Help?</Button>
                      </OverlayTrigger>
                    ))}
                  </ButtonToolbar>
                    </div>

                    <div className = 'col-sm-7'>
                      {/* <button type="button" onClick={this.getUserNames}>Press Me</button> */}
                      <Route exact path="/" component={HomeCarousel}/>
                      <Route path="/LoginBox" render={(props) => <LoginBox {...props} loginAttempt={loginAttempt}/>}/>
                      <Route path="/Understand" component={Understand}/>
                      <Route path="/Services" component={Services}/>
                      <Route path="/News" component={News} />
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
