import React from "react";
import "../../css/Accesories/UpButton.css";
import upButton from "../../svg/upButton.svg";
const UpButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <img
      src={upButton}
      alt="upbutton"
      className="upbutton"
      onClick={handleScrollToTop}
    />
  );
};

export default UpButton;
