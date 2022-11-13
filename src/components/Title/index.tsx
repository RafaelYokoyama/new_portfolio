import React from "react";
import { ContainerTitle } from "./styles";

interface TitleProps {
  font: string;
  text: string;
  Color: string;
}

const Title = (props: TitleProps) => {
  return (
    <ContainerTitle Color={props.Color} font={props.font} Weight={"700"}>
      {props.text}
    </ContainerTitle>
  );
};

export default Title;
