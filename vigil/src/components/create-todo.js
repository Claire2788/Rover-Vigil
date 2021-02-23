import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//This component creates a car document which then gets added to the Car collection

export default class CreateToDo extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeToDoItem = this.onChangeToDoItem.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          todoitem: '',
          user: ''
        }
      }
    
      onChangeToDoItem(e) {
        this.setState({todoitem: e.target.value})
      }
    
      onChangeUser(e) {
        this.setState({user: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`To Do Item successfully created!`);
        console.log(`Item: ${this.state.todoitem}`);
        console.log(`User: ${this.state.user}`);

        const todoObject = {
            todoitem: this.state.todoitem,
            user: this.state.user
        };
        axios.post('todos/new', todoObject)
            .then(res => console.log(res.data));
    
        this.setState({todoitem: '', user: ''})

        
      // Redirect to Car List 
    this.props.history.push('/todos')
  }

    render() {
      console.log(this.state)
        return (<div class="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="_id">
              <Form.Label>Item</Form.Label>
              <Form.Control type="text" value={this.state.todoitem} onChange={this.onChangeToDoItem} />
            </Form.Group>
    
            <Form.Group controlId="_id">
              <Form.Label>User</Form.Label>
              <Form.Control type="text" value={this.state.user} onChange={this.onChangeUser} />
            </Form.Group>
    
            
    
            <Button variant="danger" size="lg" block="block" type="submit">
              Add To Do Item
            </Button>
          </Form>
        </div>);
      }
    }