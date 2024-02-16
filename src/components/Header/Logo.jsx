import LogoImg from "../../images/LogoImg.png";
import styled from "styled-components";

const Image = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  padding: 0 6px;
  margin-top: 15px;
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

function Logo() {
  return (
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
        <Image src={LogoImg} alt="logo" />
      </a>
    </NavLogo>
  );
}

export default Logo;
