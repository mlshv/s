/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const List = props => (
  <div className="container">
    <div className="row">
      {props.notes.map((note, index) => (
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3" key={note._id}>
          <Note
            title={note.title}
            text={note.text}
            isDeleting={note.isDeleting}
            handleDelete={() => props.handleDelete(note._id, index)}
          />
        </div>
      ))}
    </div>
  </div>
);

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      isDeleting: PropTypes.bool,
      handleDelete: PropTypes.func,
    }),
  ),
};

List.defaultProps = {
  notes: [],
};

export default List;
