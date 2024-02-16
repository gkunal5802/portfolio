import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled, { useTheme } from "styled-components";
import Github from "../components/Header/Github";
import Logo from "../components/Header/Logo";
import MobileMenuBar from "../components/Header/MobileMenu";
import Navbar from "../components/Header/Navbar";

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

function Header() {
  const [isopen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo />

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isopen);
            }}
          />
        </MobileIcon>

        <Navbar />
        <ButtonContainer>
          <Github />
        </ButtonContainer>
      </NavContainer>
      {open && <MobileMenuBar isopen={isopen} setIsOpen={setIsOpen} />}
    </Nav>
  );
}

export default Header;
