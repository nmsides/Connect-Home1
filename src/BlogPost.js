import React, { Component } from "react";
import axios from 'axios';
let proxyurl;

class BlogPost extends Component {
  constructor(props) {
    super(props);
    if (process.env.REACT_APP_BACKEND_HOST) {
      proxyurl = process.env.REACT_APP_BACKEND_HOST;
    }
    else {
      proxyurl = "http://localhost:5000";
    }

    this.handleClick = this.handleClick.bind(this);

      }

      handleClick(event) {
        var title = document.getElementById("blogTitle").value;
        var post = document.getElementById("blogText").value;

        this.createNews(title, post);
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


  render() {
    return(
      <div>
      <h1>Update Your Blog</h1>
      <div class="input-group">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Update</button>

            <button class="btn btn-outline-secondary" type="button">Delete</button>

          </div>
      </div>
      <div class="input-group">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Update</button>
            <button class="btn btn-outline-secondary" type="button">Delete</button>
          </div>
      </div>

      <form>
        <div class="form-group">
            <label for="title">Post Title:</label>
            <input type="text" class="form-control" id="blogTitle"/>
            <label for="date">Post Date:</label>
            <input type="text" class="form-control" id="blogDate"/>
            <textarea placeholder = "Blog Here!" id = "blogText"></textarea>
        </div>
        <button type="submit" onClick = {this.handleClick} class="btn btn-default">Submit</button>
      </form>
      </div>

    );
  }


}






export default BlogPost;
