import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner pt-5">
      <div className="bg-dark h-450 text-white pt-5 bodypx mt-4">
        <div className="container-fluid pt-md-2">
          <div className="row">
            {/* Left Side Content */}
            <div className="col-md-6">
              <span className="text-white  fw-100 d-block thin">
                Start for free,
                <br />
                Pick a plan later.
              </span>
              <div className="iphfonts d-flex fn-24 fw-600 mt-20 align-items-center">
                <span>Monthly billing</span>
                <span className="px-3 switchbutton">
                  <div className="form-check form-switch form-switch-lg mar-10">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
                  </div>
                </span>
                <span>
                  Annual billing{" "}
                  <span className="text-red">(Save up to 30%)</span>
                </span>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-md-6 d-flex flex-column mt-md-0 mt-4">
              <div className="ms-auto">
                <span className="text-white fn-40 fw-600">
                  Finger Choose The Best Plan
                </span>
                <p className="mt-2">
                  Pick your plan. Change whenever you want. No switching fees
                  <br /> between packages
                </p>
                <a href="/pricing" className="btn-white fw-bold">
                  <span>Compare Plans</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
