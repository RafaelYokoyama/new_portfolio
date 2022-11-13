import React from "react";
import styled from "styled-components";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

const Header = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default Header;
