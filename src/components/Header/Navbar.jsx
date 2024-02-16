import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 32px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
function Navbar() {
  return (
    <NavItems>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#education">Education</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavItems>
  );
}

export default Navbar;
