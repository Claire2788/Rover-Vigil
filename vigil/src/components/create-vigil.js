import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//This component creates a car document which then gets added to the Car collection

export default class CreateVigil extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeQuestion1 = this.onChangeQuestion1.bind(this);
        this.onChangeQuestion2 = this.onChangeQuestion2.bind(this);
        this.onChangeQuestion3 = this.onChangeQuestion3.bind(this);
        this.onChangeQuestion4 = this.onChangeQuestion4.bind(this);
        this.onChangeQuestion5 = this.onChangeQuestion5.bind(this);
        this.onChangeQuestion6 = this.onChangeQuestion6.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          question1: '',
          question2: '',
          question3: '',
          question4: '',
          question5: '',
          question6: '',
          user: ''
        }
      }
      
    
      onChangeQuestion1(e) {
        this.setState({question1: e.target.value})
      }
    
      onChangeQuestion2(e) {
        this.setState({question2: e.target.value})
      }
    
      onChangeQuestion3(e) {
        this.setState({question3: e.target.value})
      }

      onChangeQuestion4(e) {
        this.setState({question4: e.target.value})
      }

      onChangeQuestion5(e) {
        this.setState({question5: e.target.value})
      }

      onChangeQuestion6(e) {
        this.setState({question6: e.target.value})
      }

      onChangeUser(e) {
        this.setState({user: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Survey`);
        console.log(`Question 1: ${this.state.question1}`);
        console.log(`Question 2: ${this.state.question2}`);
        console.log(`Question 3: ${this.state.question3}`);
        console.log(`Question 4: ${this.state.question4}`);
        console.log(`Question 5: ${this.state.question5}`);
        console.log(`Question 6: ${this.state.question6}`);
        console.log(`User: ${this.state.user}`);

        const vigilObject = {
            question1: this.state.question1,
            question2: this.state.question2,
            question3: this.state.question3,
            question4: this.state.question4,
            question5: this.state.question5,
            question6: this.state.question6,
            user: this.state.user
        };
        axios.post('vigils/create-vigil', vigilObject)
            .then(res => console.log(res.data));
    
        this.setState({question1: '', question2: '', question3: '', question4: '', question5: '', question6: '', user: ''})

        
      // Redirect to Car List 
      this.props.history.push('/vigil-list')
  }

    render() {
        return (<div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
          
            <Form.Group controlId="_id">
              <Form.Label>Question 1</Form.Label>
              <Form.Control type="text" value={this.state.question1} onChange={this.onChangeQuestion1} />
            </Form.Group>
    
            <Form.Group controlId="_id">
              <Form.Label>Question 2</Form.Label>
              <Form.Control type="text" value={this.state.question2} onChange={this.onChangeQuestion2} />
            </Form.Group>
    
            <Form.Group controlId="_id">
              <Form.Label>Question 3</Form.Label>
              <Form.Control type="text" value={this.state.question3} onChange={this.onChangeQuestion3} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>Question 4</Form.Label>
              <Form.Control type="text" value={this.state.question4} onChange={this.onChangeQuestion4} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>Question 5</Form.Label>
              <Form.Control type="text" value={this.state.question5} onChange={this.onChangeQuestion5} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>Question 6</Form.Label>
              <Form.Control type="text" value={this.state.question6} onChange={this.onChangeQuestion6} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>User</Form.Label>
              <Form.Control type="text" value={this.state.user} onChange={this.onChangeUser} />
            </Form.Group>
    
            <Button variant="danger" size="lg" block="block" type="submit">
              Submit
            </Button>
          </Form>
        </div>);
      }
    }