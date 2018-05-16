export default (state = [], action) => {
  switch (action.type) {
    case 'NOTES_FETCH_SUCCEEDED':
      return action.payload.map(note => ({ ...note, isDeleting: false }));
    case 'NOTE_DELETE_REQUESTED':
      return [
        ...state.slice(0, action.payload.index),
        { ...state[action.payload.index], isDeleting: true },
        ...state.slice(action.payload.index + 1, state.length),
      ];
    case 'NOTE_DELETE_SUCCEEDED': // eslint-disable-line
      const index = state.findIndex(note => note._id === action.payload); // eslint-disable-line
      return [...state.slice(0, index), ...state.slice(index + 1, state.length)];
    case 'NOTE_SAVE_SUCCEEDED':
      return [{ ...action.payload, isDeleting: false }, ...state];
    case 'NOTES_FETCH_REQUESTED':
    case 'NOTES_FETCH_FAILED':
    default:
      return state;
  }
};
