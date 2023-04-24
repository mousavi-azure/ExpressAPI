import { BaseRoutesConfig } from './base.routes.config';
import express from 'express';
import {productController} from '../controllers/productController';


export class ProductRoutes extends BaseRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductRoutes');
    }

    configureRoutes() {
        let productHandler = new productController();

        this.app.get('/api/product', (req: express.Request, res: express.Response) => {
            res.status(200).send('product list')
        });

        this.app.post('/api/product', productHandler.createProduct);

        return this.app;
    }
}
