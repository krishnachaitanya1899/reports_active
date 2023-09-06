import React from 'react';
import ReactDOM from "react-dom";
import "@grapecity/activereports/styles/ar-js-ui.css";
import "@grapecity/activereports/styles/ar-js-viewer.css";
import { Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/tabulardataexport";
import { FontStore } from "@grapecity/activereports/core";
import jsonData from '../components/realDataTemplate.json'

async function loadData() {
  // Use the Fetch Api to pull the data https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const headers = new Headers();

  const dataRequest = new Request(
    "https://demodata.grapecity.com/northwind/api/v1/Customers",
    {
      headers: headers,
    }
  );

  const response = jsonData;
  const data = response.json();
  return data;
}

async function loadReport() {
  // load report definition from the file
  const reportResponse = await fetch(
    "/activereportsjs/demos/resource/reports/CustomersTable.rdlx-json"
  );
  const report = await reportResponse.json();
  return report;
}

function RealData() {
  const viewerRef = React.useRef();
  React.useEffect(() => {
    async function openReport() {
      const data = await loadData();
      const report = await loadReport();
      report.DataSources[0].ConnectionProperties.ConnectString =
        "jsondata=" + JSON.stringify(data);
      viewerRef.current.Viewer.open(report);
    }
    openReport();
  }, []);
  return (
    <div id="viewer-host">
      <Viewer ref={viewerRef} />
    </div>
  );
}

FontStore.registerFonts("/activereportsjs/demos/resource/fontsConfig.json");
export default RealData;
