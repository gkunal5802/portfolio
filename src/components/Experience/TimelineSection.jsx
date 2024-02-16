import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";

const StyledTimeline = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
function TimelineSection() {
  return (
    <StyledTimeline>
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== experiences.length - 1 && (
                <TimelineConnector style={{ background: "#854CE6" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ExperienceCard experience={experience} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </StyledTimeline>
  );
}

export default TimelineSection;
