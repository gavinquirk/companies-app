import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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
        <tr key={id}>
            <td>{company_id}</td>
            <td>{company_name}</td>
            <td>{created_date}</td>
            <td>{street_address}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{zip}</td>
            <td>{phone}</td>
            <td><Link to={'/properties/'+company_id}>Properties</Link></td>
        </tr>
        )
  }

  render() {
    const { companies } = this.state;
    return (
      <div className="Companies">
        <table>
          <thead>
            <tr>
                <th>Company ID</th>
                <th>Company Name</th>
                <th>Created Date</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(this.renderCompany)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Companies;
