import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './news.css';
import axios from 'axios';

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
           console.log(this.state.news[i])
          //  this.state.newsItems[i] = response.data[i];
          // this.state.newsBodies[i] = response.data[i].body;
          // this.state.newsTitles[i] = response.data[i].title;
          // this.state.newsIDs[i] = response.data[i]._id;
          // this.state.newsDates[i] = response.data[i].date;
      }
  });
}

onAddItem = () => {
  this.setState(state => {
    const list = [...state.newsItems, state.value];

    return {
      list,
      value: ""
    };
  });
};


componentDidMount(){
  this.getNews();
}


  render() {

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }
    return (
      <div id="newsContainer">
        <h2>News</h2>

        <ul>
          {/* {this.state.newsIDs.map(item => (
            <li id={item}><p>{this.findBody(item)}</p></li>
          ))} */}
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
