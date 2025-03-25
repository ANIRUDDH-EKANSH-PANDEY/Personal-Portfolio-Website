import React, { useState } from "react";
import {
  Nav,
  NavLink,
  MenuIcon,
  MobileMenu,
  MobileNavLink,
} from "../styles/NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/training-and-internships">Training & Internships</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/accomplishments">Accomplishments</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
        <NavLink to="/awards">Awards</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>&#9776;</MenuIcon>
      </Nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </MobileNavLink>
        <MobileNavLink to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </MobileNavLink>
        <MobileNavLink to="/certifications" onClick={() => setIsOpen(false)}>
          Certifications
        </MobileNavLink>
        <MobileNavLink to="/accomplishments" onClick={() => setIsOpen(false)}>
          Accomplishments
        </MobileNavLink>
        <MobileNavLink
          to="/training-and-internships"
          onClick={() => setIsOpen(false)}
        >
          Training & Internships
        </MobileNavLink>
        <MobileNavLink to="/awards" onClick={() => setIsOpen(false)}>
          Awards
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
