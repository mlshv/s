export default (
  state = { title: '', text: '', noteSaveInProgress: false },
  action,
) => {
  switch (action.type) {
    case 'TITLE_CHANGED':
      return {
        ...state,
        text: state.text,
      };
    case 'TEXT_CHANGED':
      return {
        ...state,
        text: action.payload,
      };
    case 'NOTE_SAVE_SUCCEEDED':
      return {
        title: '',
        text: '',
        noteSaveInProgress: false,
      };
    case 'NOTE_SAVE_REQUESTED':
      return {
        ...state,
        noteSaveInProgress: true,
      };
    case 'NOTE_SAVE_FAILED':
      return {
        ...state,
        noteSaveInProgress: false,
      };
    default:
      return state;
  }
};
