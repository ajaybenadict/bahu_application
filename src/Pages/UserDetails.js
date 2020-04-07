import React, { Component } from "react";
import "./PersonalDetails.css";

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { handleChange, values } = this.props;

    return (
      <div className="imgdetails">
        <div className="register-suggestion">
          <h1>Enter your suggestions</h1>

          <div className="forms">
            <input
              type="text"
              name="lunch"
              autocomplete="off"
              required
              onChange={handleChange("lunch")}
              defaultValue={values.lunch}
            />
            <label for="lunch" className="label-name">
              <span className="content-name">Lunch</span>
            </label>
          </div>
          <br />
          <div className="forms">
            <input
              type="text"
              name="breakfast"
              autocomplete="off"
              required
              onChange={handleChange("breakfast")}
              defaultValue={values.breakfast}
            />
            <label for="breakfast" className="label-name">
              <span className="content-name">Breakfast</span>
            </label>
          </div>
          <br />
          <div className="forms">
            <input
              type="text"
              name="dinner"
              autocomplete="off"
              required
              onChange={handleChange("dinner")}
              defaultValue={values.dinner}
            />
            <label for="dinner" className="label-name">
              <span className="content-name">Dinner</span>
            </label>
          </div>
          <br />

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
export default UserDetails;
