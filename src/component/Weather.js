import React, { Component } from "react";
// import axios from "axios";
import {InputGroup,Button,FormControl} from "react-bootstrap"
class Weather extends Component {
 constructor(props){
     super(props);
     this.state={
         name:""
     }

 }
    handlerCity = (e) => {
        this.setState({
          name: e.target.value,
          showData: false,
        });
      };
        
      
  submitHandler = async (e) => {
    e.preventDefault();
    // try {
    //      await axios.get(
    //       `localhost:8000/weather?lat=48.86&lon=2.35&searchQuery=${this.state.name}`
    //     ).then(response=>{

    //     }); 
        
    //   } catch (err) {
    //     this.setState({
    //       error: "Error : you use some thing not valid",
    //     });
    //   }
    
      this.setState({
        name:this.state.name,
        showData:true,
    })

     
  
  }

  render() {
    return (
      <div style={{ marginRight: "20%",marginTop:"20px" }}>
        <InputGroup className="mb-3" >
          <FormControl
            onChange={(e) => this.handlerCity(e)}
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={(e)=>this.submitHandler(e)} >
            Button
          </Button>
        </InputGroup>

        {this.state.showData && (<h1>{this.state.name}</h1>)}
      </div>
    );
  }
}

export default Weather;
