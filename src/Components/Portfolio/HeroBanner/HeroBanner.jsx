import React from "react";
import bannerImage from "../../../assets/images/portfolio-slid.png"; // Adjust the path to your image

const HeroBanner = () => {
  return (
    <section className="bodypx banner bg-dark text-white pt-77">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 tracking-in-expand pt-4 pt-md-0">
            <h2 className="text-white fs-50 fw-bold">
              High Quality Designs Created by A Team of Experienced Designers
            </h2>
            <a href="/contact-us" className="btn-white mt-2 mt-xl-3 fw-bold">
              <span>Talk to us</span>
              <i className="icon icon-arrow"></i>
            </a>
          </div>
          <div className="col-md-6 pt-4 pb-5 text-end">
            <img
              className="imgph-w pb-5"
              src={bannerImage}
              alt="Portfolio Slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
