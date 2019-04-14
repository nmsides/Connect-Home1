import React, { Component } from "react";

class BlogPost extends Component {
  render() {
    return(
      <div>
      <h1>Update Your Blog</h1>
      <div class="input-group">
        <p>Here is the prior post</p>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Update</button>
            <p>No Tools</p>
            <p>No QI Tools</p>
            <button class="btn btn-outline-secondary" type="button">Delete</button>
            <p>No Tools</p>
            <p>No QI Tools</p>
          </div>
      </div>
      <div class="input-group">
        <p>Here is the prior post</p>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Update</button>
            <button class="btn btn-outline-secondary" type="button">Delete</button>
          </div>
      </div>

      <form action="/action_page.php">
        <div class="form-group">
            <label for="title">Post Title:</label>
            <input type="text" class="form-control" id="firstName"/>
            <textarea placeholder = "Blog Here!" id = "blogText"></textarea>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      </div>

    );
  }


}






export default BlogPost;
