import React, { useEffect } from "react";
import {
  Report,
  DataSet,
  Table,
  TableColumn,
  Viewer,
} from "@grapecity/activereports-react";

function ReportComponent() {
  useEffect(() => {
    // Define the report
    const report = new Report();

    // Define a data source
    const dataSource = {
      name: "MyApiDataSource",
      type: "json",
      connectionProperties: {
        jsonUrl: "https://api.example.com/data", // Replace with your API URL
      },
    };

    // Register the data source with the report
    report.registerDataSource(dataSource);

    // Define a data set
    const dataSet = new DataSet();
    dataSet.name = "MyDataSet";
    dataSet.dataSourceName = "MyApiDataSource"; // Name of the data source
    dataSet.query = ""; // No specific query needed for API data

    // Add data set to the report
    report.dataSources.add(dataSet);

    // Create a table to display the data
    const table = new Table();
    table.dataSetName = "MyDataSet"; // Name of your data set

    // Define table columns based on the JSON data structure
    table.columns.add(new TableColumn("field1"));
    table.columns.add(new TableColumn("field2"));
    // Add more columns as needed

    // Add the table to the report's body
    report.body.addItem(table);

    // Render the report in the viewer
    const viewer = new Viewer({
      element: document.getElementById("viewer-container"),
    });
    viewer.openReport(report);
  }, []);

  return (
    <div>
      <div id="viewer-container"></div>
    </div>
  );
}

export default ReportComponent;
