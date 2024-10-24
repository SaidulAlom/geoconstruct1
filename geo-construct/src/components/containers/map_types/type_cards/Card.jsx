import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="">
        <div className="flex w-56 mx-3 my-1 bg-blue-200 rounded">
          <div className="bg-white ml-2 p-2 rounded-lg w-12 h-12">{props.image}</div>
          <h2 className="my-auto pl-2">{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
