import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: 0.25rem;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  color: #444;
  background: transparent;
  outline: none;
  &:active {
    transform: scale(0.9);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

export default Button;
