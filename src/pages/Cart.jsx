import React from "react";
import ProductItem from "../components/cart/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAllCard, getCart, getTotal } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector(getCart);
  const Total = useSelector(getTotal);
  const dispatch = useDispatch();
  function DeleteAllCards() {
    dispatch(DeleteAllCard());
  }
  return (
    <div className="mt-28 lg:mx-52 xl:mx-72">
      {cart.length === 0 ? (
        <h1 className="mx-5 font-bold text-2xl">Your Cart Is Empty</h1>
      ) : (
        <h1 className="mx-5 font-bold text-2xl">Your Orders</h1>
      )}
      <Link to="/">
        <h2 className="mx-5 font-semibold mt-3 text-red-400">
          Go Back to The Menu &#8592;
        </h2>
      </Link>
      <div className="p-4 divide-y divide-gray-200  my-7">
        {cart.map((item) => (
          <ProductItem item={item} />
        ))}
        <div className="text-right">
          {cart.length === 0 ? (
            ""
          ) : (
            <button
              onClick={DeleteAllCards}
              className="text-white bg-red-500  hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2 mt-3"
            >
              Delete All
            </button>
          )}
        </div>
      </div>
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="mx-8">
          <h2 className="font-bold text-2xl">Total: {Total}Dh</h2>
          <Link to="/order">
            <button
              type="button"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 mt-3"
            >
              Place Order
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
