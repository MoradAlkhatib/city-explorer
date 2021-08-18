import React, { Component } from 'react'
import Movie from './Movie'
export class Movies extends Component {
  render() {
    return (
      <div>
        <Movie movieData={this.props.movieData} nameA={this.props.cityName}/>
      </div>
    )
  }

}

export default Movies


