import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Tools = () => {
  return (
    <>
      <div>
        <div className="flex bg-blue-500 mt-6 py-2 mx-6 px-6 text-white rounded w-96 justify-between">
          <div className="">
            <div className="bg-blue-900 rounded-full w-12 h-12 flex justify-center m-auto">
              <BiArrowBack></BiArrowBack>
            </div>
            <h2>Elevation</h2>
          </div>
          <div className="">
            <div className="bg-blue-900 rounded-full w-12 h-12 flex justify-center m-auto">
              <BiArrowBack></BiArrowBack>
            </div>
            <h2>Measure</h2>
          </div>
          <div className="">
            <div className="bg-blue-900 rounded-full w-12 h-12 flex justify-center m-auto">
              <BiArrowBack></BiArrowBack>
            </div>
            <h2>Legend</h2>
          </div>
          <div className="">
            <div className="bg-blue-900 rounded-full w-12 h-12 flex justify-center m-auto">
              <BiArrowBack></BiArrowBack>
            </div>
            <h2 className="">Full Extent</h2>
          </div>
          <div className="">
            <div className=" m-auto">
              <div className="bg-blue-900 rounded-full flex justify-center  w-12 h-12 ">
                <BiArrowBack></BiArrowBack>
              </div>
              <h2 className="ml-1">Clear</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
