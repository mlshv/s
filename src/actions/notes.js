export function fetchNotes() {
  return {
    type: 'NOTES_FETCH_REQUESTED',
  };
}

export function deleteNote(id, index) {
  return {
    type: 'NOTE_DELETE_REQUESTED',
    payload: { id, index },
  };
}
