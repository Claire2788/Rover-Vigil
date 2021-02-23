import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// This component assists in constructing the table to list the cars in the 5 Year List and as well as the Standard List

export default class ItemTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCar = this.deleteCar.bind(this);
    }

    deleteCar(e) {
        e.preventDefault()

        axios.delete('todos/delete-car/' + this.props.obj._id)
            .then((res) => {
                console.log('Car successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

            // Redirect to Car List 
            window.location.reload(true);
            
    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.model}</td>
                <td>{this.props.obj.make}</td>
                <td>{this.props.obj.colour}</td>
                <td>{this.props.obj.registration}</td>
                <td>{this.props.obj.owner}</td>
                <td>{this.props.obj.address}</td>
                <td>
                    <Link size="sm" className="edit-link" to={"/edit-car/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCar}  size="sm" variant="danger">Delete Car</Button>
                </td>
            </tr>
        );
    }
}