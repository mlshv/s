/* eslint-disable no-underscore-dangle */
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import requests from 'requests';
import { selectNotes } from 'containers/App/selectors';

function* fetchNotes() {
  try {
    const res = yield call(requests.fetchNotes);
    yield put({ type: 'NOTES_FETCH_SUCCEEDED', payload: res });
  } catch (e) {
    yield put({ type: 'NOTES_FETCH_FAILED', message: e.message });
  }
}

function* saveNote(action) {
  try {
    const res = yield call(requests.saveNote, action.payload);
    yield put({ type: 'NOTE_SAVE_SUCCEEDED', payload: res });
  } catch (e) {
    yield put({ type: 'NOTE_SAVE_FAILED' });
  }
}

function* deleteNote(action) {
  const notes = yield select(selectNotes);
  const index = notes.findIndex(note => note._id === action.payload.id);

  try {
    const response = yield call(requests.deleteNote, action.payload.id);
    if (response.success) {
      yield put({ type: 'NOTE_DELETE_SUCCEEDED', payload: { index } });
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put({ type: 'NOTE_DELETE_FAILED', payload: { index } });
  }
}

function* appSaga() {
  yield takeLatest('NOTES_FETCH_REQUESTED', fetchNotes);
  yield takeLatest('NOTE_SAVE_REQUESTED', saveNote);
  yield takeEvery('NOTE_DELETE_REQUESTED', deleteNote);
}

export default appSaga;
