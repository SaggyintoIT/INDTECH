import React from "react";

import c1 from "../../assets/images/celebration-4.jpg";
import c2 from "../../assets/images/celebration-5.jpg";
import c3 from "../../assets/images/celebration-6.jpg";
import c4 from "../../assets/images/celebration-7.jpg";
import c5 from "../../assets/images/celebration-8.jpg";
import c6 from "../../assets/images/celebration-9.jpg";
import c7 from "../../assets/images/celebration-10.jpg";
import c8 from "../../assets/images/celebration-11.jpg";
import c9 from "../../assets/images/celebration-12.jpg";
import c10 from "../../assets/images/celebration-13.jpg";
import c11 from "../../assets/images/celebration-14.jpg";

const TechCulture = () => {
  const images = [
    {
      big: c1,
      smallOne: c2,
      smallTwo: c3,
    },
    {
      big: c4,
      smallOne: c5,
      smallTwo: c6,
    },
    {
      big: c7,
      smallOne: c8,
      smallTwo: c9,
    },
    {
      big: c10,
      smallOne: c11,
      smallTwo: c9,
    },
  ];

  return (
    <>
      <section
        className="bg-off-white overflow-hidden py-80"
        id="lifeandculture"
      >
        <div className="bodypx pb-4">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-md-12 text-center">
                <h2>INDTechMark Culture</h2>
                <p>
                  A Mindful team of tech innovators bringing world-class tech
                  ideas to reality. We embrace the power of technology to
                  provide cutting-edge digital solutions that propel our clients
                  toward unprecedented success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="section-life-culture mt-40">
                <div id="marquee">
                  <div className="view">
                    <div className="pic-container">
                      {images.map((image, index) => (
                        <div className="pic" key={index}>
                          <div className="img-div">
                            <div className="img-big">
                              <img
                                width="750"
                                height="500"
                                src={image.big}
                                loading="lazy"
                                alt="celebration"
                                className="img-fluid"
                              />
                            </div>
                            <div className="img-small">
                              <div className="small-one">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallOne}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="small-two">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallTwo}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div id="marquee">
                  <div className="view">
                    <div className="pic-container pic-container-reverse">
                      {images.map((image, index) => (
                        <div className="pic" key={index}>
                          <div className="img-div">
                            <div className="img-big">
                              <img
                                width="750"
                                height="500"
                                src={image.big}
                                loading="lazy"
                                alt="celebration"
                                className="img-fluid"
                              />
                            </div>
                            <div className="img-small">
                              <div className="small-one">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallOne}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="small-two">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallTwo}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
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
    </>
  );
};

export default TechCulture;
