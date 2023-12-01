"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const booksController_1 = require("./../controllers/booksController");
const BaseRoutes_1 = require("./BaseRoutes");
const authenticate_1 = require("./../middlewares/authenticate");
class BookRoutes extends BaseRoutes_1.BaseRoutes {
    constructor(app) {
        super(app, 'BookRoutes');
    }
    configureRoutes() {
        const bookController = new booksController_1.BooksController();
        this.app.route('/books').get(authenticate_1.authenticateTokenMiddleware, bookController.index);
        this.app.route('/books').post(authenticate_1.authenticateTokenMiddleware, bookController.store);
        this.app.route('/books/:bookId').put(authenticate_1.authenticateTokenMiddleware, bookController.update);
        this.app.route('/books/:bookId').patch(authenticate_1.authenticateTokenMiddleware, bookController.partialUpdate);
        this.app.route('/books/:bookId').delete(authenticate_1.authenticateTokenMiddleware, bookController.destroy);
        return this.app;
    }
}
exports.BookRoutes = BookRoutes;
//# sourceMappingURL=BookRoutes.js.map