import styled from "styled-components";
import { skillCategories } from "../../data/constants";
import SkillLists from "./SkillLists";

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

function SkillCards() {
  return (
    <SkillsContainer>
      {skillCategories.map((category, index) => (
        <Skill key={index}>
          <SkillTitle>{category.title}</SkillTitle>
          <SkillLists category={category} />
        </Skill>
      ))}
    </SkillsContainer>
  );
}

export default SkillCards;
