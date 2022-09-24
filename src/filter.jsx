import React from "react";

function Filter() {
  return (
    <>
      <div>
        <select className="border-solid border-2 p-2 text-gray-500">
          <option value="Default sorting">Default sorting </option>
          <option value="sort by popularity">sort by popularity</option>
          <option value="sort by avrage rating">sort by avrage rating</option>
          <option value="short by latest">short by latest </option>
        </select>
      </div>
    </>
  );
}

export default Filter;
