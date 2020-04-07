import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export class Renderer extends Component {
  state = {
    loginid: "",
    password: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState("");
  };
  onChange = e => {
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
        </div>
        <div className="mainforms">
          <div className="register-box">
            <h1>Login </h1>
            <br />

            <div className="forms">
              <input type="text" name="loginid" autocomplete="off" required />
              <label for="loginid" className="label-name">
                <span className="content-name">Login ID</span>
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
            <button className="register">
              <Link className="link" to="/home">
                Log In
              </Link>
            </button>
            <Link className="small" to="/register">
              create an account !
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Renderer;
