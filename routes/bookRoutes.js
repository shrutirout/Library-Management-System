const router = require('express').Router();
const { get } = require('mongoose');
const Book = require('../models/boodModel');
const {getBook, createBook, updateBook, deleteBook} = require('../controllers/bookController')

router.get('/',getBook);
router.post('/',createBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

module.exports = router;