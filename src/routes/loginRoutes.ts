import { LoginController } from './../controllers/loginController';
import { Application } from "express";
import { BaseRoutes } from "./BaseRoutes";

export class LoginRoutes extends BaseRoutes {
    constructor(app: Application) {
        super(app, 'LoginRoutes');
    }

    configureRoutes(): Application {
        
        const loginController = new LoginController();

        this.app.route('/login').post(loginController.loginOne);


        return this.app;

    }
    
}