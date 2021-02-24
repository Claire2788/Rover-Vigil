import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// This component assists in constructing the table to list the cars in the 5 Year List and as well as the Standard List

export default class VigilTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteVigil = this.deleteVigil.bind(this);
    }

    /*deleteVigil(e) {
        e.preventDefault()

        axios.delete('vigil/delete-car/' + this.props.obj._id)
            .then((res) => {
                console.log('Car successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

            // Redirect to Car List 
            window.location.reload(true);
            
    }*/


    render() {
        return (
            <tr>
                <td>{this.props.obj.vigil}</td>
                <td>
                </td>
            </tr>
        );
    }
}