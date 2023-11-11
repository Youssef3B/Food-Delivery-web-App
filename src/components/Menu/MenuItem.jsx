import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getCurrentQuantityById,
} from "../../store/cartSlice";
import { addFavorite, deleteFavorite } from "../../store/favoriteSlice";

function MenuItem({ menu }) {
  const [isFavorite, setIsFavorite] = useState(null);

  const favorite = useSelector((state) => state.favorites);
  useEffect(
    function () {
      favorite.map((item) => {
        if (item.idMenu === menu.id) {
          setIsFavorite(true);
        }
      });
    },
    [favorite, menu.id]
  );

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(menu.id));
  const isInCart = currentQuantity > 0;
  function handleDeleteFavorite() {
    favorite.map((item) => {
      if (item.idMenu === menu.id) {
        dispatch(deleteFavorite(item.id));
        setIsFavorite(null);
      }
    });
  }
  function handleAddToCart() {
    const newItem = {
      id: menu.id,
      image: menu.image,
      name: menu.name,
      quantity: 1,
      unitPrice: menu.unitPrice,
      totalPrice: menu.unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  function handleDeleteItem() {
    dispatch(deleteItem(menu.id));
  }
  function handleAddToFavorite() {
    const newItem = {
      idMenu: menu.id,
      name: menu.name,
      unitPrice: menu.unitPrice,
      image: menu.image,
      ingredients: menu.ingredients,
      isFavorite: isFavorite,
    };

    dispatch(addFavorite(newItem));
  }
  return (
    <div className=" text-center shadow-lg rounded-3xl relative">
      <img
        className="rounded-t-3xl p-0 h-60 w-full object-cover object-center"
        src={`/images/${menu.image}`} // Update the image path
        alt={menu.name} // Provide an alt attribute for accessibility
      />
      <h3 className="py-2 text-3xl font-bold">{menu.name}</h3>
      <h2 className="py-3 text-4xl text-yellow-400 font-bold">
        {menu.unitPrice}DH
      </h2>
      {!isInCart ? (
        <button
          onClick={handleAddToCart}
          type="button"
          className="text-gray-900 rounded-full bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        >
          Add Cart
        </button>
      ) : (
        <button
          onClick={handleDeleteItem}
          className="text-white rounded-full bg-red-500  hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          Delete
        </button>
      )}
      {isFavorite === null ? (
        <div
          onClick={handleAddToFavorite}
          className="w-10 h-10 flex justify-center items-center rounded-full  bg-slate-100  absolute top-2 right-4 cursor-pointer"
        >
          <AiOutlineHeart />
        </div>
      ) : (
        <div
          onClick={handleDeleteFavorite}
          className="w-10 h-10 flex justify-center items-center rounded-full  bg-yellow-400  absolute top-2 right-4 cursor-pointer"
        >
          <AiOutlineHeart />
        </div>
      )}
    </div>
  );
}

export default MenuItem;
