import './App.css';
import React, { Component } from 'react';
import City from './component/City';
import Header from './component/Header'
import Footer from './component/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {

  
  render() {
    return (
      <>
      <Header />
      <div style={{display:"flex" ,justifyContent:"10% 1fr"}}>
        <City />
      </div>
      <Footer />
      </>
    )
  }
}
//style={{display:"flex"}}
export default App
