import React, { useEffect, useState } from "react";
import "../css/ProfessionalsRoute/ProfessionalsRoute.css";
import doctorsJson from "../json/doctors.json";
import ProfessionalCard from "../components/Accesories/ProfessionalCard";

const ProfessionalsRoute = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    setDoctors(doctorsJson.doctors);
  }, []);

  return (
    <div className="ProfessionalsRoute-container">
      <h1 className="ProfessionalsRoute-title">Professionals</h1>
      <div className="ProfessionalsRoute-container_blank">
        <section className="ProfessionalsRoute-container_top">
          <div className="prf-container_top--imgcontainer">
            <img
              src="/assets/img/professionals.jpg"
              className="prf-container_top--img"
              alt="professionals banner"
            />
          </div>

          <p className="pr-container_top--text">
            At Ruby Medical Center, our team of doctors is committed to
            providing the highest level of care to our patients. With years of
            experience and expertise in a wide range of medical specialties, our
            doctors are dedicated to helping you achieve optimal health and
            well-being. From routine check-ups and preventive care to
            specialized treatments and procedures, our doctors have the
            knowledge and skill to diagnose and treat a variety of medical
            conditions. Whether you're dealing with a chronic illness, managing
            a complex medical issue, or simply looking for guidance on how to
            maintain a healthy lifestyle, our doctors are here to help. At Ruby
            Medical Center, we understand that every patient is unique, which is
            why we take a personalized approach to healthcare. We take the time
            to get to know you, understand your concerns and goals, and develop
            a customized treatment plan that meets your needs. Thank you for
            choosing Ruby Medical Center as your partner in health. We look
            forward to working with you to achieve your health and wellness
            goals.
          </p>
        </section>
        <hr className="pr-container_hr" />
        <section className="ProfessionalsRoute-container_bottom">
          {doctors.length !== 0 &&
            doctors.map((d) => (
              <ProfessionalCard professionals={d} key={d.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default ProfessionalsRoute;
