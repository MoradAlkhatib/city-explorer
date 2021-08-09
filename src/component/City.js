import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import PrintError from "./PrintError";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      lat: "0.0",
      long: "0.0",
      showData: false,
      img: "",
      error: "",
    };
  }

  handlerCity = (e) => {
    this.setState({
      cityName: e.target.value,
      showData: false,
    });
  };
  submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios
        .get(
          `https://eu1.locationiq.com/v1/search.php?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&q=${this.state.cityName}&format=json`
        )
        .then((response) => {
          let data = response.data[0];
          axios
            .get(
              `https://maps.locationiq.com/v3/staticmap?key=pk.f7162d9d9da6a0d03a35e52f15d974c8&center=${this.state.lat},${this.state.long}&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue|enc:}woiBkrk}Mb@iKtC\`CEhBsD|C`
            )
            .then((resp) => {
              this.setState({
                showData: true,
                cityName: data.display_name,
                lat: data.lat,
                long: data.lon,
                img: resp.data,
              });
            });
        });
    } catch (error) {
      console.error(error);
      this.setState({
        error: e,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Form
          onSubmit={(e) => this.submitHandler(e)}
          style={{ display: "flex" }}
        >
          <Form.Control
            style={{ width: "30%" }}
            type="text"
            placeholder="City"
            onChange={(e) => this.handlerCity(e)}
          />

          <Button
            variant="primary"
            type="submit"
            size="sm"
            style={{ marginLeft: "10px" }}
          >
            explore
          </Button>
        </Form>
        {this.state.showData && (
          <Card style={{ width: "18rem", marginTop: "20px" }}>
            <Card.Img variant="top" src={this.state.img} />
             {console.log(this.state.img)}
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
        <h1>{this.setState.error}</h1>
        <PrintError />
      </div>
    );
  }
}

export default City;
