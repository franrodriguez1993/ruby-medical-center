import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import LocationRoute from "./routes/LocationRoute";
import ContactRoute from "./routes/ContactRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="/location" element={<LocationRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
