import React, { useEffect } from "react";
import Image1 from "../../../public/images/beef burger.jpg";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../store/favoriteSlice";
import {
  addItem,
  deleteItem,
  getCurrentQuantityById,
} from "../../store/cartSlice";

function FavoriteItem({ item }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteFavorite(item.id));
  }
  function handleAddToCart() {
    const newItem = {
      id: item.idMenu,
      image: item.image,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
      totalPrice: item.unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  function handleDeleteFromCart() {
    dispatch(deleteItem(item.idMenu));
  }
  const currentQuantity = useSelector(getCurrentQuantityById(item.idMenu));
  const isInCart = currentQuantity > 0;
  return (
    <div className="flex items-center gap-5  rounded-lg p-1 shadow-md mt-3 relative">
      <div className="w-52 rounded-lg">
        <img
          className="rounded-lg"
          src={`/images/${item.image}`} // Update the image path
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold text-xl mb-2">{item.name}</h2>
        <ul className="flex flex-wrap space-x-3   items-center mb-2">
          {item.ingredients.map((i) => (
            <li key={i} className="italic font-semibold text-stone-500">
              {i}
            </li>
          ))}
        </ul>
        <h3 className="italic font-semibold mb-2">Categories : Burger</h3>
        <h1 className="text-2xl text-center font-bold text-yellow-400">
          {item.unitPrice} Dh
        </h1>
        <div className="mx-auto text-center">
          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              type="button"
              className="text-gray-900 rounded-full bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium  text-sm px-5 py-2.5  inline-flex items-center mt-2   "
            >
              Add Cart
            </button>
          ) : (
            <button
              onClick={handleDeleteFromCart}
              type="button"
              className="text-white rounded-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium  text-sm px-5 py-2.5  inline-flex items-center mt-2   "
            >
              DeleteCart
            </button>
          )}
        </div>
      </div>
      <div
        onClick={handleDelete}
        className="w-10 h-10 flex justify-center items-center rounded-full  bg-slate-100  absolute top-2 right-2 cursor-pointer"
      >
        <CiCircleRemove />
      </div>
    </div>
  );
}

export default FavoriteItem;
