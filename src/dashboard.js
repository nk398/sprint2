// API KEY = 231a0cfa993848cf8f35356ff6cb0d8a

import './public/dashboard.html'
import React, { Component } from 'react'
import News from './component/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css'
import './App.js'
export default class dashboard extends Component {
  apiKey = "231a0cfa993848cf8f35356ff6cb0d8a";
  pageSize = 6;
  country = 'in';

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <div> 
        <LoadingBar
        color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        
        <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} key={1} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
         
        </Routes>
      </div>
      
    )
  }
}
