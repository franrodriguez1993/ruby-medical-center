import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/CardiologyRoute/CardiologyRoute.css";

const CardiologyRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Cardiology"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="CardiologyRoute-Container">
      <h1 className="CardiologyRoute-title">Cardiology</h1>
      <div className="CardiologyRoute-Container_blank">
        <section className="CardiologyRoute-Container_top">
          <img
            src="/assets/img/Cardiology.jpg"
            className="cr-container_top--img"
          />
          <p className="cr-container_top--text">
            Cardiology is a medical specialty that focuses on the diagnosis and
            treatment of disorders related to the heart and circulatory system.
            The heart is a vital organ that pumps blood throughout the body, and
            the circulatory system includes the blood vessels that transport
            oxygen and nutrients to the organs and tissues. Cardiologists are
            specially trained physicians who have expertise in diagnosing and
            treating a wide range of heart conditions, including coronary artery
            disease, heart failure, arrhythmias, and valve disorders. They use a
            variety of diagnostic tests, such as echocardiograms, stress tests,
            and cardiac catheterization, to evaluate patients and develop
            individualized treatment plans. Cardiologists work closely with
            other healthcare professionals, such as cardiac surgeons,
            electrophysiologists, and rehabilitation specialists, to provide
            comprehensive care and help patients achieve the best possible
            outcomes.
          </p>
        </section>
        <hr className="cr-container_hr" />
        <section className="CardiologyRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default CardiologyRoute;
