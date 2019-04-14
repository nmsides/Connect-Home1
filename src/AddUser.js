import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <form action="/action_page.php">
        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" class="form-control" id="firstName"/>
            <label for="lastName">Last Name:</label>
            <input type="text" class="form-control" id="lastName"/>
            <label for="userName">User Name:</label>
            <input type="email" class="form-control" id="email"/>
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd"/>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default AddUser;
