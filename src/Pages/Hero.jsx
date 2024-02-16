import styled from "styled-components";
import HeroBg from "../components/HeroSection/HeroBg";
import HeroLeft from "../components/HeroSection/HeroLeft";
import HeroRight from "../components/HeroSection/HeroRight";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg />
        <HeroInnerContainer>
          <HeroLeft />
          <HeroRight />
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
