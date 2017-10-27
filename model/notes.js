const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    title: String,
    text: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Note', NoteSchema, 'Note');
