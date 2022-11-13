import styled from "styled-components";
import AboutMy from "../../components/About";

const About = () => {
    return (
        <Container>
            <AboutMy />
        </Container>
    );
};

const Container = styled.div`
  height: 100vh;
  .section {
    padding-top: 5px;
  }

  p {
    line-height: 30px;
    padding-bottom: 20px;
    font-size: 22px;
    text-align: center;
    margin: 0 20px;
  }
`;

export default About;
