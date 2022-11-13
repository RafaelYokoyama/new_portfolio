import styled from "styled-components";

export const Container = styled.div`
  border-top: 3px dashed #1a7f81;
  height: 100vh;
  color: #fff;
  background: #050607;
  @media (max-width: 784px) {
    padding-top: 130px;
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

  .portfolioList {
    margin-top: 40px;
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 1s ease;

    @media (max-width: 784px) {
      margin-right: 20px;
    }

    &.active {
      background-color: #1a7f81;
      color: white;
    }
  }
  .portfolio .container .item {
    width: 250px;
    height: 170px;
    border-radius: 20px;
    box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 20%);
    margin: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    transition: all 1s ease;
    cursor: pointer;
  }
  .portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0px auto;

    h1 {
      font-size: 2.5rem;

      @media (max-width: 784px) {
        font-size: 1.875rem;
      }
    }

    @media (max-width: 784px) {
      padding: 1rem 0;
    }

    ul {
      margin: 10px;
      padding: 0;
      list-style: none;
      display: flex;

      @media (max-width: 784px) {
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .container {
      width: 80%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;
      transition: all 1s ease;

      @media (max-width: 784px) {
        width: 95%;
        height: 80%;
      }

      .item {
        width: 250px;
        height: 170px;
        border-radius: 20px;
        box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.2);
        margin: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: relative;
        transition: all 1s ease;
        cursor: pointer;

        @media (max-width: 784px) {
          width: 120px;
          height: 110px;
          margin: 0 8px 8px;
        }

        a,
        h3 {
          position: absolute;
          font-size: 1.25rem;
          margin: 0 auto;
          text-align: center;

          @media (max-width: 784px) {
            font-size: 1rem;
          }
        }

        img {
          width: 100%;
          height: 100%;
          padding: 20px;
          border-radius: 10%;
          z-index: 1;
          background-color: #0f0f0f;
        }

        &:hover {
          background-color: #1a7f81;

          img {
            opacity: 0.1;
            z-index: 0;
          }
        }
      }
    }
  }
`;
