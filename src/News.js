import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './news.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 
class News extends Component {

  render() {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }
    return (
      <div>
        <h2>News</h2>
        
        <ul>
          <li className = 'newsBlurb'>
            <div>
                Connect-Home Pilot (Paper 1+2)
            </div>
            <div>
                Date
            </div>
            <button>Read More...</button>
          </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
          <li className = 'newsBlurb'>Consultation - </li>
        </ul>
        

        {/* <ListGroup variant = "flush">
            <ListGroup.Item action href="#link1">
            Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" >
            Link 2
            </ListGroup.Item>
            <ListGroup.Item action>This one is a button</ListGroup.Item>
        </ListGroup>

        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}

        
      </div>
    );
  }
}
 
export default News;