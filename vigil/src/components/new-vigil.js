import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//This component creates a car document which then gets added to the Car collection

export default class CreateVigil extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeToDoItem = this.onChangeToDoItem.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          question1: '',
          question2: '',
          question3: '',
          user: ''
        }
      }
    
      onChangeToDoItem(e) {
        this.setState({question1: e.target.value}),
        this.setState({question2: e.target.value}),
        this.setState({question3: e.target.value})
      }
    
      onChangeUser(e) {
        this.setState({user: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`To Do Item successfully created!`);
        console.log(`Item: ${this.state.question1}`);
        console.log(`User: ${this.state.user}`);

        const vigilObject = {
            question1: this.state.question1,
            question2: this.state.question2,
            question3: this.state.question3,
            user: this.state.user
        };
        axios.post('vigil/new', vigilObject)
            .then(res => console.log(res.data));
    
        this.setState({question1: '', question2: '', question3: '', user: ''})

        
      // Redirect to Car List 
    this.props.history.push('/vigil')
  }

    render() {
      console.log(this.state)
        return (<div class="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="_id">
              <Form.Label>Question 1</Form.Label>
              <Form.Control type="text" value={this.state.question1} onChange={this.onChangeToDoItem} />
            </Form.Group>
            <Form.Group controlId="_id">
              <Form.Label>Question 2</Form.Label>
              <Form.Control type="text" value={this.state.question2} onChange={this.onChangeToDoItem} />
            </Form.Group>
            <Form.Group controlId="_id">
              <Form.Label>Question 3</Form.Label>
              <Form.Control type="text" value={this.state.question3} onChange={this.onChangeToDoItem} />
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