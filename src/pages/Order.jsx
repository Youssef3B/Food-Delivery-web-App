import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotal } from "../store/cartSlice";
import { getOrder2 } from "../services/apiRestaurant";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../store/orderSlice";

function Order() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Position, setPosition] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const Total = useSelector(getTotal);
  const navigate = useNavigate();

  async function handleAddOrder(e) {
    e.preventDefault();
    const newOrder = {
      Name: Name,
      Number: Number,
      Position: Position,
      Order: cart,
      Total: Total,
    };
    await dispatch(addOrder(newOrder));
    const order = await getOrder2();
    const lastItem = order[order.length - 1];
    navigate(`/received/${lastItem.id}`);
  }

  return (
    <div className="mt-24 mx-6 lg:mx-52">
      <h2 className="font-bold text-2xl mb-4">Confirm Your Order</h2>

      <form className="w-full" onSubmit={handleAddOrder}>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Name
          </label>
          <input
            type="text"
            id="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Number"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your NumberPhone
          </label>
          <input
            type="text"
            id="Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="Number"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Position
          </label>
          <input
            type="text"
            id="Number"
            value={Position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Your Position"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-lg">Total : {Total}DH</h1>
        </div>
        <button
          type="submit"
          className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Confirm Your Order
        </button>
      </form>
    </div>
  );
}

export default Order;
