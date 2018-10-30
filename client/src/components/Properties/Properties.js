import React, { Component } from 'react';

// Material UI Imports
// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Properties extends Component {

  state = {
    property: []
  }

  componentDidMount() {
    this.getProperties();
  }

  // Fetch property data
  getProperties = () => {
    fetch('http://localhost:4000/api/properties/' + this.props.match.params.company_id)
    .then(response => response.json())
    .then(response => this.setState({ property: response.data }))
    .catch(err => console.error(err))
  }

  renderProperty = ({ id, company_id, property_name, contact_first_name, street_address, city, state, zip, phone}) => {
    return (
      <TableRow key={id}>
      <TableCell component="th" scope="row">{company_id}</TableCell>
      <TableCell numeric>{property_name}</TableCell>
      <TableCell numeric>{contact_first_name}</TableCell>
      <TableCell numeric>{street_address}</TableCell>
      <TableCell numeric>{city}</TableCell>
      <TableCell numeric>{state}</TableCell>
      <TableCell numeric>{zip}</TableCell>
      <TableCell numeric>{phone}</TableCell>
    </TableRow>
    )
  }

  render() {

    const { property } = this.state;

    return (
      <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Company ID</TableCell>
            <TableCell numeric>Company Name</TableCell>
            <TableCell numeric>Created Date</TableCell>
            <TableCell numeric>Street Address</TableCell>
            <TableCell numeric>City</TableCell>
            <TableCell numeric>State</TableCell>
            <TableCell numeric>Zip</TableCell>
            <TableCell numeric>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {property.map(this.renderProperty)}
        </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default Properties;
