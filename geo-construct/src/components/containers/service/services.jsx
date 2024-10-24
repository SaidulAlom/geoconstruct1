import React from "react";
import Card from "./card/card"; // Adjust the import path as necessary

const Services = () => {
  return (
    <div className="bg-blue-200 p-4">
      <div className="flex justify-center">
        <span className="font-bold text-xl pb-6">INSIGHTS</span>
      </div>
      <div className="flex justify-between w-full mx-auto">
        <Card title="Demographical" />
        <Card title="Environmental" />
        <Card title="Geographical" />
        <Card title="Public Amenities" />
      </div>
    </div>
  );
};

export default Services;
