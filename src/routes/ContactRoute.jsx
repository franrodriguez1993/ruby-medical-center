import React from "react";
import ContactForm from "../components/ContactRoute/ContactForm";
import "../css/ContactRoute/ContactRoute.css";

//svg:
import hourIcon from "../svg/hour.svg";
import locationIcon from "../svg/location.svg";
import mailIcon from "../svg/mail.svg";
import phoneIcon from "../svg/phone.svg";

const ContactRoute = () => {
  return (
    <div className="contactroute-container">
      <h1 className="contactroute-title">Contact</h1>

      <section className="contactroute-body_background"></section>

      <div className="contactroute-body">
        {/** HOUR CARD  **/}
        <article className="contactcard cc-first-child">
          <div className="contactcard-img_container ">
            <img src={hourIcon} alt="hour-icon" className="contactcard_img" />
          </div>
          <div className="contactcard-descr_container">
            <p className="contactcard_description">
              Monday - Friday : 08:00 - 21:00 | Saturday: 09:00 - 14:00
            </p>
          </div>
        </article>
        {/** LOCATION CARD  **/}
        <article className="contactcard cc-second-child">
          <div className="contactcard-img_container">
            <img
              src={locationIcon}
              alt="hour-icon"
              className="contactcard_img"
            />
          </div>

          <div className="contactcard-descr_container">
            <p className="contactcard_description">
              Yeonje-gu 1200 - Busan - South Korea
            </p>
          </div>
        </article>
        {/** MAIL CARD  **/}
        <article className="contactcard cc-thirt-child">
          <div className="contactcard-img_container">
            <img src={mailIcon} alt="hour-icon" className="contactcard_img" />
          </div>

          <div className="contactcard-descr_container">
            <p className="contactcard_description">
              rubymedicalcenter@gmail.com
            </p>
          </div>
        </article>

        {/** PHONE CARD  **/}
        <article className="contactcard cc-last-child">
          <div className="contactcard-img_container">
            <img src={phoneIcon} alt="hour-icon" className="contactcard_img" />
          </div>

          <div className="contactcard-descr_container">
            <p className="contactcard_description">001-5604-2223</p>
          </div>
        </article>
      </div>

      <div className="contactroute-form_container">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactRoute;
