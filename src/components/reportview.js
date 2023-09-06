import React, { useEffect, useRef } from 'react';
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import {ReportViewer}  from '@grapecity/activereports';

export default function ReportViewerComponent(){
  const reportViewerRef = useRef(null);

  useEffect(() => {
    const reportDefinition = {
      "report": {
        "dataSources": {
          "customers": {
            "data": [
              { "name": "John Doe", "email": "john@example.com" },
              { "name": "Jane Smith", "email": "jane@example.com" },
              { "name": "Alice Johnson", "email": "alice@example.com" }
            ]
          }
        },
        "body": {
          "reportItems": [
            {
              "type": "textbox",
              "name": "txtName",
              "value": "=Fields.name",
              "left": "0.5in",
              "top": "0.5in",
              "width": "2in"
            },
            {
              "type": "textbox",
              "name": "txtEmail",
              "value": "=Fields.email",
              "left": "3in",
              "top": "0.5in",
              "width": "3in"
            }
          ]
        }
      }
    };

    if (reportViewerRef.current) {
      reportViewerRef.current.loadDocument(reportDefinition);
    }
  }, []);

  return <div>
      <h2>Customer Report</h2>
     {/* <ReportViewer ref={reportViewerRef} style={{ width: '100%', height: '600px' }} /> */}
    </div>
};




