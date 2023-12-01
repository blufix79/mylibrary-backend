"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const book_model_1 = require("../models/book.model");
class BooksController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield book_model_1.Book.findAll();
            res.status(200).json(books);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, author, ISBN, dateAdd, plot, readingsNumber, userId } = req.body;
                const book = yield book_model_1.Book.create({ title, author, ISBN, dateAdd, plot, readingsNumber, userId });
                res.json(book);
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = req.params.bookId;
                const book = yield book_model_1.Book.findByPk(bookId);
                const { title, author, ISBN, dateAdd, plot, readingsNumber } = req.body;
                if (book) {
                    book.title = title;
                    book.author = author;
                    book.ISBN = ISBN;
                    book.dateAdd = dateAdd;
                    book.plot = plot;
                    book.readingsNumber = readingsNumber;
                    yield book.save();
                    res.json(book);
                }
                else {
                    res.status(404).json({ message: 'Libro non trovato' });
                }
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    partialUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = req.params.bookId;
                const book = yield book_model_1.Book.findByPk(bookId);
                if (book) {
                    book.readingsNumber = req.body.readingsNumber;
                    yield book.save();
                    res.json(book);
                }
                else {
                    res.status(404).json({ message: 'Libro non trovato' });
                }
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = req.params.bookId;
                const book = yield book_model_1.Book.findByPk(bookId);
                if (book) {
                    yield book_model_1.Book.destroy({ where: { id: bookId } });
                    res.json({ message: 'Libro eliminato con successo' });
                }
                else {
                    res.status(404).json({ message: 'Libro non trovato' });
                }
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.BooksController = BooksController;
//# sourceMappingURL=booksController.js.map