/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ApiManager from './ApiManager';
import NoteEditor from './Notes/Editor';
import Notes from './Notes/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.update = this.update.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    ApiManager.fetchNotes().then(
      (res) => {
        this.setState({ notes: res.data });
      },
      () => {
        console.log("can't update");
      },
    );
  }

  handleSave(note) {
    return new Promise((resolve, reject) =>
      ApiManager.saveNote(note).then(() => {
        this.update();
        resolve();
      }, reject),
    );
  }

  handleDelete(noteIndex) {
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
        alert('Ошибочка вышла');
      },
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                (<div>
                  <NoteEditor handleSave={this.handleSave} />
                  <Notes notes={this.state.notes} handleDelete={this.handleDelete} />
                </div>)}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
