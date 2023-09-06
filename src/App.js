import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Viewer } from '@grapecity/activereports-react';
import ViewerComponent from './components/ViewComp';
import Home from './components/Home';
import DesignerComponent from './components/DesignComp';
import DemoView from './components/demoView';
import ReportViewerComponent from './components/reportview';
import SaveDesign from './components/SaveDesign';
// import TableReport from './components/TableReport';
import ImageReport from './components/ImagesReport';
import RealData from './components/RealData';

function App() {
  return (
    <Router>
        {/* Navigation or Header */}
        
        {/* Define routes */}
        <Routes>
        <Route path="/" element={<Home></Home>} />
          <Route path="/viewer" element={<ViewerComponent></ViewerComponent>} />
          <Route path="/design" element={<DesignerComponent></DesignerComponent>} />
          <Route path="/realData" element={<RealData></RealData>} />
          <Route path="/demoView" element={<DemoView></DemoView>} />
          <Route path="/reports" element={<ReportViewerComponent/>} />
          <Route path="/saveDesign" element={<SaveDesign/>} />
          {/* <Route path="/apiData" element={<TableReport/>} /> */}
          <Route path="/ImageReport" element={<ImageReport/>} />
        </Routes>
        
        {/* Footer */}
    </Router>
  );
}

export default App;




// import React from "react";
// import ReactDOM from "react-dom";
// import "@grapecity/activereports/styles/ar-js-ui.css";
// import "@grapecity/activereports/styles/ar-js-viewer.css";
// import { Viewer } from "@grapecity/activereports-react";
// import "@grapecity/activereports/pdfexport";
// import "@grapecity/activereports/htmlexport";
// import "@grapecity/activereports/tabulardataexport";
// import { FontStore } from "@grapecity/activereports/core";
// import reportsDemo from './templates/customerTemplate.json'

// async function loadData() {
//   // Use the Fetch Api to pull the data https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//   const headers = new Headers();

//   const dataRequest = new Request(
//     // "https://demodata.grapecity.com/northwind/api/v1/Customers",
//     "http://localhost:3001/products",
//     {
//       headers: headers,
//     }
//   );

//   const response = await fetch(dataRequest);
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// async function loadReport() {
//   // load report definition from the file
//   const reportResponse = reportsDemo;
//   console.log(typeof(reportResponse))
//   // const report = await reportResponse.json();
//   return reportResponse;
// }

// function App() {
//   const viewerRef = React.useRef();
//   React.useEffect(() => {
//     async function openReport() {
//       const data = await loadData();
//       const report = await loadReport();
//       report.DataSources[0].ConnectionProperties.ConnectString =
//         "jsondata=" + JSON.stringify(data);
//       viewerRef.current.Viewer.open(report);
//     }
//     openReport();
//   }, []);
//   return (
//     <div id="viewer-host">
//       <Viewer ref={viewerRef} />
//     </div>
//   );
// }

// // FontStore.registerFonts("https://www.grapecity.com/activereportsjs/demos/resource/fontsConfig.json");
// export default App;
// // ReactDOM.render(<App />, document.getElementById("root"));
