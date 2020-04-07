import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export class Home extends Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="back">
        <div className="loginimg">
          <div className="beware">
            <h1>Beware</h1>
            <p>
              This website may contain funny and comic contents. This may result
              you to laugh harder and which results you to have a stress free
              life, which is injurious to the environment. Read carefully the
              content before registering.
            </p>
          </div>
          <div className="mainforms">
            <div className="register-box1">
              <h1>Enter your Personal Details</h1>
              <div className="forms">
                <input
                  type="text"
                  name="firstname"
                  autocomplete="off"
                  required
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
                />
                <label for="laststname" className="label-name">
                  <span className="content-name">LastName</span>
                </label>
              </div>
              <br />

              <div className="forms">
                <input type="text" name="email" autocomplete="off" required />
                <label for="email" className="label-name">
                  <span className="content-name">e-mail ID</span>
                </label>
              </div>
              <br />

              <div className="forms">
                <input
                  type="password"
                  name="password"
                  autocomplete="off"
                  required
                />
                <label for="password" className="label-name">
                  <span className="content-name">Password</span>
                </label>
              </div>
              <br />
              <div className="forms">
                <input
                  type="password"
                  name="password"
                  autocomplete="off"
                  required
                />
                <label for="password" className="label-name">
                  <span className="content-name">Re-enter Password</span>
                </label>
              </div>

              <br />
              <div>
                <button className="register">
                  <Link className="link" to="/registerSuccess">
                    Register
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
