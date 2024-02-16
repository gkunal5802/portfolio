import styled, { useTheme } from "styled-components";

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

function TechTags({ tags }) {
  const theme = useTheme();

  return (
    <Tags>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  );
}

export default TechTags;
