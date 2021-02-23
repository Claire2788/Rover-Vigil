import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//This component works with the Car List and 5 Year List components. Once the car collection is listed using teh Table Componet, each document will then contain an edit or delete button. 
// Once the edit button is selected this component will open as a form with teh fields pre populated. The user can edit the fields and then update the document. 

export default class EditToDo extends Component {

  constructor(props) {
    super(props)

    this.onChangeToDoItem = this.onChangeToDoItem.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      todoitem: '',
      user: ''
     }

    }

  componentDidMount() {
    axios.get('http://localhost:3000/todo/edit-todo/' + this.props.match.params.id)
      .then(res => {
        this.setState({
            todoitem: res.data.todoitem,
            user: res.data.user
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeToDoItem(e) {
    this.setState({todoitem: e.target.value})
  }

  onChangeUser(e) {
    this.setState({user: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const todoObject = {
        todoitem: this.state.todoitem,
        user: this.state.user
    };

    axios.put('todo/update-todo/' + this.props.match.params.id, todoObject)
      .then((res) => {
        console.log(res.data)
        console.log('Car successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Car List 
    this.props.history.push('/todo-list')
  }


  render() {
    return (<div className="form-wrapper">
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
             Update To Do Item
            </Button>
          </Form>
    </div>);
  }
}