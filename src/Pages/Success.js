import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Success extends Component {
  render() {
    const {
      values: { firstname }
    } = this.props;
    return (
      <div className="Homeimg">
        <div className="successsuggesstion">
          <h1>Thanks {firstname} for suggesting</h1>
          <br />
          <Link className="successsuggesstionlink" to="/home">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Success;
