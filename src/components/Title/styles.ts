import styled from "styled-components";

interface TitleProps {
  font: string;
  Color: string;
  Weight: string;
}

export const ContainerTitle = styled.div<TitleProps>`
  margin: 0 auto;
  font-size: ${(props) => props.font};
  color: ${(props) => props.Color};
  font-weight: ${(props) => props.Weight};
  cursor: pointer;
`;
