"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            _id: String,
            name: String,
            price: Number
        }, { id: false });
        this.Product = mongoose_service_1.default.getMongoose().model('Prodcuts', this.productSchema);
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'null';
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new this.Product(Object.assign({}, resource));
            yield product.save();
            return product;
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.ProductService = ProductService;
