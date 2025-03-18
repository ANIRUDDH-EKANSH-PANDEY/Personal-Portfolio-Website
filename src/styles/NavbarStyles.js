import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0d47a1;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fdd835;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/certifications">Certifications</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
