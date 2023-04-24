"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const base_routes_config_1 = require("./base.routes.config");
const productController_1 = require("../controllers/productController");
class ProductRoutes extends base_routes_config_1.BaseRoutesConfig {
    constructor(app) {
        super(app, 'ProductRoutes');
    }
    configureRoutes() {
        let productHandler = new productController_1.productController();
        this.app.get('/api/product', (req, res) => {
            res.status(200).send('product list');
        });
        this.app.post('/api/product', productHandler.createProduct);
        return this.app;
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product.routes.config.js.map