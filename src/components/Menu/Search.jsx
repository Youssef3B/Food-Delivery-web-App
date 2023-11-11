import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <div className="lg:px-48 w-full">
      <div className="relative">
        <input
          className="bg-slate-100 w-full py-2 px-8 rounded-full text-lg focus:outline-none focus:outline-1 focus:outline-yellow-200 "
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
        <span className="absolute right-[8px] top-[12px]">
          <AiOutlineSearch size={22} />
        </span>
      </div>
    </div>
  );
}

export default Search;
