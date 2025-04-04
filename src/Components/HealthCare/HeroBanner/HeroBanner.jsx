import React from "react";
import logo1 from "../../../assets/images/logo_1.png";
import logo2 from "../../../assets/images/logo_2.png";
import logo3 from "../../../assets/images/logo_3.png";
import logo4 from "../../../assets/images/logo_4.png";
import logo5 from "../../../assets/images/logo_5.png";
import logo6 from "../../../assets/images/logo_6.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="banner text-white pt-5">
      <div className="position-relative medical_banner">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-lg-9 tracking-in-expand text-center py-5 mx-auto">
                <h2 className="text-white fs-50 fw-bold">
                  Healthcare Software Development Company
                </h2>
                <p className="text-white pt-2 thin_p">
                  INDTechMark offers end-to-end healthcare software development
                  services empowering hospital administration with customized
                  apps to digitize healthcare services for efficient management
                  of assets, patient care, patient health data, etc., which
                  helps to offer effective treatment.
                </p>
                <a
                  href="https://indtech-portfolio-page.vercel.app/"
                  className="btn-white mt-4 fw-bold"
                >
                  <span>Talk about Your Project</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider Section */}
        <section className="bottomslide">
          <div className="py-4 text-center">
            <div className="clientSwipera">
              <div className="logo-slider">
                <div className="logo-slider-track">
                  {/* Render the logos twice for seamless scrolling */}
                  {[
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                  ].map((logo, index) => (
                    <div key={index} className="logo-slide">
                      <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroBanner;
