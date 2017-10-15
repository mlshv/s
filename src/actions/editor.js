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
  const titleTrimmed = title.trim() ? title.trim() : undefined;
  const textTrimmed = text.trim() ? text.trim() : undefined;
  if (!textTrimmed) {
    return {
      type: 'NOTE_SAVE_FAILED',
      error: 'Text string can\'t be blank!',
    };
  }
  return {
    type: 'NOTE_SAVE_REQUESTED',
    payload: { title: titleTrimmed, text: textTrimmed },
  };
}
