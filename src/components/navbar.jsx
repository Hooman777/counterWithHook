import React from "react";
import logo from "../logo.svg";

const Navbar = props => {
  const { number } = props;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="badge badge-secondary badge-xl">
        <h5>{`COUNT:  ${number}`}</h5>
      </span>
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
      <span className="badge badge-dark">
        <h1>REACT HOOK</h1>
      </span>
    </nav>
  );
};

export default Navbar;
