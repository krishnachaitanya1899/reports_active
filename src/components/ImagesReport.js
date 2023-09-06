import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Designer, Viewer } from "@grapecity/activereports-react";
import {
  dataSources,
  images,
} from "./resources";
import { FontStore } from "@grapecity/activereports/core";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/tabulardataexport";

function ImageReport() {
  const [designerVisible, setDesignerVisible] = React.useState(true);
  const viewerRef = React.useRef();
  
  function updateToolbar(){
    var designButton = {
      key: "$openDesigner",
      text: "Edit in Designer",
      iconCssClass: "mdi mdi-pencil",
      enabled: true,
      action: () => {
        setDesignerVisible(true);
      },
    };
    viewerRef.current.toolbar.addItem(designButton);
    viewerRef.current.toolbar.updateLayout({
      default: [
        "$openDesigner",
        "$split",
        "$navigation",
        "$split",
        "$refresh",
        "$split",
        "$history",
        "$split",
        "$zoom",
        "$fullscreen",
        "$split",
        "$print",
        "$split",
        "$singlepagemode",
        "$continuousmode",
        "$galleymode",
      ],
    });
  }
  
  function onReportPreview(report){
    updateToolbar();
    setDesignerVisible(false);
    viewerRef.current.open(report.definition);
    return Promise.resolve();
  }  
    return (
    <Fragment>
    <div id="viewer-host" style={{ display: designerVisible ? "none" : "block" }}>
      <Viewer ref={viewerRef} />
    </div>
    <div id="designer-host" style={{ display: designerVisible ? "block" : "none" }}>
      <Designer report={{id: "/image.json"}} dataSources={dataSources} imageList={images} onRender={onReportPreview}/>
    </div>
    </Fragment>);
}

FontStore.registerFonts("/activereportsjs/demos/resource/fontsConfig.json");
export default ImageReport;
