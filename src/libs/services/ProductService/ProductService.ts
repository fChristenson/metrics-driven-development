import { Product } from "./ProductModel";

export class ProductService {
  getProduct(id: string) {
    return Product.findById(id);
  }
  getAllProducts() {
    return Product.find({});
  }
  createProduct(name: string, price: number) {
    return new Product({ name, price }).save();
  }
}
