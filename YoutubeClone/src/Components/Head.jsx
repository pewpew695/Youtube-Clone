import React, { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_LOGO,
  SEARCH_LOGO,
  SEARCH_SUGGESTIONS_API,
  SITE_LOGO,
  USER_LOGO,
} from "../utils/Constants";
import { cacheResults } from "../utils/suggestionSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.suggestion);

  useEffect(() => {
    // console.log(searchQuery);

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
      <div className="col-span-10 flex flex-col relative">
        {/* Search bar */}
        <div className="flex items-center">
          <input
            className="border border-gray-400 p-2 px-4 rounded-full w-1/3 mx-3 focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="p-2">
            <img className="h-6 w-6" alt="Search Icon" src={SEARCH_LOGO} />
          </button>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions &&
          Array.isArray(suggestions) &&
          suggestions.length > 0 && (
            <div className="absolute top-12 left-3 bg-white border border-gray-300 rounded-lg w-1/3 shadow-lg z-10">
              <ul className="text-sm text-gray-700">
                {suggestions.map((suggest) => (
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    key={suggest}
                  >
                    {suggest}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      <div className="col-span-1 flex justify-end p-2   ">
        <img className="h-12" alt="User Icon" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
