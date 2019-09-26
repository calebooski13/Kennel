import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        phoneNumber: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        OwnerManager.delete(this.props.ownerId)
        .then(() => this.props.history.push("/owners"))
    }

    componentDidMount(){
        console.log("OwnerDetail: ComponentDidMount");
        OwnerManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                phoneNumber: owner.phoneNumber,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone number: {this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default OwnerDetail;