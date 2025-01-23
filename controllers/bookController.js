const BookModel = require('../models/boodModel')

const getBook = async(req, res) => {
    try {
        const Books = await BookModel.find();
        if(!Books){
            console.log(err);
        }
        res.json(Books)
    } catch(err) {
        console.log(err)
    }
}

const createBook = async(req, res) => {
    const Book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    })
    try {
        const newBook = await Book.save();
        res.status(201).json(newBook);
    } catch(err) {
        console.log(err)
    }
}

const updateBook = async(req,res) => {
    try {
        const Book = await BookModel.findById(req.params.id);
        if(!Book){
            console.log('err')
        }
        Book.title = req.body.title;
        Book.author = req.body.author;
        Book.genre = req.body.genre;

        const updateBook = Book.save();
        res.json({'message': 'Updated Book'});
    } catch (err){
        console.log(err)
    }
}

const deleteBook = async(req, res) => {
    try{
        const book = await BookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await BookModel.deleteOne({ _id: req.params.id });
        res.json({ message: 'Deleted Book' });
    } catch (err){
        console.log(err);
    }
}

module.exports = {getBook, createBook, updateBook, deleteBook};