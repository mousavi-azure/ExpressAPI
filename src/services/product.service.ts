import { CRUD } from "../interfaces/crud.interface";
import { ProductModel } from "../models/product_model";
import mongooseService from "./mongoose.service";

export class ProductService implements CRUD{

    Schema = mongooseService.getMongoose().Schema;
    productSchema = new this.Schema({
        name: String,
        price: Number
    }, { id: false });

    Product = mongooseService.getMongoose().model('Prodcuts', this.productSchema);

    async deleteById(id: string) {
        return 'null';
    }

    async create(resource: ProductModel) {
        const product = new this.Product({
            ...resource,
        });
        await product.save();
        return resource;
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