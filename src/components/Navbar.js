import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0d47a1;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 20px;
  font-size: 1.2rem;

  &:hover {
    color: #fdd835;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/training-and-internships">Training and Internships</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/certifications">Certifications</NavLink>
      <NavLink to="/accomplishments">Accomplishments</NavLink>
      <NavLink to="/awards">Awards</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
}

export default Navbar;
