import React from "react";
import logo1 from "../../../assets/images/logo_1.png"; // Adjust the path as needed
import logo2 from "../../../assets/images/logo_2.png";
import logo3 from "../../../assets/images/logo_3.png";
import logo4 from "../../../assets/images/logo_4.png";
import logo5 from "../../../assets/images/logo_5.png";
import logo6 from "../../../assets/images/logo_6.png";
import "./HeroBanner.css"; // Import the CSS file for animations

const HeroBanner = () => {
  return (
    <section className="banner text-white pt-5 herobanner">
      <div className="position-relative innerbg webbanner">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-md-12 tracking-in-expand text-center py-5">
                <h1 className="text-white tage-h-one fs-50 fw-bold">
                  Mobile App Development Company
                </h1>
                <p className="text-white mb-md-4 pb-md-3 font-light ">
                  Enhance your brand identity and drive business growth with
                  advanced mobile app solutions.
                </p>

                {/* Statistics Section */}
                <div className="services-hero-statistics d-none d-md-flex">
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">75+</div>
                    <div className="fn-18">
                      Mobile App <span className="d-block">Developers</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">6+</div>
                    <div className="fn-18">
                      Years of Devs Avg.{" "}
                      <span className="d-md-block">Experience</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">90%</div>
                    <div className="fn-18">
                      Talent <span className="d-md-block">Retention Rate</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">100%</div>
                    <div className="fn-18">
                      Refund <span className="d-md-block">Policy*</span>
                    </div>
                  </div>
                </div>

                {/* Call-to-Action Button */}
                <a href="portfolio" className="btn-white mt-4 fw-bold">
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
