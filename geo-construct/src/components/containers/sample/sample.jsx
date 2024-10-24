import React from "react";
import Card from "./card/card";

const Sample = () => {
  return (
    <>
      <div className="flex p-4 justify-around">
        <Card content = 'Sample use case-1'></Card>
        <Card content = 'Sample use case-2'></Card>
      </div>
    </>
  );
};

export default Sample;
