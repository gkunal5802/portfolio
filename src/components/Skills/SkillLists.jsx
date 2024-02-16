import styled from "styled-components";
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

/*eslint-disable react/prop-types */
function SkillLists({ category }) {
  return (
    <SkillList>
      {category.skills.map((item, i) => (
        <SkillItem key={i}>
          <SkillImage src={item.image} />
          {item.name}
        </SkillItem>
      ))}
    </SkillList>
  );
}

export default SkillLists;
