import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

import C1 from "../../../assets/images/logo_1.png";
import C2 from "../../../assets/images/logo_2.png";
import C3 from "../../../assets/images/logo_3.png";
import C4 from "../../../assets/images/logo_4.png";
import C5 from "../../../assets/images/logo_5.png";
import C6 from "../../../assets/images/logo_6.png";

const LogoSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bodypx bg-white">
      {/* Logo Slider Section */}
      <div className="py-4 text-center">
        <Slider {...settings}>
          {[C1, C2, C3, C4, C5, C6].map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="logoSliderimg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Statistics Section */}
      <div className="container-fluid py-5" data-aos="fade-up">
        <div className="row py-md-5">
          <div
            className="col-md-6 text-center text-md-start"
            data-aos="fade-left"
          >
            <h1 className="tage-h-one">
              Transforming Your Ideas into Digital Excellence with Cutting-Edge
              Solutions
            </h1>
            <p className="fn-18 mt-2">
              IND Tech Mark boasts a team of digital transformation specialists
              with a wide range of expertise. We are dedicated to providing
              custom top-notch digital solutions for businesses of all sizes.
              From innovative web design to its development, we create
              exceptional digital experiences that drive success in the field.
            </p>
          </div>

          <div className="col-md-6" ref={ref}>
            <ul className="left-counter counter-list list-unstyled mb-0 text-center">
              {[
                { number: 700, text: "Projects Delivered Successfully" },
                { number: 400, text: "Satisfied Clients Across the Globe" },
                { number: 500, text: "Happy Customers" },
                { number: 600, text: "Experts Under the Same Roof" },
              ].map((item, index) => (
                <li key={index}>
                  <div className="number_counter">
                    <div className="counter-text">
                      {inView && (
                        <CountUp start={0} end={item.number} duration={3} />
                      )}
                      +
                    </div>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
