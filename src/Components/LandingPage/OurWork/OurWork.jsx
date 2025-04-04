import React from "react";
import { Link } from "react-router-dom";
import ourwork1 from "../../../assets/images/ourwork.jpg";
import ourwork2 from "../../../assets/images/ourwork2.jpg";
import ourwork3 from "../../../assets/images/ourwork3.jpg";

const OurWorkSection = () => {
  return (
    <section className="bodypx ourworksection py-80" data-aos="fade-up">
      <div className="container-fluid px-md-0">
        <div className="row">
          {/* Left Column - Heading & Text */}
          <div className="col-md-7 text-center text-sm-start">
            <h2>Our Recent Work</h2>
            <p>
              Have a look at our recent projects, which display our dedication
              to innovative digital solutions. Each project reflects our
              expertise in creating impactful and result-driven solutions that
              bring success to businesses in varied dimensions.
            </p>
          </div>

          {/* Right Column - Button */}
          <div className="col-md-5 text-end d-sm-block d-none">
            <Link
              to="/portfolio"
              className="btn-darkblack mt-2 mt-xl-3 fw-bold fn-16"
            >
              <span>Get Estimation</span>
              <i className="icon icon-arrow"></i>
            </Link>
          </div>

          {/* Work Slider */}
          <div className="pt-3 px-0">
            <div className="wrapper">
              <div className="ourwork-slider">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img
                      className="inner-img"
                      src={ourwork1}
                      alt="Our Work 1"
                    />
                  </div>
                  <div className="image-wrapper">
                    <img
                      className="inner-img"
                      src={ourwork2}
                      alt="Our Work 2"
                    />
                  </div>
                  <div className="image-wrapper">
                    <img
                      className="inner-img"
                      src={ourwork3}
                      alt="Our Work 3"
                    />
                  </div>
                </div>
              </div>

              {/* Button for Smaller Screens */}
              <div className="col-md-5 text-center d-sm-none d-block">
                <Link to="/portfolio" className="themeBtn my-3 fw-bold fn-16">
                  <span>Get Estimation</span>
                  <i className="icon icon-arrow"></i>
                </Link>
              </div>
            </div>

            {/* Work Stats */}
            <div className="work__inner px-3">
              <div className="work__item work__item--no-link">
                <div>
                  <span className="font-60 work__item-larg-title">7000+</span>
                  <p className="work__item-text text-center">
                    Projects Delivered Successfully
                  </p>
                </div>
              </div>

              <div className="work__item work__item--no-link">
                <div>
                  <span className="font-60 work__item-larg-title">1400+</span>
                  <p className="work__item-text text-center">Happy Clients</p>
                </div>
              </div>

              {/* Clickable Work Item */}
              <div
                className="work__item work__item--no-link bg-purple"
                onClick={() => (window.location.href = "/contact-us")}
              >
                <h3 className="font-24 work__item-title fw-bold">
                  Want to Start a Project?
                </h3>
                <Link
                  to="/contact-us"
                  className="btn-darkblack mt-2 mt-xl-3 fw-bold fn-16"
                >
                  <span>Get Estimation</span>
                  <i className="icon icon-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
