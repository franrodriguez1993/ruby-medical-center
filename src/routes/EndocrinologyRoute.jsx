import React, { useEffect, useState } from "react";
import "../css/EndrocrinologyRoute/EndocrinologyRoute.css";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";

const EndocrinologyRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Endocrinology"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="EndocrinologyRoute-Container">
      <h1 className="EndocrinologyRoute-title">Endocrinology</h1>
      <div className="EndocrinologyRoute-Container_blank">
        <section className="EndocrinologyRoute-Container_top">
          <img
            src="/assets/img/Endocrinology.jpg"
            className="er-container_top--img"
          />
          <p className="er-container_top--text">
            Endocrinology is a medical specialty that focuses on the diagnosis
            and treatment of disorders related to hormones and the endocrine
            system. Hormones are chemical messengers that are produced by glands
            in the body and help to regulate various bodily functions, including
            growth and development, metabolism, reproduction, and mood. The
            endocrine system consists of several glands, including the pituitary
            gland, thyroid gland, adrenal gland, pancreas, and ovaries or
            testes. Endocrinologists are specially trained physicians who have
            expertise in diagnosing and treating hormone-related conditions,
            such as diabetes, thyroid disorders, hormonal imbalances, and
            infertility. They work closely with other healthcare professionals
            to provide comprehensive care and help patients achieve optimal
            health and well-being.
          </p>
        </section>
        <hr className="er-container_hr" />
        <section className="EndocrinologyRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default EndocrinologyRoute;
