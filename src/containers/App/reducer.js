export default (state = { notes: [], isFetching: false }, action) => {
  const index =
    action.payload &&
    action.payload.id && // eslint-disable-next-line no-underscore-dangle
    state.notes.findIndex(note => note._id === action.payload.id);

  switch (action.type) {
    case 'NOTES_FETCH_REQUESTED':
      return {
        ...state,
        isFetching: true,
      };
    case 'NOTES_FETCH_SUCCEEDED':
      return {
        ...state,
        notes: action.payload.map(note => ({ ...note, isDeleting: false })),
        isFetching: false,
      };
    case 'NOTES_FETCH_FAILED':
      return {
        ...state,
        isFetching: false,
      };
    case 'NOTE_DELETE_REQUESTED':
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, action.payload.index),
          { ...state.notes[action.payload.index], isDeleting: true },
          ...state.notes.slice(action.payload.index + 1),
        ],
      };
    case 'NOTE_DELETE_SUCCEEDED':
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          ...state.notes.slice(index + 1),
        ],
      };
    case 'NOTE_DELETE_FAILED': // eslint-disable-line no-case-declarations
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          { ...state.notes[index], isDeleting: false },
          ...state.notes.slice(index + 1),
        ],
      };
    case 'NOTE_SAVE_SUCCEEDED':
      return { ...state, notes: [{ ...action.payload, isDeleting: false }, ...state.notes] };
    default:
      return state;
  }
};
