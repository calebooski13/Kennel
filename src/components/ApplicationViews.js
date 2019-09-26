import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalForm from "./animal/AnimalForm";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerDetail from "./owner/OwnerDetail";
import LocationDetail from "./location/LocationDetail";
import LocationList from "./location/LocationList";
import LocationForm from "./location/LocationForm";
import Login from "./auth/Login";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;



  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* _______________________ ANIMAL _______________________ */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return  this.isAuthenticated() ? <AnimalForm {...props} /> :<Redirect to="/login" />
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            return (  this.isAuthenticated() ?
              <AnimalDetail
                {...props}
                animalId={parseInt(props.match.params.animalId)}
              /> : <Redirect to="/login"/>
            );
          }}
        />
        {/* _______________________LOCATION_______________________ */}
        <Route
          exact
          path="/locations"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/locations/new"
          render={props => {
            return  this.isAuthenticated() ? <LocationForm {...props} /> :<Redirect to="/login" />
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            return (  this.isAuthenticated() ?
              <LocationDetail
                {...props}
                locationId={parseInt(props.match.params.locationId)}
              /> : <Redirect to="/login"/>
            );
          }}
        />
        {/* _______________________EMPLOYEE_____________________ */}
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/employees/new"
          render={props => {
            return  this.isAuthenticated() ? <EmployeeForm {...props} /> :<Redirect to="/login" />
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            return (  this.isAuthenticated() ?
              <EmployeeDetail
                {...props}
                employeeId={parseInt(props.match.params.employeeId)}
              /> : <Redirect to="/login"/>
            );
          }}
        />
        {/* __________________OWNER_______________________ */}
        <Route
          exact
          path="/owners"
          render={props => {
            if (this.isAuthenticated()) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/owners/new"
          render={props => {
            return  this.isAuthenticated() ? <OwnerForm {...props} /> :<Redirect to="/login" />
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)"
          render={props => {
            return (  this.isAuthenticated() ?
              <OwnerDetail
                {...props}
                ownerId={parseInt(props.match.params.ownerId)}
              /> : <Redirect to="/login"/>
            );
          }}
        />
        {/* ________________________LOGIN________________________ */}

        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}


export default ApplicationViews;
