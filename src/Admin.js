import React, { Component } from "react";


class Admin extends Component{
    constructor(props){
        super(props);
        
        this.newblog = this.newblog.bind(this);
      }
    
    newblog() {
        
    }
    
    render() {
        return (
            <div>
                <div class = "row">
                        <div class = "col-sm-6">
                            <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                        </div>
                        <div class = "col-sm-6" id="adminCalLog">
                            <button class="btn" id="calBtn">Calendar</button>
                            <button class="btn" id="logoutBtn">Logout</button>
                        </div>
                </div>
                <div class="spacingDiv"></div>

                <h1>Admin Page</h1>
                <div class = "row">
                    <div class = "col-sm-5">
                        <ul class="list-group" id = "AdminToolList">
                            <li class="list-group-item"><button class = "btn">Edit Contact Info</button></li>
                            <li class="list-group-item"><button class = "btn">Edit Research Publications</button></li>
                            <li class="list-group-item"><button class = "btn">Post Videos</button></li>
                            <li class="list-group-item"><button class = "btn">Edit Tools</button></li>
                            <li class="list-group-item"><button class = "btn">View QI Meetings</button></li>
                            <li class="list-group-item"><button class = "btn">Edit Sponsors</button></li>
                        </ul>
                    </div>
                    <div class = "col-sm-7">
                        <textarea placeholder = "Blog Here!" id = "blogText"></textarea>
                        <h4 id="blogHeader"><button class="btn" id="blogBtn">Post Blog</button></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
