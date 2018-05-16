export const changeTitle = nextTitle => ({
  type: 'TITLE_CHANGED',
  payload: nextTitle,
});

export const changeText = nextText => ({
  type: 'TEXT_CHANGED',
  payload: nextText,
});

export const saveNote = (title, text) => ({
  type: 'NOTE_SAVE_REQUESTED',
  payload: { title, text },
});
