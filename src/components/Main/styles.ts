import styled from "styled-components";

export const Container = styled.div`
  font-family: "DM Serif Text", serif;
  h3 {
    color: #f2f2f2;
    font-size: 3rem;
    margin-bottom: -260px;
    margin-top: 200px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: 0.15em;
    animation: rotateText 5.5s ease alternate infinite, box 5s ease;
  }

  @keyframes rotateText {
    25% {
      transform: scale(1.1) skewY(1deg);
    }
    75% {
      transform: scale(0.8) skewY(0deg);
    }
    100% {
      transform: scale(1.1) skewY(1deg);
    }
  }
  .content h5 {
    font-size: 1.1rem;
    font-weight: 100;
  }
  .content button {
    width: 150px;
    padding: 12px;
    margin-top: 20px;
    border-radius: 100px;
    border: 1px solid #fff;
    background: #fff;
    color: #1a7f81;
    transition: all 0.5s ease-in-out;
  }
  .content button:hover {
    background: none;
    border-color: #fff;
    color: #fff;
  }
  .content button:nth-child(2) {
    border-color: #1a7f81;
    margin-left: 30px;
    background: #1a7f81;
    color: #fff;
  }
  .content button:nth-child(2):hover {
    z-index: 1;
    background: none;
    border-color: #1a7f81;
    color: #1a7f81;
  }
  display: inline-block;
  /* background-size: 14px 2px;
    background-image: linear-gradient(
      25deg,
      rgb(12, 13, 13) 46%,
      rgb(0, 0, 0),
      49%,
      rgb(0, 0, 0),
      51%,
      rgb(12, 13, 13) 55%
    ); */
  background-size: 3px 6px !important;
  background-image: linear-gradient(
    39deg,
    #010101 46%,
    #37393a 56%,
    #060606 51%,
    #030306 25%
  );
  display: -webkit-box;

  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #cursor {
    opacity: 1;
    transform-origin: center center;
    transform-box: fill-box;

    animation: cursor 5s ease infinite alternate;
  }

  @keyframes cursor {
    0% {
      opacity: 0;
      transform: translate3d(300px, 0, 0) scale(1);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    60% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }
    65% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(0.8);
    }
    70% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }
    100% {
      transform: translate3d(-300px, -50px, 0) scale(1);
    }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
  }

  @keyframes box {
    0%,
    60% {
      opacity: 0;
    }
    65%,
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    .content {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;

    h3 {
      color: #f2f2f2;
      font-size: 2rem;
      margin-bottom: 260px;
      margin-top: 200px auto;
      display: flex;
      justify-content: center;
    }
    #cursor,
    #box {
      animation: cursor 5s ease infinite alternate !important;
    }
    svg {
      width: 300px;
      margin-top: 70px;
      margin-left: -295px;
    }
  }
`;