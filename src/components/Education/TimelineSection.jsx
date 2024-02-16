import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "styled-components";
import { education, experiences } from "../../data/constants";
import EducationCard from "./EducationCard";

const StyledTimeline = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: end;
  }
`;

function TimelineSection() {
  return (
    <StyledTimeline>
      <Timeline>
        {education.map((education, index) => (
          <TimelineItem key={index}>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <EducationCard education={education} />
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== experiences.length && (
                <TimelineConnector style={{ background: "#854CE6" }} />
              )}
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>
    </StyledTimeline>
  );
}

export default TimelineSection;
