export default (
  state = { title: '', text: '', isNoteSaveInProgress: false },
  action,
) => {
  switch (action.type) {
    case 'TITLE_CHANGED':
      return {
        ...state,
        title: action.payload,
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
        isNoteSaveInProgress: false,
      };
    case 'NOTE_SAVE_REQUESTED':
      return {
        ...state,
        isNoteSaveInProgress: true,
      };
    case 'NOTE_SAVE_FAILED':
      return {
        ...state,
        isNoteSaveInProgress: false,
      };
    default:
      return state;
  }
};
