import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    companies: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch('http://localhost:4000/companies')
    .then(response => response.json())
    .then(response => this.setState({ companies: response.data }))
    .catch(err => console.error(err))
  }

  renderCompany = ({ company_id, company_name }) => <div key={company_id}>{company_name}</div>

  render() {
    const { companies } = this.state;
    return (
      <div className="App">
        {companies.map(this.renderCompany)}
      </div>
    );
  }
}

export default App;
