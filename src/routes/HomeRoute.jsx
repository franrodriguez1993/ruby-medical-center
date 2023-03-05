import React from "react";
import "../css/HomeRoute/HomeRoute.css";
import { useNavigate } from "react-router-dom";

const HomeRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="homeroute-container">
      {/**  FIRST BANNER  **/}
      <img
        src="/assets/img/banners/banner1.png"
        alt="banner"
        className="homeroute-banner"
      />

      <section className="homeroute-section_background"></section>

      {/**  BODY INTRO  **/}
      <div className="homeroute-body_intro">
        <img
          src="/assets/img/home1.png"
          alt="home-intro"
          className="homeroute-body_intro--img"
        />
        <p className="homeroute-body_intro--text">
          We are a leading healthcare provider dedicated to delivering
          high-quality medical services to our patients. Our state-of-the-art
          facilities and expert team of healthcare professionals are committed
          to providing personalized care that meets the unique needs of each
          individual.
        </p>
      </div>

      <img
        src="/assets/img/banners/banner2.png"
        alt="img-banner"
        className="homeroute-banner_professionals"
        onClick={() => navigate("/professionals")}
      />

      {/**  BODY PROFESSIONALS  **/}
      <div className="homeroute-body_professionals">
        <p className="homeroute-body_professionals--text">
          We offer a comprehensive range of medical services, including
          preventative care, diagnostic testing, and treatment options for a
          wide variety of conditions. Our team of specialists includes doctors,
          nurses, and support staff who work together to ensure that our
          patients receive the best possible care.
        </p>
        <img
          src="/assets/img/home2.png"
          alt="home-professionals"
          className="homeroute-body_professionals--img"
        />
      </div>
    </div>
  );
};

export default HomeRoute;
