/* eslint-disable no-underscore-dangle */
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import requests from 'requests';

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
  const { id } = action.payload;

  try {
    const response = yield call(requests.deleteNote, action.payload.id);
    if (response.success) {
      yield put({ type: 'NOTE_DELETE_SUCCEEDED', payload: { id } });
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put({ type: 'NOTE_DELETE_FAILED', payload: { id } });
  }
}

function* appSaga() {
  yield takeLatest('NOTES_FETCH_REQUESTED', fetchNotes);
  yield takeLatest('NOTE_SAVE_REQUESTED', saveNote);
  yield takeEvery('NOTE_DELETE_REQUESTED', deleteNote);
}

export default appSaga;
