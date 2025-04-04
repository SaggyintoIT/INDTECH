import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

import C1 from "../../assets/images/logo_1.png";
import C2 from "../../assets/images/logo_2.png";
import C3 from "../../assets/images/logo_3.png";
import C4 from "../../assets/images/logo_4.png";
import C5 from "../../assets/images/logo_5.png";
import C6 from "../../assets/images/logo_6.png";

const LogoSliderALL = () => {
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
            <div key={index} >
              <img src={logo} alt={`Client ${index + 1}`} className="logoSliderimg" />
            </div>
          ))}
        </Slider>
      </div>
   
    </section>
  );
};

export default LogoSliderALL;
