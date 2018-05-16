import styled from 'styled-components';

const Preloader = styled.div`
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

  &:before,
  &:after {
    border-radius: 50%;
    position: absolute;
    content: '';
  }

  &:before {
    width: 5.2em;
    height: 10.2em;
    background: #ffd400;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: preloader 1s infinite ease 0.5s;
  }

  &:after {
    width: 5.2em;
    height: 10.2em;
    background: #ffd400;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: preloader 1s infinite ease;
  }

  @keyframes preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Preloader;
