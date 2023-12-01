"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoutes = void 0;
class BaseRoutes {
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.BaseRoutes = BaseRoutes;
//# sourceMappingURL=BaseRoutes.js.map