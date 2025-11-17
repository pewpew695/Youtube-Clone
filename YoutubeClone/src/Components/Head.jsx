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
    <div className="flex items-center justify-between px-6 py-2 shadow-lg bg-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenuHandler}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
          aria-label="Open menu"
        >
          <img className="h-8 w-8" alt="Hamburger Icon" src={HAMBURGER_LOGO} />
        </button>
        <img className="h-10 w-auto" alt="Website Icon" src={SITE_LOGO} />
      </div>
      <div className="flex-1 flex flex-col items-center w-full">
        <div className="relative w-1/2 flex flex-col items-center">
          <div className="flex items-center w-full">
            <input
              className="border border-gray-300 bg-white p-2 px-4 rounded-l-full w-full h-10 focus:outline-none focus:border-blue-500 transition-all duration-200 text-base"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="bg-gray-100 border border-gray-300 rounded-r-full h-10 px-4 flex items-center justify-center -ml-1 hover:bg-gray-200 transition-colors duration-200">
              <img className="h-5 w-5" alt="Search Icon" src={SEARCH_LOGO} />
            </button>
          </div>
          {/* Suggestions dropdown */}
          {showSuggestions &&
            Array.isArray(suggestions) &&
            suggestions.length > 0 && (
              <div className="absolute left-0 top-full w-full bg-white border border-gray-200 rounded-xl shadow-xl z-10 animate-fade-in">
                <ul className="text-base text-gray-700 divide-y divide-gray-100">
                  {suggestions.map((suggest) => (
                    <li
                      className="p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                      key={suggest}
                    >
                      {suggest}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
          aria-label="User"
        >
          <img
            className="h-10 w-10 rounded-full border border-gray-200"
            alt="User Icon"
            src={USER_LOGO}
          />
        </button>
      </div>
    </div>
  );
};

export default Head;
