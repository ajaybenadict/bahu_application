import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export class RegisterSuccess extends Component {
  render() {
    return (
      <div className="back">
        <div className="loginimg1">
          <div className="successsuggesstion">
            <h1>Thanks for Registering in BAHU !! </h1>
            <br />
            <Link className="successsuggesstionlink" to="/home">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSuccess;
