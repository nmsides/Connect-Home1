import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      formName: '',
      formOrgoName: '',
      formAddress: '',
      formPhone: '',
      formEmail: '',
      formInterest: '',
      formCQ: ''
    }

    this.updateformName = this.updateformName.bind(this)
    this.updateformOrgoName = this.updateformOrgoName.bind(this)
    this.updateformAddress = this.updateformAddress.bind(this)
    this.updateformPhone = this.updateformPhone.bind(this)
    this.updateformEmail = this.updateformEmail.bind(this)
    this.updateformInterest = this.updateformInterest.bind(this)
    this.updateformCQ = this.updateformCQ.bind(this)
  }

  updateformName(e){
    this.setState({formName: e.target.value})
  }
  updateformOrgoName(e){
    this.setState({formOrgoName: e.target.value})
  }
  updateformAddress(e){
    this.setState({formAddress: e.target.value})
  }
  updateformPhone(e){
    this.setState({formPhone: e.target.value})
  }
  updateformEmail(e){
    this.setState({formEmail: e.target.value})
  }
  updateformInterest(e){
    this.setState({formInterest: e.target.value})
  }
  updateformCQ(e){
    this.setState({formCQ: e.target.value})
  }

  render() {

    var formattedBody =   "Person Contacting You: " + "\n" +  "\n" + this.state.formName + "\n" 
                        + "Organization: " + "\n" +  "\n" + this.state.formOrgoName +  "\n" +  "\n"
                        + "Address: " + "\n" +  "\n" + this.state.formAddress + "\n" +  "\n"
                        + "Phone Number: " + "\n" +  "\n" + this.state.formPhone + "\n"+  "\n"
                        + "Email: " + "\n" +  "\n" + this.state.formEmail + "\n"+  "\n"
                        + "What they are interested in: " + "\n" +  "\n" + this.state.formInterest + "\n"+  "\n"
                        + "Comments and Questions: " + "\n" +  "\n" + this.state.formCQ;

    var mailToLink = "mailto:mtoles@email.unc.edu?Subject=Connect-Home Inquiry&body=" + encodeURIComponent(formattedBody);

    return (
      <div>
        <h2>Contact Us</h2>
        <p>Dr. Mark Toles
        </p>
        
        <br></br>
        <Form>
        <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control id='formName' value={this.state.formName} onChange={this.updateformName}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Organizational Name</Form.Label>
            <Form.Control id='formOrgoName' value={this.state.formOrgoName} onChange={this.updateformOrgoName}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control id='formOrgoName' value={this.state.formAddress} onChange={this.updateformAddress}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Phone</Form.Label>
            <Form.Control id='formOrgoName' value={this.state.formPhone} onChange={this.updateformPhone}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" id='formOrgoName' value={this.state.formEmail} onChange={this.updateformEmail}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>We're Interested In...</Form.Label>
            <Form.Control as="textarea" rows="3" id='formOrgoName' value={this.state.formInterest} onChange={this.updateformInterest}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments and Questions</Form.Label>
            <Form.Control as="textarea" rows="3" id='formOrgoName' value={this.state.formCQ} onChange={this.updateformCQ}/>
        </Form.Group>
        <Button variant="primary" href={mailToLink}>
        Submit
      </Button>
      </Form>


      </div>
    );
  }
}

export default Contact;
