import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles.css";

import App from "./App";
import Character from "./Characters";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api" element={<Character />} />
    </Routes>
  </Router>
);