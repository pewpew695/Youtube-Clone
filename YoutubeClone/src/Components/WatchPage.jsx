import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  //   console.log(searchParams);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-2 m-2 w-full lg:w-[70%]">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      <div className="w-full lg:w-[30%] p-2 m-2">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
