import React from "react";
import Card from "./type_cards/Card";

const Types = () => {
  return (
    <>
      <div className="p-4 flex flex-col items-center">
        <div className="mb-2">
          <button className="bg-blue-900 text-white p-3 rounded-md">
            <div className="bg-white w-12 h-12 m-auto rounded-md">img</div>
            <h2 className="text-sm font-bold">Basemaps</h2>
          </button>
        </div>
        <div className="rounded-md bg-blue-400 p-2">
          <Card title="Base Map" image="img1"></Card>
          <Card title="Streets" image="img2"></Card>
          <Card title="Terrain" image="img3"></Card>
          <Card title="Satellite Imagery" image="img4"></Card>
          <Card title="Aerial" image="img5"></Card>
          <Card title="Topology" image="img6"></Card>
          <Card title="No Basemap" image="img7"></Card>
        </div>
      </div>
    </>
  );
};

export default Types;
