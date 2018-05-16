/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NoteEditor from 'containers/Editor';
import NotesList from 'components/NotesList';
import { fetchNotes, deleteNote } from './actions';

const Root = styled.main`
  padding: 0.5rem;
`;

class App extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        text: PropTypes.string,
        isDeleting: PropTypes.bool,
        handleDelete: PropTypes.func,
      }),
    ),
    fetchNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
  };

  static defaultProps = {
    notes: [],
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <BrowserRouter>
        <Root>
          <Switch>
            <Route
              exact
              path={process.env.REACT_APP_ROOT_URL}
              render={() => (
                <React.Fragment>
                  <NoteEditor />
                  <NotesList
                    notes={this.props.notes}
                    handleDelete={this.props.deleteNote}
                  />
                </React.Fragment>
              )}
            />
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { fetchNotes, deleteNote })(App);
