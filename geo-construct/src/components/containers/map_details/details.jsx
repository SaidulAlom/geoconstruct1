import React from "react";
import { FaPlus } from "react-icons/fa";

const Details = () => {
  return (
    <>
      <div className="w-72 p-6">
        <form className="bg-blue-900 h-96 rounded">
          <div className="flex text-white justify-between px-3 py-2">
            <h2 className="font-bold">Map Details </h2>
            <div className="pt-1"><FaPlus></FaPlus></div>
          </div>
          <div className="p-3">
            <select id="table_of_contents" name="table_of_contents" className="rounded h-8 w-48">
              <option value="delhi">Table of Contents</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
          </div>
          <div className="p-3">
            <select id="area_of_interest" name="area_of_contents" className="rounded h-8 w-48">
              <option value="area_of_interest">Area of Interest</option>
              <option value=""></option>
            </select>
          </div>
          <div className="p-3">
            <select id="" name="" className="rounded h-8 w-48">
              <option value="">Geocode Locator</option>
              <option value="">Area of Interest</option>
            </select>
          </div>
          <div className="p-3">
            <select id="" name="" className="rounded h-8 w-48">
              <option value="">CSV File Viewer</option>
              <option value="">Area of Interest</option>
            </select>
          </div>
          <div className="p-3">
            <select id="" name="" className="rounded h-8 w-48">
              <option value="">Swipe Tool</option>
              <option value="">Area of Interest</option>
            </select>
          </div>
          <div className="p-3">
            <select id="" name="" className="rounded h-8 w-48">
              <option value="">Bookmark</option>
              <option value="">Area of Interest</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default Details;
