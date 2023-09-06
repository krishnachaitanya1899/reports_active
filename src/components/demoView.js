import React, { useState } from "react";
import { Viewer } from "@grapecity/activereports-react";

function DemoView() {
  const [report, setReport] = useState("/nr.json");
  const [viewerKey, setViewerKey] = useState(0); // Initialize key with 0

  const handleSelect = (e) => {
    setReport(e.target.value);
    setViewerKey((prevKey) => prevKey + 1); // Increment the key to reload the Viewer
  };

  return (
    <div id="viewer-host">
      <select onChange={(e) => handleSelect(e)}>
        <option value="/new1.json">new 1</option>
        <option value="/new2.json">new 2</option>
        <option value="/nr.json">new 3</option>
      </select>
      <Viewer key={viewerKey} report={{ Uri: report }} /> {/* Use a unique key */}
    </div>
  );
}

export default DemoView;
