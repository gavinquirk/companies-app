import React, { Component } from 'react';
import './App.css';
import Companies from './components/Companies'
import Properties from './components/Properties'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  // state = {
  //   companies: []
  // }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/' component={Companies} exact/>
        <Route path='/properties/:company_id' component={Properties}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
