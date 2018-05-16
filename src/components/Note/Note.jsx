import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import Button from 'components/Button';
import { NoteSt, Text, Title, Spinner, Buttons, DeleteIcon } from './styles';

const Note = ({ title, text, isDeleting, handleDelete }) => (
  <NoteSt>
    {title && <Title>{title}</Title>}
    <Text>
      <Linkify>
        {text &&
          text.split('\n').map((line, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={key}>
              {line}
              <br />
            </span>
          ))}
      </Linkify>
    </Text>
    <Buttons>
      <Button onClick={handleDelete}>
        {isDeleting ? <Spinner /> : <DeleteIcon />}
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
