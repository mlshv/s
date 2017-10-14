import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import styled from 'styled-components';
import Button from '../common/Button';

const NoteSt = styled.div`
  margin: 0.5rem -0.5rem;
  margin-bottom: 0;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 0.25rem;
  background: #fff;
  @media screen and (min-width: 48rem) {
    margin: 0.5rem 0;
    padding-bottom: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 0.5rem;
  margin: 0 -0.5rem;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Note = props => (
  <NoteSt>
    {props.title && <Title>{props.title}</Title>}
    <Text>
      <Linkify>{props.text}</Linkify>
    </Text>
    <Buttons>
      <Button onClick={props.handleDelete}>
        <i className="fa fa-lg fa-trash" />
      </Button>
    </Buttons>
  </NoteSt>
);

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

Note.defaultProps = {
  title: '',
};

export default Note;
