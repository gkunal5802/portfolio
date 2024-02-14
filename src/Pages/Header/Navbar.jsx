import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  font-size: 20px;
  background-color: aliceblue;
  border-radius: 15px;
  height: 50px;
  margin: 10px;
  width: 50%;
`;

const List = styled.ul`
  display: flex;
  background-color: #222a35;
  list-style: none;
  justify-content: space-around;
  align-items: center;
`;

const ListItem = styled.li`
  /* margin: 10px; */
  color: grey;
  padding: 4px 6px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <List>
        <ListItem>
          <Link to="education">Education</Link>
        </ListItem>
        <ListItem>
          <Link to="skills">Skills</Link>
        </ListItem>
        <ListItem>
          <Link to="projects">Projects</Link>
        </ListItem>
        <ListItem>
          <Link to="">About</Link>
        </ListItem>
      </List>
    </StyledNavbar>
  );
}

export default Navbar;
