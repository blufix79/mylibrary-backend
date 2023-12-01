import { LoginRoutes } from './routes/loginRoutes';
import { UserRoutes } from './routes/userRoutes';
import { Book } from './models/book.model';
import { User } from './models/user.model';
import express from 'express';
import * as http from 'http';
import { Sequelize } from "sequelize-typescript";

import cors from 'cors';
import {BaseRoutes} from './routes/BaseRoutes';
import {TestRoutes} from './routes/TestRoutes';
import {BookRoutes} from './routes/BookRoutes';
import debug from 'debug';
import { errorLoggerMiddleware, loggerMiddleware } from './middlewares/logger';
import { json } from 'body-parser';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<BaseRoutes> = [];
const debugLog: debug.IDebugger = debug('app');
const sequelize: Sequelize = new Sequelize({
    database: 'mylibrary',
    dialect: 'mysql',
    username: 'mylibrary',
    password: 'Mypass-@'
})
sequelize.addModels([User,Book]);
sequelize.sync();


// here we are adding middlewares
app.use(json());
app.use(cors());
app.use(loggerMiddleware);
app.use(errorLoggerMiddleware);

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new TestRoutes(app));
routes.push(new BookRoutes(app));
routes.push(new UserRoutes(app));
routes.push(new LoginRoutes(app));

// this is a simple route to make sure everything is working properly
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: BaseRoutes) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});