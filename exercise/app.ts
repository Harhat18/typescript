import { ProductService } from "./Productservice";

let _productService = new ProductService();

let result;

result = _productService.getProducts();

console.log(result);
