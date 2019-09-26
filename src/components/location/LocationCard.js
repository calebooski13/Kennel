import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Name: <b>{this.props.location.name}</b></h3>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;