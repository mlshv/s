import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';

const EditorSt = styled.section`
  display: flex;
  flex-wrap: wrap;
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
    const title = this.state.title ? this.state.title.trim() : undefined;
    const text = this.state.text ? this.state.text.trim() : undefined;
    if (!text) {
      return;
    }
    this.props.handleSave({ title, text }).then(
      () => {
        this.setState({ title: '' });
      },
      () => {
        this.setState({ text: '' });
      },
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <EditorSt>
              <TitleInput placeholder="Title" onChange={this.handleTitleChange} />
              <NoteInput placeholder="Note" onChange={this.handleNoteChange} />
              <Button onClick={this.save}>Save</Button>
            </EditorSt>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default Editor;
