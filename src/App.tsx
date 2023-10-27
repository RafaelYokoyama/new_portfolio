import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import GlobalStyle from "./styles/global";
import Loading from "./components/Loading";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <About />
        <Projects />
        <Experience />
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.div`
  background: black;
`;

export default App;
