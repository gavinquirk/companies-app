import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../Layouts'

class Properties extends Component {

  state = {
    property: []
  }

  componentDidMount() {
    this.getProperties();
  }

  // Fetch Property Data
  getProperties = () => {
    fetch('http://localhost:4000/api/properties/' + this.props.match.params.company_id)
    .then(response => response.json())
    .then(response => this.setState({ property: response.data }))
    .catch(err => console.error(err))
  }

  // Return Table Row for Each Property
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
      <div>
        <Header />
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Company ID</TableCell>
                <TableCell numeric>Property Name</TableCell>
                <TableCell numeric>Contact First Name</TableCell>
                <TableCell numeric>Street Address</TableCell>
                <TableCell numeric>City</TableCell>
                <TableCell numeric>State</TableCell>
                <TableCell numeric>Zip</TableCell>
                <TableCell numeric>Mystery Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {property.map(this.renderProperty)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Properties;
