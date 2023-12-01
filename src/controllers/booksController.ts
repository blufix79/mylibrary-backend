import { Book } from '../models/book.model';
import express from "express";

export class BooksController {


    async index(req: express.Request, res: express.Response) {
        const books = await Book.findAll();
        res.status(200).json(books);
    }


    async store(req: express.Request, res: express.Response) {
        try {
            const { title, author, ISBN, dateAdd, plot, readingsNumber, userId } = req.body;
            const book = await Book.create({ title, author, ISBN, dateAdd, plot, readingsNumber, userId });
            res.json(book);
        } catch (err) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(req: express.Request, res: express.Response) {
        try {

            const bookId = req.params.bookId;
            const book = await Book.findByPk(bookId);

            const { title, author, ISBN, dateAdd, plot, readingsNumber } = req.body;

            if (book) {
                book.title = title;
                book.author = author;
                book.ISBN = ISBN;
                book.dateAdd = dateAdd;
                book.plot = plot;
                book.readingsNumber = readingsNumber;

                await book.save();
                res.json(book);
            }
            else{
                res.status(404).json({ message: 'Libro non trovato' });
            }


        } catch (err) {
            res.status(500).json({ message: 'Internal server error' });
        }

    }

    async partialUpdate(req: express.Request, res: express.Response){
        try{
            const bookId = req.params.bookId;
            const book = await Book.findByPk(bookId);

            if(book){
                book.readingsNumber = req.body.readingsNumber;
                await book.save();
                res.json(book);
            }
            else{
                res.status(404).json({ message: 'Libro non trovato' });
            }
            
        } catch(err) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async destroy(req: express.Request, res: express.Response) {
        try {
            const bookId = req.params.bookId;
            const book = await Book.findByPk(bookId);
            if (book) {
                await Book.destroy({ where: { id: bookId } });
                res.json({ message: 'Libro eliminato con successo' });
            } else {
                res.status(404).json({ message: 'Libro non trovato' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}