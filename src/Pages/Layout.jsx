import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

// const Container = styled.div`
//   width: inherit;
//   background-color: brown;
//   height: 100vh;
// `;
function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
