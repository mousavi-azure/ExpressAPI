import { BaseRoutesConfig } from './base.routes.config';
import express from 'express';

export class ProductRoutes extends BaseRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductRoutes');
    }

    configureRoutes() {
        this.app.get('/product/', (req: express.Request, res: express.Response) => {
            res.status(200).send('test product')
        });
        return this.app;
    }
}
