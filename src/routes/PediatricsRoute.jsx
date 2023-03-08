import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/PediatricsRoute/PediatricsRoute.css";

const PediatricsRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Pediatrics"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="PediatricsRoute-Container">
      <h1 className="PediatricsRoute-title">Pediatrics</h1>
      <div className="PediatricsRoute-Container_blank">
        <section className="PediatricsRoute-Container_top">
          <img
            src="/assets/img/Pediatrics.jpg"
            className="pr-container_top--img"
            alt="pediatry banner"
          />
          <p className="pr-container_top--text">
            Pediatrics is a medical specialty that focuses on the health and
            well-being of children, from infancy through adolescence. Children
            have unique healthcare needs that require specialized knowledge and
            training, and pediatricians are specially trained physicians who
            provide comprehensive medical care for children. Pediatricians focus
            on the physical, emotional, and social health of children, and they
            are responsible for diagnosing and treating a wide range of
            childhood illnesses and conditions. They also monitor growth and
            development, provide immunizations, and offer guidance to parents on
            nutrition, safety, and other important issues related to child
            health. Pediatricians work closely with other healthcare
            professionals, such as pediatric nurses, pediatric surgeons, and
            child psychologists, to provide comprehensive care and help children
            achieve optimal health and well-being.
          </p>
        </section>
        <hr className="pr-container_hr" />
        <section className="PediatricsRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default PediatricsRoute;
