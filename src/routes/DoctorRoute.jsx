import React, { useEffect, useState } from "react";
import "../css/DoctorRoute/DoctorRoute.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import doctorsJson from "../json/doctors.json";

const DoctorRoute = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    const filterDoc = doctorsJson.doctors.find((d) => d.id === parseInt(id));
    setDoctor(filterDoc);
  }, [id]);
  return (
    <div className="doctorroute-container">
      <h1 className="doctorroute-title"> Medic Staff</h1>

      <section className="doctorroute-body_background"></section>
      {Object.keys(doctor).length !== 0 && (
        <div className="doctorroute-body">
          <h2 className="drbody-title">{doctor.name}</h2>
          <b className="drbody-md">MD {doctor.md}</b>

          <section className="drbody-image">
            <div className="drbody-image_background"></div>
            <img src={doctor.image} alt="dr" className="drbody-image_img" />
          </section>

          <section className="drbody-info">
            <h5
              className="drbody-info_speciality"
              onClick={() => navigate(`/${doctor.speciality.toLowerCase()}`)}
            >
              {doctor.speciality}
            </h5>
            <hr className="drbody-info_hr" />
            <b className="drbody-info_attention">Attention Schedule</b>
            {doctor.atention.map((a, index) => (
              <p key={index}>{a}</p>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default DoctorRoute;
