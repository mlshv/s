/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NoteEditor from 'containers/Editor';
import NotesList from 'components/NotesList';
import Preloader from 'components/Preloader';
import { fetchNotes, deleteNote } from './actions';
import { selectNotes, selectIsFetching } from './selectors';

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
    isFetching: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    notes: [],
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes, isFetching } = this.props;

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
                  {isFetching ? (
                    <Preloader />
                  ) : (
                    <NotesList notes={notes} handleDelete={this.props.deleteNote} />
                  )}
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
  notes: selectNotes(state),
  isFetching: selectIsFetching(state),
});

export default connect(mapStateToProps, { fetchNotes, deleteNote })(App);
