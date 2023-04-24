import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { BaseRoutesConfig } from './routes/base.routes.config';
import { ProductRoutes } from './routes/product.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<BaseRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

routes.push(new ProductRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/api', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

routes.push(new ProductRoutes(app));
server.listen(port, () => {
    routes.forEach((route: BaseRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});

// npm start
// tsc --init