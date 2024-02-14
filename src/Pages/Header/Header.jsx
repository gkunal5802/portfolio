import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Github from "./Github";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  padding: 0 24px;
  width: 100%;
  max-width: 1200px;
`;

const NavLogo = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  padding: 0 6px;
  cursor: pointer;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    color: ${({ theme }) => theme.text_primary};
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

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

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isopen }) =>
    isopen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isopen }) => (isopen ? "100%" : "0")};
  z-index: ${({ isopen }) => (isopen ? "1000" : "-1000")};
`;

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;
function Header() {
  const theme = useTheme();
  const [isopen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a
            href="#about"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isopen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu isopen={isopen}>
          <MobileLink
            href="#about"
            onClick={() => {
              setIsOpen(!isopen);
            }}
          >
            About
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isopen);
            }}
          >
            Skills
          </MobileLink>
          <MobileLink
            href="#experience"
            onClick={() => {
              setIsOpen(!isopen);
            }}
          >
            Experience
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isopen);
            }}
          >
            Projects
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              setIsOpen(!isopen);
            }}
          >
            Education
          </MobileLink>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
}

export default Header;
