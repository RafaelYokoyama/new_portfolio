import styled from "styled-components";

interface ParagraphProps {
  font: string;
  padding: string;
  Color: string;
  textAlign: string;
}

export const ContainerParagraph = styled.div<ParagraphProps>`
  font-size: ${(props) => props.font};
  padding-top: ${(props) => props.padding};
  color: ${(props) => props.Color};
  line-height: 30px;
  text-align: ${(props) => props.textAlign};
  max-width: 90%;
  ::selection {
    background: #1a7f81;
    color: #000;
  }
  cursor: pointer;
`;
