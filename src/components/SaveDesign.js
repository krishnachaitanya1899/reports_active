import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {Designer} from "@grapecity/activereports-react"
import { saveAs } from "file-saver"; // Import the file-saver library


export default function SaveDesign() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportPromise, setReportPromise] = useState(null);
  const counter = React.useRef(0);
  const [reportStorage, setReportStorage] = React.useState(new Map());
  console.log(reportStorage)

  function onSelectReport(reportId) {
    setSelectedReport(reportId);
    setModalOpen(false);
  }
  function onCreateReport(){
    const CPLReport = {
      Name: "Report",
      Body: {
        Width: "8.5in",
        Height: "11in",
      },
    };     
    const reportId = `NewReport${++counter.current}`;
    return Promise.resolve({
      definition: CPLReport,
      id: reportId,
      displayName: reportId,
    });   
  }
  function onCloseDialog() {
    setModalOpen(false);
    if (reportPromise) {
      reportPromise.resolve(null);
      setReportPromise(null);
    }
  }
  function onOpenReport(){
    console.log("open report")
    setModalOpen(true);
    return new Promise((resolve, reject) => {
      setReportPromise({ resolve, reject });
    });
  }
  function onSaveReport(info){
    const reportId = info.id || `NewReport${++counter.current}`;
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));

    const reportDesignJson = JSON.stringify(info.definition);
    const blob = new Blob([reportDesignJson], { type: 'application/json' });
    saveAs(blob, `${reportId}.json`);
    return Promise.resolve({ displayName: reportId });    
  }
  function onSaveAsReport(info){
    const reportId = `NewReport${++counter.current}`;
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    
    return Promise.resolve({ id: reportId, displayName: reportId });    
  }
  React.useEffect(() => {
    if (selectedReport && reportPromise) {
      reportPromise.resolve({
        definition: reportStorage.get(selectedReport),
        id: selectedReport,
        displayName: selectedReport,
      });
      setReportPromise(null);
      setSelectedReport(null);
    }
  }, [selectedReport, reportPromise]);
  return (
    <Fragment>
      <div id="designer-host"><Designer report={{id: "nr.json"}} onCreate={onCreateReport} onSave={onSaveReport} onSaveAs={onSaveAsReport} onOpen={onOpenReport} /></div>
      {modalOpen && (
      <div className="modal" id="dlgOpen" tabIndex="-1" aria-hidden="true">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Open Report
              </h5>
              <button
                type="button"
                className="close"
                onClick={()=>onCloseDialog()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <strong>Select Report:</strong>
              <div className="list-group">
                {[...reportStorage.keys()].map((reportId) => (
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    onClick={() => onSelectReport(reportId)}
                  >
                    {reportId}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={()=>onCloseDialog()}
              >
                Close
              </button>
            </div>
        </div>
      </div>)}
    </Fragment>
  );
}

