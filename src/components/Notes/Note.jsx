import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import styled from 'styled-components';
import Button from '../common/Button';
import trashbox from '../../style/icons/trashbox.svg';
import spinner from '../../style/icons/spinner.gif';

const NoteSt = styled.div`
  margin: 0.5rem -0.5rem;
  margin-bottom: 0;
  padding: 1rem 0.5rem 0.5rem 1rem;
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
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const DeleteIcon = styled.img.attrs({
  src: trashbox,
})`width: 1.25rem; height: 1.25rem`;

const Spinner = styled.img`
  display: block;
  width: 1.25rem;
`;

const Note = props => (
  <NoteSt>
    {props.title && <Title>{props.title}</Title>}
    <Text>
      <Linkify>
        {props.text.split('\n').map((line, key) => (
          // eslint-disable-next-line
          <span key={key}>
            {line}
            <br />
          </span>
        ))}
      </Linkify>
    </Text>
    <Buttons>
      <Button onClick={props.handleDelete} isDeleting={props.isDeleting}>
        {props.isDeleting ? (
          <Spinner src={spinner} alt="" />
        ) : (
          <DeleteIcon />
        )}
      </Button>
    </Buttons>
  </NoteSt>
);

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

Note.defaultProps = {
  title: '',
};

export default Note;
