import React, { Component } from "react";
import "./PersonalDetails.css";

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="imgdetails">
        <div className="register-suggestion">
          <h1>Enter your Personal Details</h1>
          <div className="forms">
            <input
              type="text"
              name="firstname"
              autocomplete="off"
              required
              onChange={handleChange("firstname")}
              defaultValue={values.firstname}
            />
            <label for="firstname" className="label-name">
              <span className="content-name">FirstName</span>
            </label>
          </div>
          <br />
          <div className="forms">
            <input
              type="text"
              name="lastname"
              autocomplete="off"
              required
              onChange={handleChange("lastname")}
              defaultValue={values.lastname}
            />
            <label for="lastname" className="label-name">
              <span className="content-name">Last Name</span>
            </label>
          </div>
          <br />
          <div className="forms">
            <input
              type="text"
              name="email"
              autocomplete="off"
              required
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <label for="email" className="label-name">
              <span className="content-name">e-Mail ID</span>
            </label>
          </div>
          <br />
          <div className="form button">
            <button className="register" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
