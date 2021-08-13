import React, { Component } from "react";
import {Card} from "react-bootstrap";
import clearSky from "../image/clear-sky.png";
import fewClouds from "../image/Fewclouds.png";
export class Forcast extends Component {
  render() {
    return (
      <div className="containerWeather">
        {this.props.data.map((item) => {
          return (
            
              <Card border="info" className={item.description==="Clear Sky" ? "hoverCard1":"hoverCard2"} style={{ width: "14rem" }}>
                <Card.Header>Today's temperature</Card.Header>
                <Card.Body>
                  <Card.Title>Date: {item.date}</Card.Title>
                  <Card.Title>{item.description==="Clear Sky" ? <img alt="" src={clearSky}/> : <img alt="" src={fewClouds}/>}
                  {item.description}</Card.Title>
                </Card.Body>
              </Card>
          
          );
        })}
      </div>
    );
  }
}

export default Forcast;
