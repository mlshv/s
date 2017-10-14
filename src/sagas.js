import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Api from './ApiManager';

function* fetchNotes() {
  try {
    const res = yield call(Api.fetchNotes);
    yield put({ type: 'NOTES_FETCH_SUCCEEDED', payload: res.data });
  } catch (e) {
    yield put({ type: 'NOTES_FETCH_FAILED', message: e.message });
  }
}

function* saveNote(action) {
  try {
    const res = yield call(Api.saveNote, action.payload);
    yield put({ type: 'NOTE_SAVE_SUCCEEDED', payload: res.data });
  } catch (e) {
    yield put({ type: 'NOTE_SAVE_FAILED' });
  }
}

function* deleteNote(action) {
  try {
    yield call(Api.deleteNote, action.payload.id);
    yield put({ type: 'NOTE_DELETE_SUCCEEDED', payload: action.payload.index });
  } catch (e) {
    yield put({ type: 'NOTE_DELETE_FAILED' });
  }
}

function* appSaga() {
  yield takeLatest('NOTES_FETCH_REQUESTED', fetchNotes);
  yield takeLatest('NOTE_SAVE_REQUESTED', saveNote);
  yield takeEvery('NOTE_DELETE_REQUESTED', deleteNote);
}

export default appSaga;
