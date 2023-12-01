import { authenticateTokenMiddleware } from './../middlewares/authenticate';
import { UsersContrller } from './../controllers/usersController';
import { Application } from "express";
import { BaseRoutes } from "./BaseRoutes";

export class UserRoutes extends BaseRoutes {

    constructor(app: Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): Application {

        const usersController = new UsersContrller();

        this.app.route('/users').get(usersController.index);
        this.app.route('/users').post(usersController.store);
        this.app.route('/users/:userId/books').get(usersController.show);
        
        return this.app;

    }
    
}