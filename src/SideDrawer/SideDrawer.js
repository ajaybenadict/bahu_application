import React from "react";
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/">About</a>
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
    </nav>
  );
};
export default SideDrawer;
