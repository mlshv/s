/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NoteEditor from './Editor';
import Notes from '../components/Notes/List';
import { fetchNotes, deleteNote } from '../actions/notes';

class App extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        text: PropTypes.string,
        handleDelete: PropTypes.func,
      }),
    ).isRequired,
    fetchNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

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
                  <NoteEditor />
                  <Notes notes={this.props.notes} handleDelete={this.props.deleteNote} />
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { fetchNotes, deleteNote })(App);
