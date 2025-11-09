import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Somgs",
    "Live",
    "Football",
    "Cricket",
    "Cooking",
  ];
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonList;
