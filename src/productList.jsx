import React, { useEffect, useState } from "react";
import Product from "./product";
import Filter from "./filter";
import { productList } from "./api";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    productList().then((p) => {
      setProducts(p);
      setFilteredProducts(p);
    });
  }, []); // eslint-disable-line

  useEffect(() => {
    const newproducts = products.filter((item) => {
      return item?.title.toLowerCase().includes(query);
    });
    setFilteredProducts(newproducts);
  }, [query]); // eslint-disable-line

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <div className="bg-gray-100 overflow-y-scroll">
        <div className="md:mx-32 mx-4 my-10 md:p-10 p-2 bg-white">
          <div className="flex  justify-end pr-10 pb-5 ">
            <input
              type="text"
              placeholder="search items"
              className="border border-solid border-gray-300 px-2 mx-5 rounded"
              onChange={handleChange}
            />
            <Filter />
          </div>
          <div className=" min-w-min grid grid-cols-1 gap-3 md:grid-cols-3 justify-evenly">
            {products &&
              filteredProducts.map((item) => (
                <Product
                  key={item.title}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  type={item.category}
                  price={item.price}
                  id={item.id}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
