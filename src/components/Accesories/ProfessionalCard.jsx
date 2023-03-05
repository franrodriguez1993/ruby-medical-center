import React from "react";
import "../../css/Accesories/ProfessionalsCard.css";
import { useNavigate } from "react-router-dom";

const ProfessionalCard = ({ professionals }) => {
  const navigate = useNavigate();
  return (
    <div
      className="professional-card"
      onClick={() => navigate(`/doctor/${professionals.id}`)}
    >
      <img src={professionals.image} className="image-card" />
      <hr className="professional-card_hr" />
      <p className="professional-card_name">{professionals.name}</p>
      <p className="professional-card_md">MD {professionals.md}</p>
      <p className="professional-card_speciality">{professionals.speciality}</p>
    </div>
  );
};

export default ProfessionalCard;
