import React from "react";
// import "./Glimpse.css";

// Import images (replace with your actual image paths)
import celebration4 from "../../../assets/images/celebration-4.jpg";
import celebration5 from "../../../assets/images/celebration-5.jpg";
import celebration6 from "../../../assets/images/celebration-6.jpg";
import celebration7 from "../../../assets/images/celebration-7.jpg";
import celebration8 from "../../../assets/images/celebration-8.jpg";
import celebration9 from "../../../assets/images/celebration-9.jpg";
import celebration10 from "../../../assets/images/celebration-10.jpg";
import celebration11 from "../../../assets/images/celebration-11.jpg";
import celebration12 from "../../../assets/images/celebration-12.jpg";
import celebration13 from "../../../assets/images/celebration-13.jpg";
import celebration14 from "../../../assets/images/celebration-14.jpg";

const Glimpse = () => {
  // Data for the marquee images
  const images1 = [
    { big: celebration4, small1: celebration5, small2: celebration6 },
    { big: celebration7, small1: celebration8, small2: celebration9 },
    { big: celebration4, small1: celebration5, small2: celebration6 },
    { big: celebration7, small1: celebration8, small2: celebration9 },
    { big: celebration4, small1: celebration5, small2: celebration6 },
    { big: celebration7, small1: celebration8, small2: celebration9 },
  ];

  const images2 = [
    { big: celebration10, small1: celebration11, small2: celebration12 },
    { big: celebration13, small1: celebration14, small2: celebration12 },
    { big: celebration10, small1: celebration11, small2: celebration12 },
    { big: celebration13, small1: celebration14, small2: celebration12 },
    { big: celebration10, small1: celebration11, small2: celebration12 },
    { big: celebration13, small1: celebration14, small2: celebration12 },
  ];

  return (
    <section className="lightgraybg overflow-hidden py-80" id="lifeandculture">
      <div className="bodypx pb-4">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-7 text-center text-sm-start">
              <h2>Glimpse of our client-favorite works!</h2>
              <p>
                Discover the standout projects that make our clients proud of
                us. These showcase our creative skills and technical expertise,
                featuring stunning designs that perfectly align with our
                client's needs and boost their digital presence.
              </p>
            </div>
            <div className="col-md-5 text-md-end text-center">
              <a
                href="javascript:void(0)"
                className="btn-darkblack mt-2 mt-xl-3 fw-bold fn-16"
              >
                <span>explore more</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="section-life-culture mt-40">
              {/* First Marquee */}
              <div id="marquee">
                <div className="view">
                  <div className="pic-container">
                    {images1.map((image, index) => (
                      <div className="pic" key={index}>
                        <div className="img-div">
                          <div className="img-big">
                            <img
                              src={image.big}
                              alt="celebration"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <div className="img-small">
                            <div className="small-one">
                              <img
                                src={image.small1}
                                alt="celebration"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="small-two">
                              <img
                                src={image.small2}
                                alt="celebration"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Marquee */}
              <div id="marquee">
                <div className="view">
                  <div className="pic-container pic-container-reverse">
                    {images2.map((image, index) => (
                      <div className="pic" key={index}>
                        <div className="img-div">
                          <div className="img-big">
                            <img
                              src={image.big}
                              alt="celebration"
                              className="img-fluid"
                              loading="lazy"
                            />
                          </div>
                          <div className="img-small">
                            <div className="small-one">
                              <img
                                src={image.small1}
                                alt="celebration"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                            <div className="small-two">
                              <img
                                src={image.small2}
                                alt="celebration"
                                className="img-fluid"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
