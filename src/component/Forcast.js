import React, { Component } from "react";

export class Forcast extends Component {
  render() {
    return (
      <div>

        {this.props.data.map((item) => {
            {console.log(item)}
          return (
            <div>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>

          );
        })}
      </div>
    );
  }
}

export default Forcast;
