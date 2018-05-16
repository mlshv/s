import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import checkMark from '../style/icons/check_mark.svg';
import spinner from '../style/icons/spinner.gif';
import { changeTitle, changeText, saveNote } from '../actions/editor';

const EditorSt = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0.5rem -0.5rem 0 -0.5rem;
  padding: 1rem 0.5rem 0.5rem 1rem;
  border-radius: 0.25rem;
  background: #fff;
  @media screen and (min-width: 48rem) {
    margin: 1rem 0 0.5rem 0;
    padding: 1.5rem 0.5rem 0.5rem 1.5rem;
  }
`;

const TextInputs = styled.div`
  flex-grow: 1;
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 0;
`;

const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
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
  width: 100%;
  min-height: 100px;
  margin-bottom: 0.5rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border: none;
  outline: none;
  color: #444;
  background: transparent;
  resize: none;
`;

const RoundButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: #343434;
  background-image: url(${props => (props.loading ? spinner : checkMark)});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: ${props => (props.loading ? '1.5rem' : '1rem')};
  outline: none;
  cursor: pointer;
  &:active {
    background-size: ${props => (props.loading ? '1.5rem' : '0.95rem')};
    box-shadow: ${props => (props.loading ? 'none' : 'inset 0 0 5px 5px rgba(0, 0, 0, 0.25)')};
  }
`;

const getRandomPlaceholder = () => {
  const placeholders = [
    'Go note or go home',
    'Note hard, play hard',
    'Your note or your life',
    'Your credit card number and PIN',
    'Note up and note down',
    'A day without a note is a day wasted',
    'Spend some bytes',
  ];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
};

class Editor extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired,
    changeText: PropTypes.func.isRequired,
    saveNote: PropTypes.func.isRequired,
    noteSaveInProgress: PropTypes.bool.isRequired,
  };

  state = {
    placeholder: getRandomPlaceholder(),
  };

  componentDidMount() {
    // preload spinner
    new Image().src = spinner;
  }

  save = () => {
    const title = this.props.title ? this.props.title.trim() : undefined;
    const text = this.props.text ? this.props.text.trim() : undefined;
    if (!text) {
      return;
    }
    this.props.saveNote(title, text);
    this.setState({ placeholder: getRandomPlaceholder() });
  };

  render() {
    const { title, text, noteSaveInProgress } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-3 col-lg-6">
            <EditorSt>
              <TextInputs>
                <TitleInput
                  placeholder="Title"
                  onChange={e => this.props.changeTitle(e.target.value)}
                  value={title}
                />
                <NoteInput
                  placeholder={this.state.placeholder}
                  onChange={e => this.props.changeText(e.target.value)}
                  value={text}
                />
              </TextInputs>
              <Buttons>
                <div />
                <div>
                  <RoundButton onClick={this.save} loading={noteSaveInProgress} />
                </div>
              </Buttons>
            </EditorSt>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.editor.title,
  text: state.editor.text,
  noteSaveInProgress: state.editor.noteSaveInProgress,
});

export default connect(mapStateToProps, { changeTitle, changeText, saveNote })(Editor);
