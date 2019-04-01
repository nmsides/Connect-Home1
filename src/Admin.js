import React, { Component } from "react";
import axios from 'axios';

const proxyurl = "http://localhost:5000";
const got = require('got');

class Admin extends Component{
    constructor(props){
        super(props);
        
        this.newblog = this.newblog.bind(this);
      }

    componentDidMount() {
        console.log("hi")
        this.newblog();
      }

    newblog() {
        this.createblog(); 
        this.createuser();
    }

    createblog() {
        return axios.post(proxyurl + "/api/admin/news", {
            date: '01-01-2020', //Must get current date when created
            title: 'testBlog',
            body: 'Hello, world!'
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
    }
    
    createuser() {
         return axios.post(proxyurl + "/api/admin/newuser", {
            name_first: 'Madison', 
            name_last: 'Nosidam',
            username: 'madison', 
            password: 'madisonpw', 
            tools_auth: ['MAD', 'ISO', 'N'],
            qi_auth: ['NOS', 'IDAM']
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        }) 
    }
    
    render() {
        return (
            <div>
                <div className= "row">
                        <div className = "col-sm-6">
                            <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                        </div>
                        <div className = "col-sm-6" id="adminCalLog">
                            <button className="btn" id="calBtn">Calendar</button>
                            <button className="btn" id="logoutBtn">Logout</button>
                        </div>
                </div>
                <div className="spacingDiv"></div>

                <h1>Admin Page</h1>
                <div className = "row">
                    <div className = "col-sm-5">
                        <ul className="list-group" id = "AdminToolList">
                            <li className="list-group-item"><button className = "btn">Edit Contact Info</button></li>
                            <li className="list-group-item"><button className = "btn">Edit Research Publications</button></li>
                            <li className="list-group-item"><button className = "btn">Post Videos</button></li>
                            <li className="list-group-item"><button className = "btn">Edit Tools</button></li>
                            <li className="list-group-item"><button className = "btn">View QI Meetings</button></li>
                            <li className="list-group-item"><button className = "btn">Edit Sponsors</button></li>
                        </ul>
                    </div>
                    <div className = "col-sm-7">
                        <textarea placeholder = "Blog Here!" id = "blogText"></textarea>
                        <h4 id="blogHeader"><button className="btn" id="blogBtn">Post Blog</button></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
