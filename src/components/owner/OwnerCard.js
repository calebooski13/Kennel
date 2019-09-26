import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Name: <b>{this.props.owner.name}</b></h3>
          <p>Phone number: {this.props.owner.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;