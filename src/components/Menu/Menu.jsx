import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import Search from "./Search";

function Menu({ menu }) {
  const searchTerm = useSelector((state) => state.search);

  const results = !searchTerm
    ? menu
    : menu.filter((menu) =>
        menu.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  return (
    <>
      <section className="px-6 py-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-52 	">
        {/* {menu.map((item) => (
          <MenuItem menu={item} key={item.id} />
        ))} */}
        {results.map((item) => (
          <MenuItem menu={item} key={item.id} />
        ))}
      </section>
    </>
  );
}

export default Menu;
