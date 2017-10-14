export default (state = { title: '', text: '' }, action) => {
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
      };
    case 'NOTE_SAVE_REQUESTED':
    case 'NOTE_SAVE_FAILED':
    default:
      return state;
  }
};
