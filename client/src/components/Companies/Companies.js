import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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


class Companies extends Component {

  state = {
    companies: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch('http://localhost:4000/api/companies')
    .then(response => response.json())
    .then(response => this.setState({ companies: response.data }))
    .catch(err => console.error(err))
  }

  renderCompany = ({ id, company_id, company_name, created_date, street_address, city, state, zip, phone}) => {
    return (
          <TableRow key={id}>
            <TableCell component="th" scope="row">{company_id}</TableCell>
            <TableCell numeric>{company_name}</TableCell>
            <TableCell numeric>{created_date}</TableCell>
            <TableCell numeric>{street_address}</TableCell>
            <TableCell numeric>{city}</TableCell>
            <TableCell numeric>{state}</TableCell>
            <TableCell numeric>{zip}</TableCell>
            <TableCell numeric>{phone}</TableCell>
            <TableCell><Link to={'/properties/'+company_id}>Properties</Link></TableCell>
          </TableRow>
    )
  }

  render() {
    const { companies } = this.state;
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
            <TableCell numeric>Properties</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map(this.renderCompany)}
        </TableBody>
      </Table>
    </Paper>

    );
  }
}

export default Companies;
