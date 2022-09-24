import React from "react";
import { Link } from "react-router-dom";

function Product({ title, type, price, thumbnail, id, description }) {
  return (
    <>
      <div className="pb-10 border border-solid border-gray-200 p-2">
        <div className=" w-full aspect-square overflow-hidden ">
          <img className=" w-full h-full object-cover" src={thumbnail} />
        </div>
        <div className="text-gray-400 pt-1">{title}</div>
        <div className="font-semibold text-base">{type}</div>

        <button className="star text-red-300">&#9734;</button>
        <button className="star text-red-300">&#9734;</button>
        <button className="star text-red-300">&#9734;</button>
        <button className="star text-red-300">&#9734;</button>
        <button className="star text-red-300">&#9734;</button>

        <div className="font-semibold text-sm">${price}</div>
        <Link to={`/product/${id}`}>
          <button className=" bg-black text-white px-4 py-2 rounded-md my-2">
            view details
          </button>
        </Link>
      </div>
    </>
  );
}
export default Product;
