"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginRoutes_1 = require("./routes/loginRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const book_model_1 = require("./models/book.model");
const user_model_1 = require("./models/user.model");
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const sequelize_typescript_1 = require("sequelize-typescript");
const cors_1 = __importDefault(require("cors"));
const TestRoutes_1 = require("./routes/TestRoutes");
const BookRoutes_1 = require("./routes/BookRoutes");
const debug_1 = __importDefault(require("debug"));
const logger_1 = require("./middlewares/logger");
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = 3000;
const routes = [];
const debugLog = (0, debug_1.default)('app');
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'mylibrary',
    dialect: 'mysql',
    username: 'mylibrary',
    password: 'Mypass-@'
});
sequelize.addModels([user_model_1.User, book_model_1.Book]);
sequelize.sync();
// here we are adding middlewares
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
app.use(logger_1.loggerMiddleware);
app.use(logger_1.errorLoggerMiddleware);
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new TestRoutes_1.TestRoutes(app));
routes.push(new BookRoutes_1.BookRoutes(app));
routes.push(new userRoutes_1.UserRoutes(app));
routes.push(new loginRoutes_1.LoginRoutes(app));
// this is a simple route to make sure everything is working properly
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});
//# sourceMappingURL=app.js.map