import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Api from './ApiManager';

function* fetchNotes() {
  try {
    const res = yield call(Api.fetchNotes);
    yield put({ type: 'NOTES_FETCH_SUCCEEDED', payload: res });
  } catch (e) {
    yield put({ type: 'NOTES_FETCH_FAILED', message: e.message });
  }
}

function* saveNote(action) {
  try {
    const res = yield call(Api.saveNote, action.payload);
    yield put({ type: 'NOTE_SAVE_SUCCEEDED', payload: res });
  } catch (e) {
    yield put({ type: 'NOTE_SAVE_FAILED' });
  }
}

function* deleteNote(action) {
  try {
    const response = yield call(Api.deleteNote, action.payload.id);
    if (response.success) {
      yield put({ type: 'NOTE_DELETE_SUCCEEDED', payload: action.payload.id });
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put({ type: 'NOTE_DELETE_FAILED', payload: action.payload.id });
  }
}

function* appSaga() {
  yield takeLatest('NOTES_FETCH_REQUESTED', fetchNotes);
  yield takeLatest('NOTE_SAVE_REQUESTED', saveNote);
  yield takeEvery('NOTE_DELETE_REQUESTED', deleteNote);
}

export default appSaga;
