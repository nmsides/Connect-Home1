import React, { Component } from "react";
import axios from 'axios';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AddUser from "./AddUser";
import BlogPost from "./BlogPost";
import HomeCarousel from "./HomeCarousel";
import ConfigureUsers from "./ConfigureUsers";
import OldPosts from "./OldPosts";
import Newqi from "./Newqi";
import Newcal from "./Newcal";
import Newtools from "./Newtools"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

let proxyurl;

class Admin extends Component{

    constructor(props){
        super(props);

    if (process.env.REACT_APP_BACKEND_HOST) { proxyurl = process.env.REACT_APP_BACKEND_HOST; }
    else { proxyurl = "http://localhost:5000"; }
        
        //this.updateUserConfig = this.updateUserConfig.bind(this);

    this.logout = this.logout.bind(this);

      }
    
//    componentWillMount(){
//        //this.updateUserConfig(my_id, "madisontest", "madisonpw");
//      }

    createNews(news_title, news_body, news_date) {
        return axios.post(proxyurl + "/api/admin/news", {
            date: news_date,
            title: news_title,
            body: news_body
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    createuser(name, user, pass, tools, qi, goal, participants) {
         return axios.post(proxyurl + "/api/admin/newuser", {
            name: name,
            username: user,
            password: pass,
            tools_auth: tools,
            qi_auth: qi, 
            goal: goal, 
            participants: participants
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }

    getTools() { //This returns ALL tools name + keys
        return axios.get(proxyurl + '/api/admin/tools')
            .then(function(response) {
                for(let i = 0; i < response.data.length; i++){
                console.log(response.data[i].name + ' ' + response.data[i].key)
            }

        })
    }

    logout() {
        this.props.onAdminLogout();
    }

    getQiTools() { //This returns ALL qi tools name + keys
        return axios.get(proxyurl + '/api/admin/qi')
            .then(function(response) {
                for(let i = 0; i < response.data.length; i++){
                console.log(response.data[i].name + ' ' + response.data[i].key)
            }
        })
    }


    updateArrays(id, tools, qis) {
        return axios.put(proxyurl + '/api/admin/user', {
            _id: id,
            tools_auth: tools,
            qi_auth: qis
        })
        .then(function(response) {
            console.log(response);
        })
    }
    
    updateUserConfig(id, user, pass) {
        return axios.put(proxyurl + '/api/admin/userLog', {
            _id: id,
            username: user,
            password: pass
        })
        .then(function(response) {
            console.log(response);
        })
    }

    updateNewsPost(id, body) {
        return axios.put(proxyurl + '/api/admin/updateNews', {
            _id: id,
            body: body
        })
        .then(function(response) {
            console.log(response);
        })
    }

    deleteNewsPost(thisid) {
        return axios.post(proxyurl + '/api/admin/deleteNews', {
            _id: thisid
        })
        .then(function(response) {
            console.log(response);
        })
    }


    render() {
        return (
            <div>
                <div className= "row">
                        <div className = "col-sm-6">
                            <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                        </div>
                        {/* <div className = "col-sm-6" id="adminCalLog">
                            <button className="btn" id="calBtn">Calendar</button>
                      </div> */}
                      <div className = "col-sm-3" id="adminHelp"><ButtonToolbar>
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
                                   <p>- Add User page: input desired user credentials to create that user. </p> 
                                   <p>- Update News page: provide title, date, and text to be displayed in the News tab.  Delete previous posts if desired.</p>
                                    <p>- Configure Users page: select a user and choose which documents you would like that user to be able to view. View current users by username and password.</p>
                                    <p>- QI Tools page: upload a document from your computer to be displayed in the QI Tools page. Click upload to update the site. (Go to the Configure Users page to allow access to this document.)</p>
                                    <p>- Tools/Resources page:upload a document from your computer to be displayed in the QI Tools page. Click upload to update the site. (Go to the Configure Users page to allow access to this document.)</p>
                                    <p>- Calendar page: upload a document from your computer to replace the current calendar on the Calendar page.</p>

                                    </Popover>
                                    }
                                >
                                    <Button variant="secondary" id = 'popButtonPost'>Need Help?</Button>
                                </OverlayTrigger>
                                  ))}
                        </ButtonToolbar></div>
                    <div className = "col-sm-3"><button type="button" className="btn" id="logOut" onClick={this.logout}>Logout</button></div>
                    
                </div>
                <div className="spacingDiv"></div>

                <h1>Admin Page</h1>
                <div>
                  <HashRouter>
                    <div>
                      <div className = 'row'>
                        <div className = 'col-sm-5 preLinks'>
                          <ul className="verticalNav nav flex-column">
                           
                            <li><NavLink className="nav-item preNavItem preLink" to="/AddUser">Add User</NavLink></li>
                            <li><NavLink className="nav-item preNavItem preLink" to="/BlogPost">Update News Page</NavLink></li>

                            <li><NavLink className="nav-item preNavItem preLink" to="/ConfigureUsers">Configure Users</NavLink></li>
                            <li><NavLink className="nav-item preNavItem preLink" to="/NewQi">QI Tools</NavLink></li>
                            <li><NavLink className="nav-item preNavItem preLink" to="/Newcal">Calendar</NavLink></li>
                            <li><NavLink className="nav-item preNavItem preLink" to="/Newtools">Connect-Home Tools</NavLink></li>
                          </ul>
                        </div>

                        <div className = 'col-sm-7'>
                         
                          <Route path="/AddUser" component={AddUser}/>
                          <Route path="/BlogPost" component={BlogPost}/>
                          <Route path="/ConfigureUsers" component={ConfigureUsers}/>
                          <Route path="/NewQi" component={Newqi}/>
                          <Route path="/Newcal" component={Newcal}/>
                          <Route path="/Newtools" component={Newtools}/>
                        
                        </div>

                      </div>
                    </div>
                </HashRouter>
            </div>

            {/* <div id="logoutButton"> */}
                      
                      
                        {/* </div> */}

            </div>
        );
    }
}

export default Admin;
