import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';

const NoteSt = styled.div`
  margin: .5rem -.5rem;
  margin-bottom: 0;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: .25rem;
  background: #fff;
  @media screen and (min-width: 48rem) {
    margin: .5rem 0;
    padding-bottom: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: .5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 1rem;
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
    <Buttons>
      <Button
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        Delete
      </Button>
    </Buttons>
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
