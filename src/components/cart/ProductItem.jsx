import React from "react";
import { useDispatch } from "react-redux";
import {
  DecreassItemQuantity,
  IncreassItemQuantity,
  deleteItem,
} from "../../store/cartSlice";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  function handleIncreass() {
    dispatch(IncreassItemQuantity(item.id));
  }
  function handleDecreass() {
    dispatch(DecreassItemQuantity(item.id));
  }
  function handleDelete() {
    dispatch(deleteItem(item.id));
  }
  return (
    <div className="grid grid-cols-4  items-center gap-2 py-4">
      <div className="w-20">
        <img className="w-full" src={`/images/${item.image}`} alt="" />
      </div>
      <div className="">
        <h4 className=" text-medium font-bold">{item.name}</h4>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={handleDecreass}
            className="bg-yellow-400  w-6 h-6  rounded-full"
          >
            -
          </button>

          <p>{item.quantity}</p>
          <button
            onClick={handleIncreass}
            className="bg-yellow-400 w-6 h-6 rounded-full text-center align-middle"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <h4 className=" text-medium font-bold">Total</h4>

        <h4>{item.totalPrice} Dh</h4>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-1 px-3 rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
