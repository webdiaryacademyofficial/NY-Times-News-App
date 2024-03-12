import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex flex-between p-y-30">
        <div className="logo">
          <img src="NewYorkTimes.png" alt="Logo" />
        </div>
        <ul className="navbar flex gap-30">
          <li >
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
