import { BooksController } from './../controllers/booksController';
import {BaseRoutes} from './BaseRoutes';
import express from 'express';
import { authenticateTokenMiddleware } from "./../middlewares/authenticate";

export class BookRoutes extends BaseRoutes {
    constructor(app: express.Application) {
        super(app, 'BookRoutes');
    }

    configureRoutes() {
        const bookController = new BooksController();

        this.app.route('/books').get(authenticateTokenMiddleware,bookController.index);
        this.app.route('/books').post(authenticateTokenMiddleware,bookController.store);
        this.app.route('/books/:bookId').put(authenticateTokenMiddleware,bookController.update);
        this.app.route('/books/:bookId').patch(authenticateTokenMiddleware,bookController.partialUpdate);
        this.app.route('/books/:bookId').delete(authenticateTokenMiddleware,bookController.destroy);
        

        return this.app;
    }
}