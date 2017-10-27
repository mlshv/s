export default (
  state = { title: '', text: '', noteSaveInProgress: false },
  action,
) => {
  switch (action.type) {
    case 'TITLE_CHANGED':
      return {
        title: action.payload,
        text: state.text,
      };
    case 'TEXT_CHANGED':
      return {
        title: state.title,
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
        noteSaveInProgress: true,
      };
    case 'NOTE_SAVE_FAILED':
      return {
        noteSaveInProgress: false,
      };
    default:
      return state;
  }
};
