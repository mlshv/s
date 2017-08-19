import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const EditorSt = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 1rem auto;
`;

const TitleInput = styled.input`
  flex-basis: 100%;
  margin-bottom: .5rem;
  padding: .25rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 1px solid #171717;
  border-radius: .25rem;
  outline: none;
`;

const NoteInput = styled.textarea`
  flex-basis: 100%;
  min-height: 100px;
  margin-bottom: .5rem;
  padding: .25rem;
  font-size: 1rem;
  border: 1px solid #171717;
  border-radius: .25rem;
`;

const SaveButton = styled.button`
  margin: 0;
  padding: .5rem 1rem;
  font-size: .875rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleNoteChange(e) {
    this.setState({ text: e.target.value });
  }

  save() {
    const title = this.state.title.trim();
    const text = this.state.text.trim();
    if (!text) {
      return;
    }
    this.props.handleSave({ title, text }).then(
      () => {
        this.props.history.push('/');
      },
      () => {
        this.props.history.push('/');
      },
    );
  }

  render() {
    return (
      <EditorSt>
        <TitleInput
          placeholder="Title"
          onChange={this.handleTitleChange}
          value={this.state.title}
        />
        <NoteInput placeholder="Note" onChange={this.handleNoteChange} value={this.state.text} />
        <SaveButton onClick={this.save}>Save</SaveButton>
      </EditorSt>
    );
  }
}

Editor.propTypes = {
  handleSave: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Editor);
