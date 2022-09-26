import React from "react";

function Filter() {
  return (
    <>
      <div>
        <select className="border-solid border-2 p-2 text-gray-500">
          <option value="Default sorting">Default sorting </option>
          <option value="sort by popularity">sort by popularity</option>
          <option value="sort by avrage rating">sort by average rating</option>
          <option value="sort by latest">sort by latest </option>
        </select>
      </div>
    </>
  );
}

export default Filter;
