import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

import ProfessionalsRoute from "./routes/ProfessionalsRoute";
import EndocrinologyRoute from "./routes/EndocrinologyRoute";
import NeurologyRoute from "./routes/NeurologyRoute";
import OphthalmologyRoute from "./routes/OphthalmologyRoute";
import PediatricsRoute from "./routes/PediatricsRoute";
import UrologyRoute from "./routes/UrologyRoute";
import PsychiatryRoute from "./routes/PsychiatryRoute";
import CardiologyRoute from "./routes/CardiologyRoute";

import LocationRoute from "./routes/LocationRoute";
import ContactRoute from "./routes/ContactRoute";
import DoctorRoute from "./routes/DoctorRoute";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />

          <Route path="/professionals" element={<ProfessionalsRoute />} />
          <Route path="/endocrinology" element={<EndocrinologyRoute />} />
          <Route path="/neurology" element={<NeurologyRoute />} />
          <Route path="/ophthalmology" element={<OphthalmologyRoute />} />
          <Route path="/pediatrics" element={<PediatricsRoute />} />
          <Route path="/urology" element={<UrologyRoute />} />
          <Route path="/psychiatry" element={<PsychiatryRoute />} />
          <Route path="/cardiology" element={<CardiologyRoute />} />

          <Route path="/location" element={<LocationRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/doctor/:id" element={<DoctorRoute />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
