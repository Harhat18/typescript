"use strict";
exports.__esModule = true;
var Productservice_1 = require("./Productservice");
var _productService = new Productservice_1.ProductService();
var result;
result = _productService.getProducts();
console.log(result);
