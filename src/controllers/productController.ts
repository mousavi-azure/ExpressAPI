import * as express from 'express';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product_model';

export class productController{

    createProduct = async (request: express.Request, response: express.Response)=>{
        let productServices = new ProductService();
        let product = await productServices.create(<ProductModel>request.body);
        return response.send(product);
    }
} 