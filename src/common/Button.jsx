import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: .5rem 1rem;
  font-size: .875rem;
  border: 1px solid #444;
  border-radius: .25rem;
  cursor: pointer;
  color: #444;
  background: transparent;
  & + & {
    margin-left: .5rem;
  }
`;

export default Button;
