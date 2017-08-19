import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export default {
  fetchNotes() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/notes`).then(resolve).catch(reject);
    });
  },
  saveNote(note) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}/notes`, note).then(resolve).catch(reject);
    });
  },
};
