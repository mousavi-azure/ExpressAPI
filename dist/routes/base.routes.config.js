"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoutesConfig = void 0;
class BaseRoutesConfig {
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.BaseRoutesConfig = BaseRoutesConfig;
