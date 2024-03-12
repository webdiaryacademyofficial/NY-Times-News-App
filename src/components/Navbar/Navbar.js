import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex flex-between p-y-30">
        <div className="logo">
          <img src="NewYorkTimes.png" alt="Logo" />
        </div>
        <ul className="navbar flex gap-30">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
