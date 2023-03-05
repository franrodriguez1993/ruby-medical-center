import React, { useEffect } from "react";
import "../css/LocationRoute/LocationRoute.css";
const LocationRoute = () => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 35.1820494;
    const lon = 129.0766808;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div className="locationroute-container">
      <h1 className="locationroute-title"> Location</h1>

      <section className="locationroute-body_background"></section>
      <div className="locationroute-body">
        <div className="locationroute-introduction">
          <p>
            Our center is located in one of the most convenient and accessible
            areas of the city, making it easy for patients to receive the care
            they need.
          </p>

          <p>
            We are proud to be part of the world-class medical community in
            Busan, which is home to several renowned medical centers. Our center
            is staffed by highly trained and experienced medical professionals
            who are dedicated to providing exceptional care to our patient
          </p>
        </div>

        <div className="address-container">
          <h4>Address</h4>
          <b>South Korea</b>
          <p>Busan</p>
          <p>Yeonje-gu 1200</p>
        </div>

        <h4>Map</h4>
        <iframe
          title="location"
          id="iframeId"
          height="500px"
          width="100%"
          className="iframe-map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationRoute;
