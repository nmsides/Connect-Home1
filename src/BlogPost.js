import React, { Component } from "react";
import axios from 'axios';
let proxyurl;
let url;
let newsArray = [];

class BlogPost extends Component {
  constructor(props) {
    super(props);
    if (process.env.REACT_APP_BACKEND_HOST) {
      proxyurl = process.env.REACT_APP_BACKEND_HOST;
    }
    else {
      proxyurl = "http://localhost:5000";
    }

    this.state = {
      news: [{title: "",
              body: "",
              id: "",
              date: "",
    }]
    }

    

    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.getNews = this.getNews.bind(this);
    this.deleteNewsPost = this.deleteNewsPost.bind(this);

    }

    componentDidMount() {
      this.getNews();
    }

      handleClick(event) {
        var title = document.getElementById("blogTitle").value;
        var post = document.getElementById("blogText").value;
        var date = document.getElementById("blogDate").value; 

        this.createNews(title, post, date);
      }

      handleClick1(event) {
        var checkboxes = document.getElementsByName("blog");
            var checkBoxesChecked = "";
            // loop over them all
            for (var i=0; i<checkboxes.length; i++) {
              // And stick the checked ones onto an array...
              if (checkboxes[i].checked) {
                  checkBoxesChecked=(checkboxes[i].id);
              }
            }
            console.log(checkBoxesChecked);
            return axios.post(proxyurl + '/api/admin/deleteNews', {
                          _id: checkBoxesChecked
                      })
                      .then(function(response) {
                          alert("Successfully Deleted");
                      })

      }

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

      getNews() {
        return axios.get(proxyurl + "/api/news")
        .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++) {
                 //Getting news in order by most current
                 console.log(response.data[i])
                newsArray[i] = {title: response.data[i].title, body: response.data[i].body, id: response.data[i]._id, date: response.data[i].date};
                //  this.setState(news[i][{title: response.data[i].title, body: response.data[i].body, id: response.data[i]._id, date: response.data[i].date}]  )
                
            }
            console.log(newsArray)
            this.setState({news: newsArray});
        });
        
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
        return(
          <div id="oldBlogsContainer">


          <h3>Create News Post</h3>
            <form>
              <div class="form-group">
                  <label for="title">Post Title:</label>
                  <input type="text" class="form-control" id="blogTitle"/>
                  <label for="date">Post Date:</label>
                  <input type="text" class="form-control" id="blogDate"/>
                  <textarea placeholder = "Enter News text here!" id = "blogText"></textarea>
              </div>
              <button type="submit" onClick = {this.handleClick} class="btn btn-default">Upload Post</button>
            </form>
          <h3>Select Previous News Post to Remove</h3>
            <ul>
              {this.state.news.map(item=>(
                <div>
                         <input type="radio" name="blog" id={item.id}/>
                         <label>{item.title}</label>
                     </div>
              )
              )}
              </ul>
              <button id = "blogsButton" class="btn btn-default" type="button" onClick={this.handleClick1}>Delete Selected Posts</button>
          </div>
        );
      }


}






export default BlogPost;
