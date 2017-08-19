const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  text: String,
});

module.exports = mongoose.model('Note', NoteSchema);
