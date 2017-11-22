/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Note from './Note';

const ListStyled = styled.div`padding-bottom: 0.5rem;`;

const List = props => (
  <ListStyled>
    <div className="container-fluid">
      <div className="row">
        {props.notes.map((note, index) => (
          <div className="col-xs-12 col-md-4 col-lg-3" key={note._id}>
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
  </ListStyled>
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
