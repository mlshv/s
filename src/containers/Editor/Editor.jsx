import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTitle, changeText, saveNote } from './actions';
import { EditorSt, TextInputs, TitleInput, NoteInput, Buttons, RoundButton } from './styles';

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
    isNoteSaveInProgress: PropTypes.bool.isRequired,
  };

  state = {
    placeholder: getRandomPlaceholder(),
  };

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
    const { title, text, isNoteSaveInProgress } = this.props;
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
                  <RoundButton onClick={this.save} loading={isNoteSaveInProgress} />
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
  isNoteSaveInProgress: state.editor.isNoteSaveInProgress,
});

export default connect(mapStateToProps, { changeTitle, changeText, saveNote })(Editor);
