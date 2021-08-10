import './App.css';
import React, { Component } from 'react'
import City from './component/City'
import Weather from './component/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {

  
  render() {
    return (
      <div style={{display:"flex" ,justifyContent:"10% 1fr"}}>
        <City />
        <Weather />
      </div>
    )
  }
}
//style={{display:"flex"}}
export default App
