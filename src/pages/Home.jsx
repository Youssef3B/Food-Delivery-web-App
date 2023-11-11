import React from "react";
import Menu from "../components/Menu/Menu";
import Search from "../components/Menu/Search";
import Filter from "../components/Menu/Filter";
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";

function Home() {
  const menu = useLoaderData();

  return (
    <div className="mt-24">
      <Search />
      <Filter />
      <Menu menu={menu} />
    </div>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Home;
