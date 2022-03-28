// API KEY = b72c25db9b704d3a8bd6795549500944

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {
  apiKey = "b72c25db9b704d3a8bd6795549500944";
  pageSize = 20;
  country = 'us';


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

