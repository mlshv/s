import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

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
  deleteNote(note) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${API_URL}/notes`, { params: { id: note } })
        .then((response) => {
          if (response.data.success) {
            resolve();
          } else {
            reject();
          }
        }, reject)
        .catch(reject);
    });
  },
};
