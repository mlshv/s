/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Note from './Note';

const ListSt = styled.section`margin: 0 auto;`;

const List = props =>
  (<div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <ListSt>
          {props.notes.map((note, index) =>
            (<Note
              title={note.title}
              text={note.text}
              id={index}
              key={note._id}
              handleDelete={props.handleDelete}
            />),
          )}
        </ListSt>
      </div>
    </div>
  </div>);

List.propTypes = {
  notes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default List;
