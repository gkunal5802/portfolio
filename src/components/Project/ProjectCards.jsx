import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "./ProjectCard";
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

function ProjectCards({ openModal, setOpenModal }) {
  return (
    <CardContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ))}
    </CardContainer>
  );
}

export default ProjectCards;
