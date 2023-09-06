import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/tabulardataexport";
import { FontStore } from "@grapecity/activereports/core";

function ViewerComponent() {
 


  const viewerRef = React.useRef(null);
  function onLoadFromDefinition() {
    fetch("https://www.grapecity.com/activereportsjs/demos/resource/reports/Frontstore.rdlx-json")
      .then((data) => data.json())
      .then((report) => {
        report.Body.Style.BackgroundImage = { Value: "background.svg" };
        viewerRef.current.Viewer.open(report);
      });
  }
  function onLoadFromFile() {
    viewerRef.current.Viewer.open(
      "https://www.grapecity.com/activereportsjs/demos/resource/reports/Frontstore.rdlx-json"
    );
  }
  return (
    <Fragment>
      <div id="viewer-toolbar" class="container-fluid">
        <div class="row mt-3 mb-3">
          <button
            type="button"
            class="btn btn-primary col-sm-2 ml-1"
            onClick={() => onLoadFromFile()}
          >
            Load Original Report
          </button>
          <button
            type="button"
            class="btn btn-secondary col-sm-2 ml-1"
            onClick={() => onLoadFromDefinition()}
          >
            Load Modified Report
          </button>
        </div>
      </div>

      <div id="viewer-host">
        <Viewer ref={viewerRef} />
      </div>
    </Fragment>
  );

}
  
export default ViewerComponent;