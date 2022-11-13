import React from "react";
import styled from "styled-components";
import perfil from "../../assets/perfil.svg";
import NavDrawer from "../NavDrawer";

const Sidebar = () => {
  return (
    <Container>
      <div className="aside">
        <div className="image">
          <NavDrawer />
          <img src={perfil} alt="perfil" width="400" height="400" />
        </div>

        <div className="conteudo">
          <div className="wrapper">
            <a
              href="https://www.linkedin.com/in/rafael-yokoyama/"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Rafael-Yokoyama"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/dev_yokoyama/"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <span>
            "Devíamos ser ensinados a não esperar por inspiração para começar
            algo. Ação sempre gera inspiração. Inspiração raramente gera ação"
          </span>
          <p>Frank Tibolt</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .aside {
    width: 50%;
    height: 100vh;
    display: inline-block;
    width: 400px;
    background-size: 6px 6px !important;
    background-image: linear-gradient(
      -45deg,
      #010101 46%,
      #000 49%,
      #060606 51%,
      #060606 55%
    );
  }

  .aside .image {
    width: 100%;
    //background: #1a7f81 #66dece #65dfcb;
    background-image: linear-gradient(
      to right,
      #1a7f81 0%,
      #0b3456 50%,
      #1a7f81 100%
    );
    height: 70vh;
  }
  .aside .image img {
    z-index: 2;
    position: absolute;
    margin: 0 auto;
  }
  .wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .icon {
    cursor: pointer;
    height: 32px;
    width: 32px;
    margin: 10px 3px 10px;
    box-shadow: 2px -2px 16px 0 #1a7f81;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.7 ease;
  }
  .icon i {
    cursor: pointer;

    font-size: 20px;
    color: #fff;
    transition: all 0.7 ease-in-out;
  }
  .icon i:hover {
    font-size: 20px;
  }
  .icon:hover {
    box-shadow: 5px 5px 10px 0 rgba(1, 1, 1, 1) inset,
      -5px -5px 12px 0 rgba(255, 255, 255, 0.25) inset;
  }
  .conteudo {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .conteudo span {
    color: #1a7f81;
    font-size: 14px;
  }
  .conteudo p {
    padding-top: 8px;
    color: #fff;
  }
  .conteudo button {
    width: 200px;
  }
  @media (max-width: 960px) {
    .aside {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .aside .image {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }
`;

export default Sidebar;
