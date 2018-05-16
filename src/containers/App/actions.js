export const fetchNotes = () => ({
  type: 'NOTES_FETCH_REQUESTED',
});

export const deleteNote = (id, index) => ({
  type: 'NOTE_DELETE_REQUESTED',
  payload: { id, index },
});
