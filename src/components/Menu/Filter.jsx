import React from "react";

function Filter() {
  return (
    <>
      <div className="flex justify-between items-center px-6 mt-5 lg:px-56">
        <h3 className="font-extrabold text-2xl	">Our Menu</h3>
        <div>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Choose a Food</option>
            <option value="US">Pizza</option>
            <option value="CA">Burger</option>
            <option value="FR">Sushi</option>
          </select>
        </div>
      </div>
      <p className="lg:px-56 px-6 mt-3 font-bold ">Your Search</p>
    </>
  );
}

export default Filter;
