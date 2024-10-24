import React from "react";
import Card from "./cards/card";
import "./clients.css"

const Clients = () => {
  return (
    <>
      <div className="py-6 bg-blue-300">
        <div className="pb-4 w-11/12 mx-auto font-bold text-xl text-center">Our Clients</div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4">
          <Card logo="image1"></Card>
          <Card logo="image2"></Card>
          <Card logo="image3"></Card>
          <Card logo="image4"></Card>
          <Card logo="image5"></Card>
        </div>
      </div>
    </>
  );
};

export default Clients;
