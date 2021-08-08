import './App.css';

import React, { Component } from 'react'
import City from './component/City'
import "bootstrap/dist/css/bootstrap.min.css";
import Errorx from './component/Errorx';
class App extends Component {
   cityError=(error)=>{
    
   console.log(error);
  }
  
  render() {
    return (
      <>
        <City getError={this.cityError}/>
        <Errorx />
      </>
    )
  }
}

export default App
