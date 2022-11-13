import styled from 'styled-components';

interface ListProps {
    menuActive: boolean
}

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: calc(50% - 11rem);
  z-index: 10;
  @media(max-width: 425px) {
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    bottom: 0;
  }
  .navigation {
    position: relative;
  }
  .toggle {
    position: absolute;
    top: calc(50% - 1.25rem);
    left: -30px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #080808;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
     font-size: 1rem;
     color:  #1a7f81; 
    }
  }
`;

export const List = styled.div<ListProps>`
  position: relative;
  width: ${props => props.menuActive === true ? '12rem' : '3.5rem'};
  min-height: 19rem;
  background-color: #111111;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  ul li {
    text-indent: 0;
    list-style: none;
  }
  > ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
  }
  > ul li {
    position: relative;
    width: 100%;
    &:hover {
      background-color: #080808;
    }
  }
  > ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color:#1a7f81 !important;
    font-weight: 500;
  }
  ul li a:hover{
      color: #fff !important;;
  }
  > ul li a .icon {
    position: relative;
    display: block;
    min-width: 40px;
    height: 2.2rem;
    line-height: 3.8rem;
    text-align: center;
    background: none;
    margin-left: 1rem;
    & svg {
      font-size: 1.2rem;
      margin-bottom: 10px;
      
    }
  }
  > ul li a .title {
    position: relative;
    display: block;
    height: 3.8rem;
    line-height: 3.8rem;
    white-space: nowrap;
    margin-left: 1rem;
  }
  > ul li  a.active{
  color:#000;
 }
  @media(max-width: 425px) {
    height: 3rem;
    min-height: 0;
    width: 22rem;
    border-radius: 10px 10px 0 0;
    margin-left: -86px;
    ul {
      display: flex;
      padding: 0;
    }
  }
`