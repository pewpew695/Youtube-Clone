import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-56 bg-white shadow-xl rounded-xl min-h-screen flex flex-col gap-6">
      <ul className="space-y-2">
        <Link to="/">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Home">
              🏠
            </span>{" "}
            Home
          </li>
        </Link>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <span role="img" aria-label="Shorts">
            🎬
          </span>{" "}
          Shorts
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <span role="img" aria-label="Videos">
            📺
          </span>{" "}
          Videos
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <span role="img" aria-label="Live">
            🔴
          </span>{" "}
          Live
        </li>
      </ul>
      <hr className="my-2 border-gray-200" />
      <div>
        <h1 className="font-bold text-gray-700 mb-2">Subscriptions</h1>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Music">
              🎵
            </span>{" "}
            Music
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Sports">
              🏆
            </span>{" "}
            Sports
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Gaming">
              🎮
            </span>{" "}
            Gaming
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Movies">
              🎬
            </span>{" "}
            Movies
          </li>
        </ul>
      </div>
      <hr className="my-2 border-gray-200" />
      <div>
        <h1 className="font-bold text-gray-700 mb-2">Watch Later</h1>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Music">
              🎵
            </span>{" "}
            Music
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Sports">
              🏆
            </span>{" "}
            Sports
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Gaming">
              🎮
            </span>{" "}
            Gaming
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <span role="img" aria-label="Movies">
              🎬
            </span>{" "}
            Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
