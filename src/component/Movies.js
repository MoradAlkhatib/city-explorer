
import React, { Component } from "react";

export class Movies extends Component {
  render() {
    return (
      <div>
         {this.props.movieData.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
              <p>{item.overview}</p>
              <img src={item.imgUrl} alt=''/>
            </div>

          );
        })}

      </div>
    );
  }
}

export default Movies;
