"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
const BaseRoutes_1 = require("./BaseRoutes");
const testController_1 = require("../controllers/testController");
class TestRoutes extends BaseRoutes_1.BaseRoutes {
    constructor(app) {
        super(app, 'TestRoutes');
    }
    configureRoutes() {
        const testController = new testController_1.TestController();
        this.app.route('/').get(testController.index);
        return this.app;
    }
}
exports.TestRoutes = TestRoutes;
//# sourceMappingURL=TestRoutes.js.map