import React, { Component } from "react";
import axios from 'axios';

let proxyurl;
let user_tools;

//User Test Info for PUT
const my_id= "5c801843e7179a3e36e2a7d3";
const tools_auth= ["M", "B"];
const qi_auth= ["M", "B"];

//News Test Info for PUT
const news_id= "5cb25457e7179a36ac35c113";
const news_title = "Test title 13";
const news_body= "Testing updating feature";
var today = new Date();
const date = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();

//User Test Info for POST
const my_first = "Fred";
const my_last = "Rogers";
const my_user = "mrrogers";
const my_pass = "neighbor";
const my_tools = ["MRR", "OGE"];
const my_qi = ["HEL", "LLO"];

class Admin extends Component{

    constructor(props){
        super(props);

    if (process.env.REACT_APP_BACKEND_HOST) { proxyurl = process.env.REACT_APP_BACKEND_HOST; }
    else { proxyurl = "http://localhost:5000"; }

        this.newblog = this.newblog.bind(this);

      }

    componentDidMount() {
        //console.log("hi")
        this.newblog();
      }

    newblog() {
        //this.createNews(news_title, news_body);
        //this.createuser(my_first, my_last, my_user, my_pass, my_tools, my_qi);
        //this.getTools();
        //this.getQiTools();
        //this.updateArrays(my_id, tools_auth, qi_auth);
        //this.updateNewsPost(news_id, news_body);
        //this.deleteNewsPost(news_id);
    }

    createNews(news_title, news_body) {
        //console.log(date);
        return axios.post(proxyurl + "/api/admin/news", {
            date: new Date(),
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

    createuser(first, last, user, pass, tools, qi) {
         return axios.post(proxyurl + "/api/admin/newuser", {
            name_first: first,
            name_last: last,
            username: user,
            password: pass,
            tools_auth: tools,
            qi_auth: qi
        })
        .then(function (response) {
        console.log(response);
        //console.log("user's tools!: " + response.data.tools_auth);
        //user_tools = response.data.tools_auth;

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
