/* eslint-disable */

import styled, { useTheme } from "styled-components";
import Github from "./Github";
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

function MobileMenuBar({ isopen, setIsOpen }) {
  const theme = useTheme();
  return (
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
      <Github
        styles={{
          padding: "10px 16px",
          background: `${theme.primary}`,
          color: "white",
          width: "max-content",
        }}
      />
    </MobileMenu>
  );
}

export default MobileMenuBar;
