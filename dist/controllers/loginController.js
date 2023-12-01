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
exports.LoginController = void 0;
const loginService_1 = require("./../services/loginService");
class LoginController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    loginOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const foundUser = yield loginService_1.LoginService.login(user);
                if (!foundUser) {
                    res.status(401).send('Unauthorized');
                }
                res.status(200).json(foundUser);
            }
            catch (err) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=loginController.js.map