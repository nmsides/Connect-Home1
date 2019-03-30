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
