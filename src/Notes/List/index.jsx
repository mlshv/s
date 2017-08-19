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
  }

  componentDidMount() {
    this.props.fetchNotes().then((response) => {
      this.setState({ notes: response.data });
    });
  }

  render() {
    return (
      <ListSt>
        {this.state.notes.map(note => <Note title={note.title} text={note.text} key={note._id} />)}
      </ListSt>
    );
  }
}

List.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
};

export default List;
