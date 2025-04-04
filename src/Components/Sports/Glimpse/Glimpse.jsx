import React from "react";

// Import images
import img1 from "../../../assets/images/img_1.svg";
import img2 from "../../../assets/images/img_2.svg";
import img3 from "../../../assets/images/img_3.svg";
import img4 from "../../../assets/images/img_4.svg";
import img5 from "../../../assets/images/img_5.svg";
import img6 from "../../../assets/images/img_6.svg";
import img7 from "../../../assets/images/img_7.svg";
import img8 from "../../../assets/images/img_8.svg";

const Glimpse = () => {
  // Data for the marquee images
  const marqueeImages1 = [img1, img2, img3, img4, img1, img2];
  const marqueeImages2 = [img5, img6, img7, img8, img6, img7, img8];

  return (
    <section className="lightgraybg overflow-hidden py-80" id="lifeandculture">
      <div className="bodypx pb-4">
        <div className="container-fluid">
          <div className="row align-items-md-center">
            <div className="col-md-7 text-center text-sm-start">
              <h2>Glimpse of our client-favorite works!</h2>
              <p>
                We work, laugh, celebrate, share experiences, and grow stronger
                together!!!
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
            <div className="section-life-culture portfolioreel mt-40">
              {/* First Marquee */}
              <div id="marquee">
                <div className="view">
                  <div className="pic-container">
                    {marqueeImages1.map((img, index) => (
                      <div key={index} className="pic">
                        <div className="img-div">
                          <div className="img-big">
                            <img
                              src={img}
                              width="750"
                              height="500"
                              loading="lazy"
                              alt="celebration"
                              className="img-fluid"
                            />
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
                    {marqueeImages2.map((img, index) => (
                      <div key={index} className="pic">
                        <div className="img-div">
                          <div className="img-big">
                            <img
                              src={img}
                              width="750"
                              height="500"
                              loading="lazy"
                              alt="celebration"
                              className="img-fluid"
                            />
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
