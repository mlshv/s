import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';

const NoteSt = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #171717;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: .5rem;
  font-size: 1.25rem;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: .5rem;
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
    <Button
      onClick={() => {
        props.handleDelete(props.id);
      }}
    >
      Delete
    </Button>
  </NoteSt>);

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

Note.defaultProps = {
  title: '',
};

export default Note;
