import { IProductservice } from "./IProductService";
import { Product } from "./product";
import { SimpleDataSource } from "./SimpleDataSource";

class ProductService implements IProductservice {
  private dataSource: SimpleDataSource;
  private products: Array<Product>;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = Array<Product>();
    this.dataSource.getProducts().forEach((p) => this.products.push(p));
  }

  getById(id: number): Product {
    return this.products.filter((p) => p.id === id)[0];
  }
  getProducts(): Product[] {
    return this.products;
  }
  saveProduct(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateId();
    }
  }
  deleteproduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  private generateId(): number {
    let key = 1;

    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
}
