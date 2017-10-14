export default (state = [], action) => {
  switch (action.type) {
    case 'NOTES_FETCH_SUCCEEDED':
      return action.payload;
    case 'NOTE_DELETE_SUCCEEDED':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    case 'NOTE_SAVE_SUCCEEDED':
      return [action.payload, ...state];
    case 'NOTES_FETCH_REQUESTED':
    case 'NOTES_FETCH_FAILED':
    default:
      return state;
  }
};
