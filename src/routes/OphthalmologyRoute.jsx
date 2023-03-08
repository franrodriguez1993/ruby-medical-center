import React, { useEffect, useState } from "react";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";
import "../css/OphthalmologyRoute/OphthalmologyRoute.css";

const OphthalmologyRoute = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const filterdocs = doctorsJson.doctors.filter(
      (d) => d.speciality === "Ophthalmology"
    );
    setDoctors(filterdocs);
  }, []);

  return (
    <div className="OphthalmologyRoute-Container">
      <h1 className="OphthalmologyRoute-title">Ophthalmology</h1>
      <div className="OphthalmologyRoute-Container_blank">
        <section className="OphthalmologyRoute-Container_top">
          <img
            src="/assets/img/Ophthalmology.jpg"
            className="or-container_top--img"
            alt="Ophthalmology banner"
          />
          <p className="or-container_top--text">
            Ophthalmology is a medical specialty that focuses on the diagnosis
            and treatment of disorders related to the eyes and vision. The eyes
            are complex organs that allow us to see and interpret the world
            around us, and vision is a critical component of our overall health
            and well-being. Ophthalmologists are specially trained physicians
            who have expertise in diagnosing and treating a wide range of eye
            conditions, including cataracts, glaucoma, macular degeneration, and
            diabetic retinopathy. They use a variety of diagnostic tests, such
            as visual acuity tests, eye exams, and imaging studies, to evaluate
            patients and develop individualized treatment plans.
            Ophthalmologists work closely with other healthcare professionals,
            such as optometrists, retina specialists, and oculoplastic surgeons,
            to provide comprehensive care and help patients achieve the best
            possible outcomes.
          </p>
        </section>
        <hr className="or-container_hr" />
        <section className="OphthalmologyRoute-Container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default OphthalmologyRoute;
