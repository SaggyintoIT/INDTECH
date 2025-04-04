import React from "react";
import aboutImage from "../../assets/images/aboutslide.png"; // Update the path as needed

const AboutBanner = () => {
  return (
    <>
      <section className="bodypx banner bg-dark text-white pt-77">
        <div className="container-fluid ">
          <div className="row align-items-center">
            <div className="col-md-8 col-xl-6 tracking-in-expand py-4">
              <h2 className="text-white fs-50 fw-bold">About INDTechMark</h2>
              <p className="text-white pe-md-5">
                An enterprising software development organization with
                intellectual minds at work, devoted and skilled to build smart
                IT solutions for a better tomorrow. Explore business avenues
                with INDTechMark.
              </p>
              <a href="portfolio" className="btn-white mt-2 mt-xl-3 fw-bold">
                <span>Talk about Your Project</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
            <div className="col-md-4 ms-auto">
              <img className="w-100" src={aboutImage} alt="About INDTechMark" />
            </div>
          </div>
        </div>
      </section>
      <section className="bodypx bg-white py-5">
        <div className="container-fluid pt-md-4">
          {/* Ethics Section */}
          <div className="row align-items-center position-relative py-4">
            <div className="col-md-4 text-start">
              <div className="textouter">Ethics</div>
              <h2 className="lighttext fs-70 fw-bold mb-0 position-relative">
                Ethics
              </h2>
            </div>
            <div className="col-lg-8">
              <p className="fn-30 fw-200 px-50 ipadpos">
                At INDTechMark, we believe in the values of integrity, honesty,
                and respect. The blend of these values can be observed in
                everything we create for our clients.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="row align-items-center position-relative py-lg-5">
            <div className="col-md-4 text-start">
              <div className="textouter">Vision</div>
              <h2 className="lighttext fs-70 fw-bold mb-0 position-relative">
                Vision
              </h2>
            </div>
            <div className="col-lg-8">
              <p className="fn-30 fw-200 px-50 ipadpos">
                Being an innovation-driven company, we strive to invent digital
                products and solutions that provide unmatched business &
                customer value and experience.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="row align-items-center position-relative py-4">
            <div className="col-md-4 text-start">
              <div className="textouter">Mission</div>
              <h2 className="lighttext fs-70 fw-bold mb-0 position-relative">
                Mission
              </h2>
            </div>
            <div className="col-lg-8">
              <p className="fn-30 fw-200 px-50 ipadpos">
                We craft solutions that go beyond utility and serve as a great
                experience to the businesses and their customers in order to
                create unique values and persona.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
