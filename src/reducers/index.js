import { combineReducers } from 'redux';
import notes from './notes';
import editor from './editor';

export default combineReducers({
  notes,
  editor,
});
