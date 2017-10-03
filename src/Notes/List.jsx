/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const List = props => (
  <div className="container-fluid">
    <div className="row">
      {props.notes.map((note, index) => (
        <div className="col-xs-12 col-md-4 col-lg-3" key={note._id}>
          <Note title={note.title} text={note.text} id={index} handleDelete={props.handleDelete} />
        </div>
      ))}
    </div>
  </div>
);

List.propTypes = {
  notes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default List;
