import React from 'react';
import styled from 'styled-components';

const Header = styled.section`
  padding: .5rem;
  border-bottom: 1px solid #171717;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export default () =>
  (<Header>
    <Title>s</Title>
  </Header>);
