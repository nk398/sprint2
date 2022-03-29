// API KEY = 231a0cfa993848cf8f35356ff6cb0d8a

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter as Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {
  apiKey = "231a0cfa993848cf8f35356ff6cb0d8a";
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
      
          
        <Route exact path="/" element={ <News setProgress={this.setProgress} key={1} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
          
      </div>
      
    )
  }
}

