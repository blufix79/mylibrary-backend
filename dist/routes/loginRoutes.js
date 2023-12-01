"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoutes = void 0;
const loginController_1 = require("./../controllers/loginController");
const BaseRoutes_1 = require("./BaseRoutes");
class LoginRoutes extends BaseRoutes_1.BaseRoutes {
    constructor(app) {
        super(app, 'LoginRoutes');
    }
    configureRoutes() {
        const loginController = new loginController_1.LoginController();
        this.app.route('/login').post(loginController.loginOne);
        return this.app;
    }
}
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=loginRoutes.js.map