import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/UrologyRoute/UrologyRoute.css";

const UrologyRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Urology"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="UrologyRoute-Container">
      <h1 className="UrologyRoute-title">Urology</h1>
      <div className="UrologyRoute-Container_blank">
        <section className="UrologyRoute-Container_top">
          <img
            src="/assets/img/Urology.jpg"
            className="ur-container_top--img"
          />
          <p className="ur-container_top--text">
            Urology is a medical specialty that focuses on the diagnosis and
            treatment of conditions related to the urinary tract and male
            reproductive system. The urinary tract includes the kidneys,
            bladder, ureters, and urethra, while the male reproductive system
            includes the testes, prostate, and penis. Urologists are specially
            trained physicians who have expertise in diagnosing and treating a
            wide range of urological conditions, such as urinary tract
            infections, kidney stones, prostate cancer, and erectile
            dysfunction. They use a variety of diagnostic tests, such as imaging
            studies and urodynamic testing, to evaluate patients and develop
            individualized treatment plans. Urologists work closely with other
            healthcare professionals, such as nephrologists, oncologists, and
            fertility specialists, to provide comprehensive care and help
            patients achieve the best possible outcomes.
          </p>
        </section>
        <hr className="ur-container_hr" />
        <section className="UrologyRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default UrologyRoute;
