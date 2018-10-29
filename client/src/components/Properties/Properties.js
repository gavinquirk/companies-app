import React, { Component } from 'react';

class Properties extends Component {

  state = {
    properties: []
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties = () => {
    fetch('http://localhost:4000/properties')
    .then(response => response.json())
    .then(response => this.setState({ properties: response.data }))
    .catch(err => console.error(err))
  }

  renderProperty = ({ id, company_id, property_name, contact_first_name, street_address, city, state, zip, phone}) => {
    return (
    <tr key={id}>
        <td>{company_id}</td>
        <td>{property_name}</td>
        <td>{contact_first_name}</td>
        <td>{street_address}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{zip}</td>
        <td>{phone}</td>
    </tr>
    )
  }

  render() {

    const { properties } = this.state;

    return (
        <table>
          <thead>
            <tr>
                <th>Company ID</th>
                <th>Property Name</th>
                <th>Contact First Name</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(this.renderProperty)}
          </tbody>
        </table>
    );
  }
}

export default Properties;
