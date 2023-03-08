import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/NeurologyRoute/NeurologyRoute.css";

const NeurologyRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Neurology"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="NeurologyRoute-Container">
      <h1 className="NeurologyRoute-title">Neurology</h1>
      <div className="NeurologyRoute-Container_blank">
        <section className="NeurologyRoute-Container_top">
          <img
            src="/assets/img/Neurology.jpg"
            className="nr-container_top--img"
            alt="neurology banner"
          />
          <p className="nr-container_top--text">
            Neurology is a medical specialty that focuses on the diagnosis and
            treatment of disorders related to the nervous system. The nervous
            system is responsible for controlling and coordinating all bodily
            functions, including movement, sensation, cognition, and behavior.
            Neurologists are specially trained physicians who have expertise in
            diagnosing and treating a wide range of neurological conditions,
            including stroke, epilepsy, Alzheimer's disease, Parkinson's
            disease, multiple sclerosis, and other disorders that affect the
            brain, spinal cord, and nerves. They use a variety of diagnostic
            tests, including imaging studies and neurological examinations, to
            evaluate patients and develop individualized treatment plans.
            Neurologists work closely with other healthcare professionals, such
            as neurosurgeons, neuropsychologists, and physical therapists, to
            provide comprehensive care and help patients achieve the best
            possible outcomes
          </p>
        </section>
        <hr className="nr-container_hr" />
        <section className="NeurologyRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default NeurologyRoute;
