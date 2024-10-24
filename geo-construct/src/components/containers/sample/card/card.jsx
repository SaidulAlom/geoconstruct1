import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="w-2/5 h-60 bg-blue-200">
        <div className="p-4 ">
          <h2>{props.content}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
