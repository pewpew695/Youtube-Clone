import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_LOGO,
  SEARCH_LOGO,
  SITE_LOGO,
  USER_LOGO,
} from "../utils/Constants";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 gap-3 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="Hamburger Icon"
          src={HAMBURGER_LOGO}
        />
        <img className="h-12" alt="Website Icon" src={SITE_LOGO} />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          className="border border-gray-500 p-2 px-3 rounded-full w-1/3 mx-3"
          type="text"
          placeholder="Search"
        ></input>
        <button>
          <img
            className="h-8 w-8 rounded-full"
            alt="Search Icon"
            src={SEARCH_LOGO}
          />
        </button>
      </div>
      <div className="col-span-1 flex justify-end p-2   ">
        <img className="h-12" alt="User Icon" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
