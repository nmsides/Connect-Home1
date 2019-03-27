import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginBox from "./LoginBox";
import LoginButton from "./LoginButton"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// clickLogin(){

// }

class PreLogin extends Component{
    constructor(props){
        super(props);
        this._handleClick = this._handleClick.bind(this);
      }

      _handleClick() {
        
      }
      componentDidMount(){
          return(
          <LoginButton onClick = {this._handleClick()}/>
          )
      }
      

    render() {
        return (
                   
            <div >
                
                <div className = "row" id="preLogLogoDiv">
                    <div className = "col-sm-5">
                        <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                    </div>
                    <div className = "col-sm-4">
                        <div id="preInfoText">
                            <p className="text-black-50">Information: "Lorem ipsum dolor sit amcitation ullamco laboris nisi uodo cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className = "col-sm-3">
                        <Router>
                            <Link to="/LoginBox"><button id="loginBtn" >Partner Login</button></Link>
                             <Route path="/LoginBox" exact component={LoginBox} />
                        </Router>
                            {/* <> */}
                    {/* <InputGroup className="mb-3">
                        <div>
                        <FormControl aria-describedby="basic-addon1" />
                        </div>
                        <Button id='loginBtn' >
                       Login
                        </Button>
                    </InputGroup>

                    <InputGroup>
                        <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />

                        <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                        >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </>; */}
                        
                        
                        

                    </div>
                </div>
                <div className = "row">
                    <div className = "mainFront" id="preLinks">
                      <div className="innerPic">
                        <img src = "./resources/stock1.jpg" className = "frontPagePic"></img>
                        <p>This is where the carousel will go</p>
                      </div>
                      <div className="verticalNav">
                        <ul className="nav flex-column">
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Understanding Connect Home</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Services and Supports</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">News</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">About Us</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>



                <div className = "row" id="provDiv">

                    <div className = "col-sm-12">

                        <h5>Accredited Providers</h5>
                        <div>
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
                                </li>
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
                                </li>
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


             {/* <div className = 'content'>
                <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><a href="/">Home</a></li>
                    <li><a href="/stuff">Stuff</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="content">
                    
                </div>
            </div>

            </div>*/}


            </div> 
        );
    }
}
    
export default PreLogin;
