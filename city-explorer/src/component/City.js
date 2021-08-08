import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Card ,ListGroup ,ListGroupItem} from "react-bootstrap";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      lat: "0.0",
      long: "0.0",
      showData: false,
      img:""
    };
  }

  handlerCity = (e) => {
    this.setState({
      cityName: e.target.value,
      showData: false,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&q=${this.state.cityName}&format=json`
      )
      .then((response) => {
        let data = response.data[0];

        this.setState({
          showData: true,
          cityName: data.display_name,
          lat: data.lat,
          long: data.lon,
          img:data.icon
        });
        console.log(data)
      });
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => this.submitHandler(e)} style={{display:"flex"}}>
          <Form.Control style={{width:"30%"}}
            type="text"
            placeholder="City"
            onChange={(e) => this.handlerCity(e)}
          />

          <Button variant="primary" type="submit" size="sm" style={{marginLeft:"10px"}}>
            explore
          </Button>
        </Form>
        {this.state.showData && (
           <Card style={{ width: '18rem' ,marginTop:"20px"}}>
           <Card.Img variant="top" src={this.state.img} />
           <Card.Body>
             <Card.Title>{this.state.cityName}</Card.Title>
            
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem>lat: {this.state.lat}</ListGroupItem>
             <ListGroupItem>lon: {this.state.long}</ListGroupItem>
          
           </ListGroup>
           {/* <Card.Body>
             
           </Card.Body> */}
         </Card>

        
        )}
      </div>
    );
  }
}

export default City;
