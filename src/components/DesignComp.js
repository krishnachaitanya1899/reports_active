import { Designer } from "@grapecity/activereports-react";
import { useState } from "react";
import { buildReportDefinition, exportReport } from "../services/reportService";

function DesignerComponent() {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
    return  <div id="designer-host">
         <header className="App-header">
        <a
          className="App-link"
          href="."
          onClick={(e) => {
            e.preventDefault();
            const reportDefinition = buildReportDefinition();
            exportReport(reportDefinition)
              .then((result) => {
                result.download("ActiveReportsJSReport");
              })
              .catch(console.error);
          }}
        >
          Generate Report
        </a>
      </header>
    <Designer  report={{Uri:'https://www.grapecity.com/activereportsjs/activereportsjs/demos/resource/reports/CustomersTable.rdlx-json'}} />
  </div>
  }
  
  export default DesignerComponent;