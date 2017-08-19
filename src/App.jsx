import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ApiManager from './ApiManager';
import NoteEditor from './Notes/Editor';
import NotesList from './Notes/List';

const App = () =>
  (<BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <NotesList fetchNotes={ApiManager.fetchNotes} />} />
        <Route
          exact
          path="/editor"
          render={() => <NoteEditor handleSave={ApiManager.saveNote} />}
        />
      </Switch>
    </div>
  </BrowserRouter>);

export default App;
