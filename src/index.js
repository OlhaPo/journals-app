import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import PositionedMenu from "./PositionedMenu";
import JournalList from "./JournalList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PositionedMenu />
      <Routes>
        <Route path="/" element={<JournalList />} />
        {/* <Route path="journals" elememt={<JournalList />} /> */}
        {/* <Route path="gallery/:journalId" element={<Gallery />} /> */}
        {/* <Route path="view-record/:recordId" element={<ViewRecord />} /> */}
        {/* <Route path="add-record" element={<EditRecord />} /> */}
        {/* <Route path="edit-record/:recordId" element={<EditRecord />} /> */}
        {/* <Route path="not-found" element={<PageNotFound />} /> */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
