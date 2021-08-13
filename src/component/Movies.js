import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import movieImage from "../image/movie.png";
export class Movies extends Component {
  render() {
    return (
      <>
    <h1 className='headerTextH1'>Movies Of {this.props.nameA}</h1>
      <Carousel className="containerMovie">
        {this.props.movieData.map((item) => {
          console.log(typeof item.imgUrl);
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.imgUrl.includes("jpg") ? item.imgUrl : movieImage}
                alt="First slide"
              />
              <Carousel.Caption className="textCarousel">
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </>
    );
  }
}

export default Movies;
