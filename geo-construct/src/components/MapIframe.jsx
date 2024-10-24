import React from "react";

const MapIframe = () => {
  return (
    <>
      <iframe
        src="/exported_map1/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      />
      <iframe
        src="/exported_map2/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      />
      <iframe
        src="/exported_map3/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      />
      <iframe
        src="/exported_map4/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      />
      <iframe
        src="/exported_map5/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      />
      {/* <iframe
        src="/exported_map6/index.html" // Points to the index.html of the QGIS export
        style={{ width: "100%", height: "600px", border: "none" }}
        title="QGIS Exported Map"
      /> */}
    
    </>
  );
};

export default MapIframe;
