"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const usersController_1 = require("./../controllers/usersController");
const BaseRoutes_1 = require("./BaseRoutes");
class UserRoutes extends BaseRoutes_1.BaseRoutes {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        const usersController = new usersController_1.UsersContrller();
        this.app.route('/users').get(usersController.index);
        this.app.route('/users').post(usersController.store);
        this.app.route('/users/:userId/books').get(usersController.show);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=userRoutes.js.map