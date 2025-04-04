import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./AdvancedTechnologies.css";

// Import images
import financeIcon7 from "../../../assets/images/financeicon_7.svg";
import financeIcon8 from "../../../assets/images/financeicon_8.svg";
import financeIcon9 from "../../../assets/images/financeicon_9.svg";
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";

const AdvancedTechnologies = () => {
  // Data for the slides
  const slides = [
    {
      icon: financeIcon7,
      title: "Big Data Analytics",
      description:
        "Gain a competitive edge with our comprehensive fintech software development services. We cater to fintech businesses of all sizes, helping you unlock powerful data insights.",
    },
    {
      icon: financeIcon8,
      title: "Robotics Process Automation",
      description:
        "Our RPA-integrated financial application software is designed to optimize your processes and drive productivity. Supercharge your business efficiency with our smart automation solutions like RPA.",
    },
    {
      icon: financeIcon9,
      title: "Machine Learning",
      description:
        "Our fintech app solutions integrated with AI technology and machine learning streamline operation and enhance efficiency, enabling you to provide better services to your clients.",
    },
    {
      icon: financeIcon8,
      title: "Robotics Process Automation",
      description:
        "Our RPA-integrated financial application software is designed to optimize your processes and drive productivity. Supercharge your business efficiency with our smart automation solutions like RPA.",
    },
    {
      icon: financeIcon9,
      title: "Machine Learning",
      description:
        "Our fintech app solutions integrated with AI technology and machine learning streamline operation and enhance efficiency, enabling you to provide better services to your clients.",
    },
  ];

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Advanced Technologies
            <br />
            We Use To Build Your Fintech App
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              Being the top-tier financial app development company, INDTechMark
              makes sure to integrate high-end technologies to keep your fintech
              business at the forefront of the competition.
            </p>
          </div>
        </div>

        <div className="container-fluid custom-ind-slider pe-0">
          <div className="we-serve__inner bg-black-slider">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".we-serve__slider-button-prev",
                nextEl: ".we-serve__slider-button-next",
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="we-serve__item br-24">
                    <div className="ongoing-left-icon bg-pink">
                      <img src={slide.icon} alt={slide.title} />
                    </div>
                    <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                      {slide.title}
                    </div>
                    <p className="font-18 text-white pb-2">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="we-serve__nav d-sm-flex d-black mt-5 justify-content-between">
              <div className="d-flex gap-3 ms-auto">
                <div
                  className="we-serve__slider-button-prev"
                  role="button"
                  aria-label="Previous slide"
                >
                  <span>
                    <img src={leftArrow} alt="Previous" />
                  </span>
                </div>
                <div
                  className="we-serve__slider-button-next"
                  role="button"
                  aria-label="Next slide"
                >
                  <span>
                    <img src={rightArrow} alt="Next" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechnologies;
