import React, { Component } from "react";

export default  class FavouriteMovie extends Component {
  render() {
    const {item} = this.props
    return (
        <li>
  
          {item}
      </li>
    );
  }
}
