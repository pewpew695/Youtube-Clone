import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  console.log(videos);
  return (
    <div className="flex flex-wrap">
      {videos.length === 0 ? (
        <p>Loading Videos...</p>
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCards info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
