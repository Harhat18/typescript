import { IProductservice } from "./IProductService";
import { Product } from "./product";

class ProductService implements IProductservice {
  getById(id: number): Product {
    throw new Error("Method not implemented.");
  }
  getProducts(): Product[] {
    throw new Error("Method not implemented.");
  }
  saveProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  deleteproduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
}
