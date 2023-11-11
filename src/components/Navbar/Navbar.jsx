import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cartSlice";

function Navbar() {
  const length = useSelector(getCart);
  return (
    <>
      <nav className="py-3 px-5 flex justify-between items-center border-b-2 border-stone-100 lg:px-52 fixed top-0 z-10 w-full bg-white ">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-extrabold">
              Smart<span className="text-red-500">POS</span>
            </h2>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <Link to="/favorite">
            <li className="bg-yellow-400 p-4 rounded-full">
              <BsFillBookmarkHeartFill />
            </li>
          </Link>

          <Link to="/card">
            <li className="bg-yellow-400 p-4 rounded-full relative">
              <AiOutlineShoppingCart />
              <div className="absolute bg-red-400 h-7 w-7 flex justify-center items-center rounded-full top-0 right-[-14px]">
                <p>{length.length}</p>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
