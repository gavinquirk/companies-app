import React, { Component } from 'react';
import './App.css';
import Companies from './components/Companies'
import Properties from './components/Properties'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Layouts'

class App extends Component {

  render() {
    return (
      <div>
      <Header />
      <BrowserRouter>
      <div>
        <Route path='/' component={Companies} exact/>
        <Route path='/properties/:company_id' component={Properties}/>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
