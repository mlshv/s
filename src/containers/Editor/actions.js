export const changeTitle = nextTitle => ({
  type: 'TITLE_CHANGED',
  payload: nextTitle,
});

export const changeText = nextText => ({
  type: 'TEXT_CHANGED',
  payload: nextText,
});

export const saveNote = (title, text) => {
  if (!text) {
    return {
      type: 'NOTE_SAVE_FAILED',
      error: 'Text string can\'t be blank!',
    };
  }

  return {
    type: 'NOTE_SAVE_REQUESTED',
    payload: { title, text },
  };
};
