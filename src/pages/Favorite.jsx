import React from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";
import { Link, useLoaderData } from "react-router-dom";
import { getFavorite } from "../services/apiFavorite";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFavorite } from "../store/favoriteSlice";

function Favorite() {
  const favorite = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function handleDeleteAll() {
    dispatch(deleteAllFavorite());
  }

  return (
    <div className="mt-28 mx-7 lg:mx-52 xl:mx-72">
      <Link to="/">
        <h3 className="font-semibold text-lg text-red-500">
          Go Back to The Menu
        </h3>
      </Link>
      {favorite.length === 0 ? (
        <h4 className="my-3 text-center font-bold text-xl">
          You don't have any favorite food on your list. :(
        </h4>
      ) : (
        ""
      )}{" "}
      <div className="">
        {favorite.map((item) => (
          <FavoriteItem item={item} key={item.id} />
        ))}
      </div>
      <div className="text-right">
        <button
          onClick={handleDeleteAll}
          className="bg-red-500 text-white mt-6 px-2 py-2 rounded-lg cursor-pointer hover:bg-red-600"
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
export async function loader() {
  const Favorite = await getFavorite();
  return Favorite;
}
export default Favorite;
