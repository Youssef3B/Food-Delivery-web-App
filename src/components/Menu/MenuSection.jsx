import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import Menu from "./Menu";

function MenuSection() {
  return (
    <section className="px-5 mt-10">
      <Search />
      <Filter />
      <Menu />
    </section>
  );
}

export default MenuSection;
