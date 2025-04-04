import React from "react";
import careerHero from "../../assets/images/Careers.jpg";
// import LogoSlider from '../../HomePage/LogoSlider/LogoSlider';
import LogoSliderALL from "./LogoSlider";

const CareerHero = () => {
  return (
    <>
      <section className="bodypx banner bg-dark text-white pt-77">
        <div className="container-fluid">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-6 tracking-in-expand">
              <span className="text-white fn-30 fw-200 pe-md-5">
                <span className="fw-600 d-md-block">
                  Ready to do the best work of your life?
                </span>{" "}
                Then it’s you we are after!
              </span>
              <p className="fn-24 py-3 pe-md-5">
                Come, be a part of our family, go on an <br />
                adventure and let's do great things together!
              </p>
              <a href="#" className="btn-white fw-bold">
                <span>apply job</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
            <div className="col-md-6 text-end pb-5">
              <img
                className="imgph-w rounded30 my-4"
                src={careerHero}
                alt="Career"
              />
            </div>
          </div>
        </div>
      </section>
      <LogoSliderALL />
    </>
  );
};

export default CareerHero;
