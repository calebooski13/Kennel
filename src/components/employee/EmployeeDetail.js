import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        EmployeeManager.delete(this.props.employeeId)
        .then(() => this.props.history.push("/employees"))
    }

    componentDidMount(){
        console.log("EmployeeDetail: ComponentDidMount");
        EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default EmployeeDetail;