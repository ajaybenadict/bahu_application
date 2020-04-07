import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <div className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo">
        <a href="/arulbahu">BAHU</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/signup">Suggestion</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </div>
);
export default toolbar;
