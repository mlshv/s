export function changeTitle(nextTitle) {
  return {
    type: 'TITLE_CHANGED',
    payload: nextTitle,
  };
}

export function changeText(nextText) {
  return {
    type: 'TEXT_CHANGED',
    payload: nextText,
  };
}

export function saveNote(title, text) {
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
}
