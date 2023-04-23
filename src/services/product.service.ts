import { CRUD } from "../interfaces/crud.interface";
import { CreateProductModel } from "../models/product/create_product_model";
import mongooseService from "./mongoose.service";

export class ProductService implements CRUD{

    Schema = mongooseService.getMongoose().Schema;
    productSchema = new this.Schema({
        _id: String,
        name: String,
        price: Number
    }, { id: false });

    Product = mongooseService.getMongoose().model('Prodcuts', this.productSchema);

    async deleteById(id: string) {
        return 'null';
    }

    async create(resource: CreateProductModel) {
        const product = new this.Product({
            ...resource,
        });
        await product.save();
        return product;
    }

    async list(limit: number, page: number) {
        return null;
    }

    async patchById(id: string, resource: any): Promise<any> {
        return null;
    }

    async putById(id: string, resource: any): Promise<any> {
        return null;
    }

    async getById(id: string) {
        return null;
    }

}