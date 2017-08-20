import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: .5rem 1rem;
  font-size: .875rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  & + & {
    margin-left: .5rem;
  }
`;

export default Button;
