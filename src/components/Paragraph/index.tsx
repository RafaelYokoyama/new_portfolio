import React from "react";
import { ContainerParagraph } from "./styles";

interface PProps {
  font: string;
  text: string;
  padding: string;
  Color: string;
  textAlign: string;
}

const Paragraph = (props: PProps) => {
  return (
    <ContainerParagraph
      font={props.font}
      padding={props.padding}
      Color={props.Color}
      textAlign={props.textAlign}
    >
      {props.text}
    </ContainerParagraph>
  );
};

export default Paragraph;
