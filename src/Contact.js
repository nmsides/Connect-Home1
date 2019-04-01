import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
 
class Contact extends Component {

  
                
          
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p>Dr. Mark Toles
        </p>
        <a href={"mailto:" + "mtoles@email.unc.edu"}>mtoles@email.unc.edu</a>
        <br></br>
        <Form>
        <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group >
            <Form.Label>Organizational Name</Form.Label>
            <Form.Control/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Phone</Form.Label>
            <Form.Control/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>We're Interested In...</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments and Questions</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>


      </div>
    );
  }
}
 
export default Contact;