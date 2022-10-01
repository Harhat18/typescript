import { Product } from "./product";

export interface IProductservice {
  getById(id: number): Product;
  getProducts(): Array<Product>;
  saveProduct(product: Product): void;
  deleteproduct(product: Product): void;
}
