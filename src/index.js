import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles.css";

import App from "./App";
import Character from "./Characters";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="container">
      <header>
        <h1>Homework 6</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/api" element={<Character />} />
        </Routes>
      </main>
    </div>
  </Router>
);
