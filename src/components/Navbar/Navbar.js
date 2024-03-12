import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex flex-between p-y-30">
        <div className="logo">
          <img src="NewYorkTimes.png" alt="Logo" />
        </div>
        <ul className="navbar flex gap-20">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
