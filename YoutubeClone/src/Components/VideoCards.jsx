import React from "react";

const VideoCards = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  //   console.log(channelTitle, title, thumbnails, statistics);
  return (
    <div className="m-2 p-4 w-96 shadow-lg items-center">
      <img
        className="rounded-lg w-full"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <div className="text-gray-600">
          <li>{channelTitle}</li>
          <li>{statistics.viewCount + " views"}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCards;
