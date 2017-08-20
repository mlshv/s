/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Note from './Note';

const ListSt = styled.section`margin: 0 auto;`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes().then((response) => {
      this.setState({ notes: response.data });
    });
  }

  handleDelete(noteIndex) {
    const removeNote = (index) => {
      this.setState(prevState => ({
        notes: [...prevState.notes.slice(0, index), ...prevState.notes.slice(index + 1)],
      }));
    };
    this.props.handleDelete(this.state.notes[noteIndex]._id).then(
      () => {
        removeNote(noteIndex);
      },
      () => {
        alert('Ошибочка вышла');
      },
    );
  }

  render() {
    return (
      <ListSt>
        {this.state.notes.map((note, index) =>
          (<Note
            title={note.title}
            text={note.text}
            id={index}
            key={note._id}
            handleDelete={this.handleDelete}
          />),
        )}
      </ListSt>
    );
  }
}

List.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default List;
