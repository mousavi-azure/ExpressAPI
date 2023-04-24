"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const mongoose_service_1 = __importDefault(require("./mongoose.service"));
class ProductService {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.productSchema = new this.Schema({
            name: String,
            price: Number
        }, { id: false });
        this.Product = mongoose_service_1.default.getMongoose().model('Prodcuts', this.productSchema);
    }
    async deleteById(id) {
        return 'null';
    }
    async create(resource) {
        const product = new this.Product(Object.assign({}, resource));
        await product.save();
        return resource;
    }
    async list(limit, page) {
        return null;
    }
    async patchById(id, resource) {
        return null;
    }
    async putById(id, resource) {
        return null;
    }
    async getById(id) {
        return null;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map