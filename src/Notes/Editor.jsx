import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../common/Button';
import checkMark from '../icons/check_mark.svg';

const EditorSt = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem;
  margin-top: .5rem;
  padding: 0;
  border-radius: .5rem;
  @media screen and (min-width: 48rem) {
    margin: .5rem;
    margin-top: 1rem;
  }
`;

const TextInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  padding: 1rem;
  padding-bottom: 0rem;
  background: #fff;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  padding: .5rem;
  padding-top: 0;
  background: #fff;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const TitleInput = styled.input`
  flex-basis: 100%;
  margin-bottom: .5rem;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  outline: none;
  color: #444;
  background: transparent;
`;

const NoteInput = styled.textarea`
  flex-basis: 100%;
  min-height: 100px;
  margin-bottom: .5rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border: none;
  outline: none;
  color: #444;
  background: transparent;
  resize: none;
`;

const RoundButton = Button.extend`
  padding: 1rem;
  border-none;
  border-radius: 50%;
  background: #343434;
`;

const CheckMark = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  background: url(${checkMark});
  content: " ";
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
        this.setState({ title: '', text: '' });
      },
      () => {
        this.setState({ title: '', text: '' });
      },
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <EditorSt>
              <TextInputs>
                <TitleInput
                  placeholder="Title..."
                  onChange={this.handleTitleChange}
                  value={this.state.title}
                />
                <NoteInput
                  placeholder="Go note or go home..."
                  onChange={this.handleNoteChange}
                  value={this.state.text}
                />
              </TextInputs>
              <Buttons>
                <div />
                <div>
                  <RoundButton onClick={this.save}>
                    <CheckMark alt="" />
                  </RoundButton>
                </div>
              </Buttons>
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
