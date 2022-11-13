import React from "react";
import * as C from "./styles";

interface Props {
  title: string;
}

const AltTitle: React.FC<Props> = ({ title, ...props }) => {
  return (
    <C.AltTitle>
      <div></div>
      <h1>{title}</h1>
    </C.AltTitle>
  );
};

export default AltTitle;
