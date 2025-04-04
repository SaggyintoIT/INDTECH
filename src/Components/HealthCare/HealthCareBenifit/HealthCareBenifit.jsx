import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import images
import healthcareIcon7 from "../../../assets/images/healthcareicon_7.svg";
import healthcareIcon8 from "../../../assets/images/healthcareicon_8.svg";
import healthcareIcon9 from "../../../assets/images/healthcareicon_9.svg";
import webappUIUX from "../../../assets/images/webappuiux.svg";
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";

const HealthcareBenefits = () => {
  // Data for the benefits
  const benefits = [
    {
      icon: healthcareIcon7,
      title: "Enhanced Access to Healthcare Services",
      description:
        "Through digital platforms, patients can obtain healthcare services more swiftly and conveniently. This benefit particularly helps those in remote areas or with mobility issues.",
    },
    {
      icon: healthcareIcon8,
      title: "Improved Patient Engagement",
      description:
        "Digital healthcare IT solutions encourage patients to actively take care of their health. This can lead to better health results and a more informed patient population.",
    },
    {
      icon: healthcareIcon9,
      title: "Efficient Appointment Management",
      description:
        "Our healthcare software developers integrate automated reminders to help reduce no shows, optimising healthcare provider schedules and improving patient flow.",
    },
    {
      icon: webappUIUX,
      title: "Web App UI UX Design",
      description:
        "Our creative team of UI UX designers follows industry best practices to create highly engaging, guiding, and scalable designs where your website visitors love to spend time, leading to better business conversions.",
    },
  ];

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Great Benefits of Healthcare App Development
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              Healthcare app development offers a host of benefits for various
              stakeholders in the healthcare industry, including patients,
              healthcare practitioners, and healthcare organizations. Some of
              them are as follows.
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
              {benefits.map((benefit, index) => (
                <SwiperSlide key={index}>
                  <div className="we-serve__item br-24">
                    <div className="ongoing-left-icon bg-pink">
                      <img src={benefit.icon} alt={benefit.title} />
                    </div>
                    <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                      {benefit.title}
                    </div>
                    <p className="font-18 text-white pb-2">
                      {benefit.description}
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

export default HealthcareBenefits;
