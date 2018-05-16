import { combineReducers } from 'redux';
import editor from 'containers/Editor/reducer';
import app from 'containers/App/reducer';

export default combineReducers({
  notes: app,
  editor,
});
