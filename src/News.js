import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './news.css';
import axios from 'axios';


let titles = [];
let bodies = [];
let ids = [];
let dates = [];

class News extends Component {
  constructor(props){
    super(props);

    this.state = {
      news: [{title: "",
              body: "",
              id: "",
              date: "",
    }]
      // value: "",
      // newsItems: [],
      // newsBodies: [],
      // newsTitles: [],
      // newsIDs: [],
      // newsDates: []
    }

    this.getNews = this.getNews.bind(this);
  }

  
 //my news function
 getNews() {
  return axios.get("http://localhost:5000/api/news")
  .then(response => {
      this.response = response.data;
      for(let i = response.data.length - 1; i > -1; i--) {
           //Getting news in order by most current
           this.state.news[i] = {title: response.data[i].title, body: response.data[i].body, id: response.data[i]._id, date: response.data[i].date};
      
      }
  });
}



componentDidMount(){
  this.getNews();
}
componentDidUpdate(){
  this.getNews();
}

  render() {

    return (
      <div id="newsContainer">
        <h2>News</h2>

        <ul>
         
          {this.state.news.map(item => (
            <li id={item}>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
            <p>{item.date}</p>
            <hr></hr>
            </li> 
          ))}
        </ul>

          
          {/* <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li> */}
        



      </div>
    );
  }
}

export default News;
