import styled from 'styled-components';

const Loader = styled.div`
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  border-radius: 50%;

  &:before {
    position: absolute;
    width: 5.2em;
    height: 10.2em;
    background: #0dc5c1;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    border-radius: 50%;
    transform-origin: 5.2em 5.1em;
    animation: loader 2s infinite ease 1.5s;
    content: '';
  }

  &:after {
    position: absolute;
    width: 5.2em;
    height: 10.2em;
    background: #0dc5c1;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: loader 2s infinite ease;
    animation: loader 2s infinite ease;
    content: '';
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
