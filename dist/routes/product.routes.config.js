"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const base_routes_config_1 = require("./base.routes.config");
class ProductRoutes extends base_routes_config_1.BaseRoutesConfig {
    constructor(app) {
        super(app, 'ProductRoutes');
    }
    configureRoutes() {
        this.app.get('/product/', (req, res) => {
            res.status(200).send('test product');
        });
        return this.app;
    }
}
exports.ProductRoutes = ProductRoutes;
