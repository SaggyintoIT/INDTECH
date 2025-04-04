import React from "react";
// import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="banner text-white pt-5">
      <div className="position-relative blogbanner">
        <div className="slidoverlay bodypx">
          <div className="container-fluid h-100">
            <div className="row align-items-center py-5 h-100">
              <div className="col-md-12 tracking-in-expand py-md-5 text-md-center">
                <h2 className="text-white fs-50 fw-bold mt-xl-5">
                  The Mindful Blogs
                </h2>
                <p className="text-white pe-md-5 mb-4">
                  Where innovation meets progress.
                </p>
                <a
                  href="/portfolio"
                  className="btn-white mt-2 mt-xl-3 fw-bold me-3"
                >
                  <span>Talk about Your Project</span>
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

export default HeroBanner;
