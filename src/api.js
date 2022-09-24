import axios from "axios";
import { Result } from "postcss";

// "https://dummyjson.com/products"

export function productList() {
  return axios.get("https://dummyjson.com/products").then((result) => {
    console.log(result);

    return result.data.products;
  });
}
export function singleProduct(id) {
  return axios.get(`https://dummyjson.com/products/${id}`).then((result) => {
    //console.log(result);

    return result.data;
  });
}
