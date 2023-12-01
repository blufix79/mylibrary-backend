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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersContrller = void 0;
const user_model_1 = require("./../models/user.model");
const book_model_1 = require("./../models/book.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersContrller {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_model_1.User.findAll();
            return res.status(200).json(users);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user_model_1.User.beforeCreate((user, options) => __awaiter(this, void 0, void 0, function* () {
                    const saltRounds = 8;
                    user.password = yield bcrypt_1.default.hash(user.password, saltRounds);
                }));
                let user = req.body;
                user = yield user_model_1.User.create(user);
                res.json(user);
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                const user = yield user_model_1.User.findByPk(userId, { include: [book_model_1.Book] });
                res.json(user.books);
            }
            catch (err) {
                res.status(500).json({ message: 'Errore del server' });
            }
        });
    }
}
exports.UsersContrller = UsersContrller;
//# sourceMappingURL=usersController.js.map