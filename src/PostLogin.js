import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Overview from "./Overview";
import ContactInformation from "./ContactInformation";
import ToolsAndResources from "./ToolsAndResources"
import QITools from "./QITools"
import Calendar from "./Calendar"
import HomeCarousel from "./HomeCarousel"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

class PostLogin extends Component{
    constructor(props){
        super(props);
      }

      componentWillMount(){
        console.log("loaded post login");
        console.log(this.props.user);
      }
      render() {
          return (
              <div>
                  <div class = "row" id="preLogLogoDiv">
                      <div class = "col-sm-5">
                          <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                      </div>
                      
                      <div className = "col-sm-5">
                          <h1>Welcome, {this.props.name} !</h1>
                      </div>
                      <div class = "col-sm-2">
                          <div >
                            <ButtonToolbar>
                                {['bottom'].map(placement => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                    <Popover
                                        id={`popover-positioned-${placement}`}
                                        title={`Help`}
                                    >
                                    <p>If additional help is needed to navigate the site, contact Mark Toles at #. </p>
                                    <p> - Select the Overview, Calendar, and Contact menu links to view more information 
                                        about the Connect-Home experience. </p>
                                    <p> - The <strong>Connect-Home Transitional Care Tools</strong> page and the 
                                        <strong>Quality Improvement 
                                        Tools</strong> page display documents and tools specific to your portal account. 
                                        Select ___ to display each document, and ___ to download. </p>
                                    </Popover>
                                    }
                                >
                                    <Button variant="secondary" id = 'popButtonPost'>Need Help?</Button>
                                </OverlayTrigger>
                                  ))}
                        </ButtonToolbar>
                          </div>
                      </div>
                  </div>
                  <HashRouter>
                     <div className = 'row'>
                         <div className = 'col-sm-12 preLinks'>
                           {/* <ul className="verticalNav nav flex-column"> */}
                           <Nav justify variant="tabs" defaultActiveKey="/Overview">
                               
                                <Nav.Item>
                                    <NavLink exact to="/Overview">Overview</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/Calendar">Calendar</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/ToolsAndResources">
                                    Tools and Resources
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/QITools">QI Tools </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/ContactInformation">Contact Information</NavLink>
                               </Nav.Item>
                            </Nav>
                             
                         </div>

                         <div className = 'col-sm-12'>
                            <Route exact path="/" component={Overview}/>
                            <Route path="/Calendar" component={Calendar}/>
                            <Route path="/ToolsAndResources" component={ToolsAndResources}/>
                            <Route path="/QITools" component={QITools}/>
                            <Route path="/ContactInformation" component={ContactInformation}/>

                          </div>
                     </div>

                     </HashRouter>

                  <div class = "row" id="provDiv">

                      <div class = "col-sm-12">

                          <h5>Accredited Providers</h5>
                          <div>
                              <ul class="nav nav-pills nav-justified">
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>


              </div>
          );
      }
}

export default PostLogin;
