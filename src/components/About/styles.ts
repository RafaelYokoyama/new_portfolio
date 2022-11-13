import styled from "styled-components";

export const Container = styled.div`
  border-top: 3px dashed #1a7f81;
  animation: border-dance 2s infinite linear;
  height: 100vh;
  color: #fff;
  background: #050607;

  @keyframes border-dance {
    0% {
      background-position: left top, right bottom, left bottom, right top;
    }
    100% {
      background-position: left 15px top, right 15px bottom, left bottom 15px,
        right top 15px;
    }
  }

  .row2 {
    display: flex;
    width: 1000px;
    margin: 0 auto;
    .names {
      padding-top: 120px;
    }
  }
  .title {
    width: 100%;
    text-align: center;
    padding: 0 15px;
    font-size: 34px;
  }
  .title::before {
    content: attr(data-title);

    font-family: Dancing Script, " cursive";
    padding-top: 40px;
    display: block;
    font-size: 16px;
    font-weight: 400px;
    color: #fff;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
  }

  .container div {
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }
  .row::after {
    content: "";
    display: table;
    clear: both;
  }

  .hidden {
    overflow: hidden;
  }
  .relative {
    position: relative;
  }

  .grid-5 {
    width: calc(38.66667% - 8px);
    margin: 4px;
    padding: 1px 0px;
    float: left;
  }

  .grid-photos {
    max-height: 480px;
  }
  h2 {
    color: #f5f7f7;
    font-family: "Saira", sans-serif;
    font-size: 37px;
    line-height: 100%;
    font-weight: 300;
    margin-bottom: 10px;
    margin-left: -2.5px;
  }

  .list .item-list {
    margin-top: 15px;
    color: #a5a6a8;
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
    cursor: pointer;
    font-family: "Mukta", sans-serif;
    font-size: 14px;
    line-height: 130%;
    font-weight: 200;
  }
  .item-list:nth-child(2) {
    padding-left: 78px;
  }
  .item-list:nth-child(3) {
    text-align: right;
    margin-right: 90px;
  }
  .list {
    margin-top: 40px;
  }
  .blur1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 96px;
    z-index: 200;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#050607),
        to(rgba(5, 6, 7, 0))
      ),
      -webkit-gradient(linear, left top, left bottom, from(#050607), to(rgba(5, 6, 7, 0))),
      -webkit-gradient(linear, left top, left bottom, from(#050607), to(rgba(5, 6, 7, 0)));
    background: linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%),
      linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%),
      linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%);
  }
  .blur2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 96px;
    z-index: 200;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#050607),
        to(rgba(5, 6, 7, 0))
      ),
      -webkit-gradient(linear, left top, left bottom, from(#050607), to(rgba(5, 6, 7, 0))),
      -webkit-gradient(linear, left top, left bottom, from(#050607), to(rgba(5, 6, 7, 0)));
    background: linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%),
      linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%),
      linear-gradient(180deg, #050607 0%, rgba(5, 6, 7, 0) 100%);
  }

  .photo {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    padding: 5px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: 1s ease;
    transition: 1s ease;
  }

  .photo:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    cursor: pointer;
  }

  .grid-photo-1 {
    -webkit-animation: grid-photo-1 10s ease infinite alternate;
    animation: grid-photo-1 10s ease infinite alternate;
  }
  .grid-photo-2 {
    -webkit-animation: grid-photo-2 14s ease infinite alternate;
    animation: grid-photo-2 14s ease infinite alternate;
  }

  .grid-nobreak-6 {
    width: calc(50% - 40px);
    margin: 4px;
    padding: 16px 0px;
    float: left;
  }

  @keyframes grid-photo-1 {
    0% {
      -webkit-transform: translate3d(0, -240px, 0);
      transform: translate3d(0, -240px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes grid-photo-2 {
    0% {
      -webkit-transform: translate3d(0, -320px, 0);
      transform: translate3d(0, -320px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @media screen and (max-width: 960px) {
    .grid-photo-1,
    .grid-photo-2 {
      max-width: 80px;

      display: flex;
      flex-direction: row;
    }

    @keyframes grid-photo-2 {
      0% {
        -webkit-transform: translate3d(0, 120px, 0);
        transform: translate3d(0, 120px, 0);
      }
      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .container {
      display: block;
    }
    h2 {
      font-size: 28px;
      margin-top: 10px;
    }
    .names,
    h2 {
      margin-left: 40px;
      div:nth-of-type(2) {
        display: none;
      }
    }
    .grid-5 {
      width: calc(100% - 8px);
      display: block;
      float: none;
    }
    .grid-photos {
      margin-top: 60px;
      max-height: 480px;
    }
  }
`;
