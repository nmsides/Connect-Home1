import React, { Component } from "react";
import ReactDOM from "react";
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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import axios from 'axios'

let url;
let varAuthArray = [];
let toolsArray = [];
let QICount = -1;
let toolsCount = -1;

class PostLogin extends Component{
    constructor(props){
        super(props);

        this.state={
            username: this.props.username,
            userAuth: [],
            QItem: 0,
            toolsAuth: [],
            toolsItem: 0,
        }

        if (process.env.REACT_APP_BACKEND_HOST) {
            url = process.env.REACT_APP_BACKEND_HOST;
          } else {
            url = "http://localhost:5000";
          }

        this.loadUsers = this.loadUsers.bind(this);
        this.renderQIList = this.renderQIList.bind(this)
          this.newQICount = this.newQICount.bind(this)
          this.renderToolsList = this.renderToolsList.bind(this)
          this.newToolsCount = this.newToolsCount.bind(this);
          this.logout = this.logout.bind(this);
      }

      loadUsers() {
        return axios.get(url + "/api/users")
            .then(response => {
              this.response = response.data;
              for(let i = 0; i < response.data.length; i++){
                  if(this.state.username === response.data[i].username){
                      varAuthArray = response.data[i].qi_auth
                      toolsArray = response.data[i].tools_auth
                  }
                  
              }
              QICount = -1;
              toolsCount = -1;
              this.setState({userAuth: varAuthArray, toolsAuth: toolsArray})
              return null});
        }

        

      componentWillMount(){
        console.log("loaded post login");
        console.log(this.props.user);
      }
      componentDidMount(){
          this.loadUsers();
      }

      handleQIClick(r, e){
           QICount = -1;
          this.setState({QItem: r});
          toolsCount = -1;
          return r;
      }
      handleToolClick(r, e){
         toolsCount = -1;
        this.setState({toolsItem: r});
        QICount = -1;
        return r;
    }
      newQICount(){
          QICount++
          return QICount;
      }
      newToolsCount(){
          toolsCount++
          return toolsCount;
      }
      renderQIList(){ 
       let val = varAuthArray.map(item => (
            <Dropdown.Item><NavLink to="/QITools" id={this.newQICount()} onClick={this.handleQIClick.bind(this, QICount)}>{item}</NavLink></Dropdown.Item>
         ))
        return <li><DropdownButton className="nav-item " id="dropdown-basic-button" title="QI Tools">{val}</DropdownButton ></li>
      }
      renderToolsList(){
        let val = toolsArray.map(item => (
            <Dropdown.Item><NavLink to="/ToolsAndResources" id={this.newToolsCount()} onClick={this.handleToolClick.bind(this, toolsCount)}>{item}</NavLink></Dropdown.Item>
         ))
        return <li><DropdownButton className="nav-item " id="dropdown-basic-button" title="Tools/Resources">{val}</DropdownButton ></li>
      }

      logout() {
        //   toolsCount = -1;
        //   QICount = -1;
        //   console.log(toolsCount, QICount)
          this.props.onLogout();
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
                     <div className = 'col-sm-4 preLinks'>
                      <ul className="verticalNav nav flex-column">
                        <li><NavLink className="nav-item preNavItem preLink" exact to="/">Overview</NavLink></li>
                        <li><NavLink className="nav-item preNavItem preLink" to="/Calendar">Calendar</NavLink></li>
                        {this.renderToolsList()}
                        {/* <li><NavLink className="nav-item preNavItem preLink" to="/ToolsAndResources">ToolsAndResources</NavLink></li> */}
                        {this.renderQIList()}
                        <li><NavLink className="nav-item preNavItem preLink" to="/ContactInformation">ContactInformation</NavLink></li>
                        
                      </ul>
                     
                    </div>
                         <div className = 'col-sm-8'>
                            <Route exact path="/" component={Overview}/>
                            <Route path="/Calendar" component={Calendar}/>
                            <Route path="/ToolsAndResources" render={(props) => <ToolsAndResources {...this.state} item = {document.getElementById(this.state.toolsItem).id}/>}/>
                            <Route path="/QITools" render={(props) => <QITools {...this.state} item = {document.getElementById(this.state.QItem).id}/>}/>
                            <Route path="/ContactInformation" component={ContactInformation}/>

                          </div>
                          <button type="button" className="btn" id="logOut" onClick={this.logout}>Logout</button>
                     </div>

                     </HashRouter>


                                     {/* <div id="logoutButton"> */}
                         
                      
                      {/* </div> */}
              </div>
          );
      }
}

export default PostLogin;
