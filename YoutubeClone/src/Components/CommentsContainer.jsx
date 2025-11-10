import React, { useEffect, useState } from "react";
import { COMMENT_API } from "../utils/Constants";
import { useSearchParams } from "react-router-dom";

const CommentsContainer = () => {
  const [comment, setComment] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadComment();
  }, []);

  const loadComment = async () => {
    const data = await fetch(COMMENT_API + searchParams.get("v"));
    const json = await data.json();
    // console.log(json);
    // const comment = json.items.snippet.topLevelComment.snippet;
    const comment = json.items;
    console.log(comment);
    setComment(comment);
  };

  return comment
    ? comment.map((comment) => {
        const dispComment = comment.snippet.topLevelComment.snippet;
        console.log(dispComment);
        return (
          <div className="py-2 pl-2 m-5 flex bg-gray-200 rounded-lg">
            <div className="p-2 ">
              <img
                className="rounded-full"
                src={dispComment.authorProfileImageUrl}
              />
            </div>
            <div className="pl-2 self-center">
              <p className="font-bold">
                {dispComment.authorDisplayName.slice(1)}
              </p>
              <p>{dispComment.textDisplay}</p>
            </div>
          </div>
        );
      })
    : null;
};

export default CommentsContainer;
