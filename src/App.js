import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignUp from "./Pages/Signup";
import Content from "./Home/Content";
import ArulBahu from "./Pages/ArulBahu";
import Members from "./Pages/Members";
import Contact from "./Pages/Contact";
import Renderer from "./login/Renderer";
import Register from "./login/Register";
import RegisterSuccess from "./login/RegisterSuccess";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />

          <Route path="/home" component={Home} />
          <Route path="/about" component={Content} />
          <Route path="/signup" component={SignUp} />
          <Route path="/arulbahu" component={ArulBahu} />
          <Route path="/members" component={Members} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Renderer} />
          <Route path="/register" component={Register} />
          <Route path="/registerSuccess" component={RegisterSuccess} />
        </div>
      </Router>
    );
  }
}

export default App;
