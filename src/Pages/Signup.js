import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import UserDetails from "./UserDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class SignUp extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    dinner: "",
    breakfast: "",
    lunch: ""
  };

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstname, lastname, email, breakfast, dinner, lunch } = this.state;
    const values = { firstname, lastname, email, breakfast, dinner, lunch };

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;

      default:
        return <p>welcome </p>;
    }
  }
}

export default SignUp;
