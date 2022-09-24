import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleProduct } from "./api";

function ProductDetail() {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    singleProduct(id).then((p) => {
      setProduct(p);
    });
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className=" flex ">
          <div className="">
            <img className="  p-5 " src={product?.images?.[0]} />
          </div>

          <div className="max-w-xs p-5">
            <div>
              <h2 className="text-xl text-black">{product?.title}</h2>

              <h3 className="font-extrabold mt-2 "> ${product?.price}</h3>

              <p className="text-gray-500 mt-2">{product?.description}</p>
            </div>
            <div className="mb-5 mt-2">
              <label for="quantity">quantity:</label>
              <select name="quantity" size="number" id="quantity">
                <optgroup label="max-quantity">
                  <option value="number">1</option>
                  <option value="number">2</option>
                  <option value="number">3</option>
                  <option value="number">4</option>
                  <option value="number">5</option>
                  <option value="number">6</option>
                </optgroup>
              </select>

              <button className="bg-red-500 py-2 text-white px-5 rounded mx-5">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-300" />
      </div>
    </>
  );
}
export default ProductDetail;
