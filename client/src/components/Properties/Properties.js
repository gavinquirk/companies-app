import React, { Component } from 'react';

class Properties extends Component {

  state = {
    properties: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch('http://localhost:4000/properties')
    .then(response => response.json())
    .then(response => this.setState({ properties: response.data }))
    .catch(err => console.error(err))
  }

  renderProperty = ({ id, company_id, property_name }) => <div key={id}>{property_name}</div>

  render() {
    const { properties } = this.state;
    return (
      <div className="Properties">
        {properties.map(this.renderCompany)}
      </div>
    );
  }
}

export default Properties;
