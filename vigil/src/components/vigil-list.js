import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import VigilTableRow from './vigilTableRow';

//The below is to display all the entries in the Database. 
//I think the vigils: [] object is giving the issue and I am not sure how to get the correct data to show
export default class VigilList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        vigils: []
    };
  }

  componentDidMount() {
    axios.get('vigils/')
      .then(res => {
        this.setState({
            vigils: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.vigils.map((res, i) => {
      return <VigilTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vigil</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}