import styled from "styled-components";
import { Link } from "react-router-dom";

/* Navbar Container */
export const Nav = styled.nav`
  background-color: #0d47a1;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

/* Navbar Links */
export const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fdd835;
  }

  @media (max-width: 768px) {
    display: none; /* Hide links in mobile view */
  }
`;

/* Mobile Menu Icon (Hamburger) */
export const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Mobile Menu */
export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #0d47a1;
  padding: 10px 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

/* Mobile Menu Links */
export const MobileNavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 15px;
  text-align: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fdd835;
  }
`;
