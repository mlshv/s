const API_URL = process.env.REACT_APP_API_URL;

export default {
  fetchNotes() {
    return fetch(`${API_URL}/notes`).then(response => response.json());
  },
  saveNote(note) {
    return fetch(`${API_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  },
  deleteNote(note) {
    return fetch(`${API_URL}/notes?id=${note}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  },
};
