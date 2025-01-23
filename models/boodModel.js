const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    genre:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);