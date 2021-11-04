const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);