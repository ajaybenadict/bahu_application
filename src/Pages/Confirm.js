import React, { Component } from "react";
import "./PersonalDetails.css";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstname, lastname, email, breakfast, dinner, lunch }
    } = this.props;
    return (
      <div className="imgdetails">
        <div className="register-suggestion">
          <h1>Your Details and suggestions</h1>
          <form className="user">
            FirstName : <b>{firstname}</b>
            <br />
            LastName : <b>{lastname}</b>
            <br />
            E-Mail ID : <b>{email}</b>
            <br />
            Breakfast : <b>{breakfast}</b>
            <br />
            Lunch : <b>{lunch}</b>
            <br />
            Dinner : <b>{dinner}</b>
            <br />
          </form>

          <button className="register" onClick={this.continue}>
            Continue
          </button>
          <button className="back1" onClick={this.back}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default Confirm;
