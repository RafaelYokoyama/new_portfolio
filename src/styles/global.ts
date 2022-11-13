import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { devices } from "./devices";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
${normalize}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition:background ease 0.2s; 
}




h1{
  margin: 0;
}

textarea,button,input{
  background-color: transparent;
  border:none;
}

a {
      font-weight: ${theme.fonts.weight.medium};
      text-decoration: none;
    }

button {
   box-shadow: none;
     cursor: pointer;
     outline: none;
     padding: 0;
     -webkit-box-shadow: none;
   }
 

 button , a {
   transition: all ease 0.4s;
   &:hover{
     ${theme.configs.hover}
   }
 }

ul {
  list-style: none;
}

::-webkit-scrollbar{
  width: 0rem;
  height: 0rem;
}
*::-webkit-scrollbar {
      width: 0.0rem;
      @media ${devices.tablet}{
        width: 0.2rem;
      }
    }
`;
export default GlobalStyle;
