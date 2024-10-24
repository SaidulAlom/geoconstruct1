import React from "react";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

const Motive = () => {
  return (
    <div className="bg-green-100">
      <div className="w-11/12 py-4 mx-auto font-bold text-lg">
        <h2 className="text-2xl pb-2">Our Motive Is To:</h2>
        <div className="flex items-start p-2">
          <PiArrowFatLinesRightBold className="text-2xl pt-1" />
          <h2 className="pl-2">
            Provide a proper location and environment for your house.
          </h2>
        </div>
        <div className="flex items-start p-2">
          <PiArrowFatLinesRightBold className="text-2xl pt-1" />
          <h2 className="pl-2">
            Minimize the time and effort in choosing a perfect location.
          </h2>
        </div>
        <div className="flex items-start p-2">
          <PiArrowFatLinesRightBold className="text-2xl pt-1" />
          <h2 className="pl-2">
            Ease in finding locations based on Geographical, Demographical,
            Environmental, and nearby public amenities.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Motive;
