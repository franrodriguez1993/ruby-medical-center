import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/PsychiatryRoute/PsychiatryRoute.css";

const PsychiatryRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Psychiatry"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="PsychiatryRoute-Container">
      <h1 className="PsychiatryRoute-title">Psychiatry</h1>
      <div className="PsychiatryRoute-Container_blank">
        <section className="PsychiatryRoute-Container_top">
          <img
            src="/assets/img/Psychiatry.jpg"
            className="pqr-container_top--img"
            alt="Psychiatry banner ruby medical center"
          />
          <p className="pqr-container_top--text">
            Psychiatry is a medical specialty that focuses on the diagnosis and
            treatment of mental illness and emotional disorders. Mental illness
            can affect a person's thoughts, emotions, and behavior, and can have
            a significant impact on their quality of life. Psychiatrists are
            specially trained physicians who have expertise in diagnosing and
            treating a wide range of mental health conditions, including
            depression, anxiety disorders, bipolar disorder, schizophrenia, and
            personality disorders. They use a variety of diagnostic tools, such
            as psychological assessments and brain imaging studies, to evaluate
            patients and develop individualized treatment plans. Psychiatrists
            may use a combination of psychotherapy, medications, and other
            treatments to help patients manage their symptoms and achieve
            optimal mental health. They work closely with other healthcare
            professionals, such as psychologists, social workers, and mental
            health counselors, to provide comprehensive care and help patients
            achieve the best possible outcomes.
          </p>
        </section>
        <hr className="pqr-container_hr" />
        <section className="PsychiatryRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default PsychiatryRoute;
