

import styled from "styled-components";

export const Container = styled.div`
border-top: 3px dashed #1a7f81;
animation: border-dance 2s infinite linear ;
padding:30px 0;
min-height: 100% !important;
 .skils {
background:#fff;
color:#000;
margin: 4px 2px;
border-radius:10rem;
padding: 4px 1px;
text-align: center;
font-weight: bold;
z-index: 10px;
}
h6{
 display: flex;
 align-items: center;
justify-content: center;

}
.slider-text-1 {
    white-space: nowrap;
    -webkit-animation: slider-text-1 1s linear infinite alternate;
    animation: slider-text-1 1s linear infinite alternate
  }

  @keyframes  slider-text-1 {
    
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(10px, 0, 0);
}

  }

  .slider-text {

white-space: nowrap;
-webkit-animation: slider-text 20s linear infinite alternate;
animation: slider-text 20s linear infinite alternate;
}
@keyframes  slider-text {
0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
100% {
    -webkit-transform: translate3d(-1000px, 0, 0);
    transform: translate3d(-1000px, 0, 0);
}
}
.mx-5 {
margin-left: 48px ;
margin-right: 48px ;
}

.my-8 {
    margin-top: 96px !important;
    margin-bottom: 96px !important;
}
.relative {
    position: relative;
}
.container {
    max-width: 1440px;
    margin: 0 auto;
  
}
/* .grid-12 {
    width: calc(100% - 8px);
    margin: 4px;
    padding: 16px 0px;
    float: left;
} */
.cursor-ny {
    position: absolute;
    top: 50%;
    left: 20%;
    z-index: 200;
    -webkit-transform: translate(-50%, -50%) scale(0.7);
    transform: translate(-50%, -50%) scale(0.7);
    -webkit-animation: cursor-ny 10s ease infinite alternate;
    animation: cursor-ny 10s ease infinite alternate;
}


@keyframes  cursor-ny {
  0%, 20% {
    top: 120%;
    left: 70%;
}
50% {
    top: 50%;
    left: 60%;
}
90%, 100% {
    top: 110%;
    left: 20%;
}
  
}
h5 {
    text-transform: uppercase;
    color: #F5F7F7;
    font-family: 'Saira', sans-serif;
    font-size: 18px;
    line-height: 140%;
    font-weight: 500;
    letter-spacing: 1px;
    position: relative;
    padding-left: 0px;
    -webkit-transition: .5s ease;
    transition: .5s ease;
    background: -webkit-gradient(linear, left top, right top, from(#4CDCFF), to(#3661D1));
    background: linear-gradient(90deg, #4CDCFF 0%, #3661D1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-center {
    text-align: center;
}
footer{
    text-align: center;
}
footer p {
  color: #7C7D80;
    font-family: 'Mukta', sans-serif;
    font-size: 18px;
    line-height: 140%;
    font-weight: 200;
}
.py-6 {
    padding-top: 40px;
}


.mt-6 {
    margin-top: 64px ;
}
.color-blue {
    color: #2DC7ED;
}
h3 {
    color: #F5F7F7;
    font-family: 'Saira', sans-serif;
    font-size: 30px;
    line-height: 120%;
    font-weight: 300;
}

.pl-3 {
    padding-left: 24px !important;
}
.mt-1 {
    margin-top: 8px !important;
}
h2 {
    color: #F5F7F7;
    font-family: 'Saira', sans-serif;
    font-size: 52px;
    line-height: 100%;
    font-weight: 300;
}


.bt-gray {
margin-top:25px;

}
.bb-gray {
  border-bottom: 1px solid #515151;

}


.skils-span{
background:#000;
margin: 4px 2px;
width: 140px;
text-align: center;
border-radius:10rem;
padding: 4px 1px;
}

.skils{
display: grid;
grid-template-columns: repeat(.5gr);
	grid-auto-flow: dense;
}
.p-skils{
  font-size: 14px;

line-height: 15px;
 text-align: left;
}
.vertical-timeline-element-title{
  margin-top: 10px;
  margin-left: 6px;
}
.vertical-timeline-element-subtitle{
  margin-bottom: 10px;
  margin-left: 6px;
}
@keyframes border-dance {
    0% {
      background-position: left top, right bottom, left bottom, right   top;
    }
    100% {
      background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
    }
  }


color:#fff;
background-size: 3px 6px !important;
background-image: linear-gradient(39deg,#010101 46%,#37393a 56%,#060606 51%,#030306 25%);

   .row {
display: flex;
width: 1440px;
margin: 0 auto;
.names{
    padding-top:120px;
}



}
.title {
    width: 100%;
    text-align: center;
    padding: 0 15px;
    font-size: 34px;
  ;
  }
  .title::before {
    content: attr(data-title);
  
    font-family: Dancing Script, ' cursive';
    padding-top: 40px;
    display: block;
    font-size: 16px;
    font-weight: 400px;
    color: #fff;
  
  }
  .wrapper {
      margin-top: 10px;
    display: flex;
    justify-content: center;
      padding-left: 350px;
    
    }

  @media screen and (max-width: 960px){
    padding-top: 60px;
    .slider-text{
      display:none;
    }
    .slider-text-1{
      display: contents;
    }
    .wrapper{
      padding-left: 0px ;
    }
}
 

.icon {
  cursor:pointer;
  height: 32px;
  width: 32px;
  margin: 10px 3px 10px ;
  box-shadow:

 2px -2px 16px 0 #1a7f81; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all .7 ease;
} 
.icon i {
cursor:pointer;

font-size: 20px;
color:#fff;
transition: all .7 ease-in-out;
}
.icon i:hover{
  font-size: 20px;

}
.icon:hover {
  box-shadow:
    5px 5px 10px 0 rgba(1, 1, 1, 1) inset,
    -5px -5px 12px 0 rgba(255, 255, 255, 0.25) inset;
}
    
`;


