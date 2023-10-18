import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";
import foto6 from "../../assets/foto6.jpg";

import Paragraph from "../Paragraph";
import Title from "../Title";

import { Container } from "./styles";

const AboutMim = () => {
  return (
    <Container id="about">
      <div data-title="Um Pouco" className="title">
        <Title font={"30px"} text={"Sobre Mim"} Color={"#1a7f81"} />
      </div>
      <div className="container" id="section-02">
        <div className="grid-5 pr-3">
          <div>
            <h2 className="">Rafael Gava Yokoyama</h2>
          </div>
          <div className="names">
            <Paragraph
              font={"18px"}
              text={`
              Meu nome é Rafael, 
               tenho 23 anos, moro no Brasil especificamente em Itatiba-SP. 
            `}
              Color={"#fff"}
              padding={"2px"}
              textAlign={"left"}
            />
            <br></br>
            <Paragraph
              font={"18px"}
              text={`
              
             Atualmente curso Engenharia da Computação na
               Universidade São Francisco, também tenho estudado 
               bastante sozinho para aprender novas  tecnologias.
            `}
              Color={"#fff"}
              padding={"2px"}
              textAlign={"left"}
            />
            <br></br>
            <Paragraph
              font={"18px"}
              text={`
            Sou Desenvolvedor Front-End e ando estudando mobile
             e quero me tornar especialista nessa stack.
              Vejo que estou no caminho  certo pois, 
              vejo os resultados que as horas dedicadas trazem.
            `}
              Color={"#fff"}
              padding={"2px"}
              textAlign={"left"}
            />
          </div>
          <div>
            <ul className="list mt-3 ml-5">
              <li className="item-list py-1">
                Estudante de Engenharia da Computação.
              </li>
              <li className="item-list py-1">
                {" "}
                Desenvolvedor Front-End na Smart Innovation.
              </li>
              <li className="item-list py-1"> Apenas mais um Curioso.</li>
            </ul>
          </div>
        </div>

        <div className="grid-5 ">
          <div className="row hidden relative grid-photos">
            <div className="blur1"></div>
            <div className="grid-nobreak-6 grid-photo-1">
              <img src={foto6} className="photo my-1 px-1" alt="" />
              <img src={foto1} className="photo my-1 px-1" alt="" />
              <img src={foto3} className="photo my-1 px-1" alt="" />

            </div>
            <div className="grid-nobreak-6 grid-photo-2">

              <img src={foto5} className="photo my-1 px-1" alt="" />
              <img src={foto2} className="photo my-1 px-1" alt="" />
              <img src={foto4} className="photo my-1 px-1" alt="" />

            </div>
            <div className="blur2"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMim;  
