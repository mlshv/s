import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteSt = styled.div`
  margin: 1rem 0;
  border: 1px solid #171717;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: .5rem;
  font-size: 1.25rem;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Note = props =>
  (<NoteSt>
    {props.title &&
      <Title>
        {props.title}
      </Title>}
    <Text>
      {props.text}
    </Text>
  </NoteSt>);

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Note.defaultProps = {
  title: '',
};

export default Note;
