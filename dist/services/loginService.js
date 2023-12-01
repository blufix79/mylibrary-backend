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
exports.LoginService = void 0;
const user_model_1 = require("./../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginService {
    static login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield user_model_1.User.findOne({ where: { email: user.email } });
                if (!foundUser) {
                    return false;
                }
                const matchUser = bcrypt_1.default.compareSync(user.password, foundUser.password);
                const SECRET_KEY = "my-library-secret";
                if (matchUser) {
                    const token = jsonwebtoken_1.default.sign({ id: foundUser.id.toString(), name: foundUser.id }, SECRET_KEY, {
                        expiresIn: '2 days',
                    });
                    return { user: { id: foundUser.id, name: foundUser.name }, token: token };
                }
                else {
                    return false;
                }
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=loginService.js.map