/* eslint-disable */
import styled from "styled-components";
import { Bio } from "../../data/constants";
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
function Github({ styles }) {
  return (
    <GithubButton target="_blank" href={Bio.github} style={styles}>
      Github
    </GithubButton>
  );
}

export default Github;
