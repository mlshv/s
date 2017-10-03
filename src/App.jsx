/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApiManager from './ApiManager';
import NoteEditor from './Notes/Editor';
import Notes from './Notes/List';

class App extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    ApiManager.fetchNotes().then(
      (res) => {
        this.setState({ notes: res.data });
      },
      () => {
        // TODO: show error message
      },
    );
  };

  handleSave = note =>
    new Promise((resolve, reject) =>
      ApiManager.saveNote(note).then(() => {
        this.fetchNotes();
        resolve(1);
      }, reject),
    );

  handleDelete = (noteIndex) => {
    const removeNote = (index) => {
      this.setState(prevState => ({
        notes: [...prevState.notes.slice(0, index), ...prevState.notes.slice(index + 1)],
      }));
    };
    ApiManager.deleteNote(this.state.notes[noteIndex]._id).then(
      () => {
        removeNote(noteIndex);
      },
      () => {
        console.log('cannot delete');
      },
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path={process.env.REACT_APP_ROOT_URL}
              render={() => (
                <div>
                  <NoteEditor handleSave={this.handleSave} />
                  <Notes notes={this.state.notes} handleDelete={this.handleDelete} />
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
