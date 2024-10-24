import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Details from "../../components/containers/map_details/details";
import Tools from "../../components/containers/map_tools/tools";
import Types from "../../components/containers/map_types/Types";
import AssamMap from "../../components/containers/map_content/content";

const Map = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="flex justify-around">
          <Details></Details>
          <div className="">
            <Tools></Tools>
            <AssamMap></AssamMap>
          </div>
          <Types></Types>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Map;
