import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./DigitalProductDesign.css";

// Import images (replace with your actual image paths)
import wireframingIcon from "../../../assets/images/Wireframingicon1.svg";
import webappUiuxIcon from "../../../assets/images/webappuiux.svg";
import uiuxMobileIcon from "../../../assets/images/uiuxiconmobile.svg";
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";

const DigitalProductDesign = () => {
  // Data for the services
  const services = [
    {
      icon: wireframingIcon,
      title: "Discovery Session",
      description:
        "We start with a consultation to understand your goals, audience, and project requirements, ensuring that we align our design approach with your business goals.",
    },
    {
      icon: webappUiuxIcon,
      title: "Website Strategy",
      description:
        "Next, we craft a strategic plan based on market research and competitor analysis, setting clear goals and outlining a roadmap to guide the design of your website.",
    },
    {
      icon: uiuxMobileIcon,
      title: "Asset Collation",
      description:
        "We collect and organize all necessary materials, including content, images, and videos, ensuring that we have everything in hand to build a visually appealing website.",
    },
    {
      icon: webappUiuxIcon,
      title: "Wireframing & Visual Design",
      description:
        "We develop wireframes and create visually engaging design mockups, refining them based on your feedback to ensure the web design represents your brand effectively.",
    },
    {
      icon: webappUiuxIcon,
      title: "Website Development",
      description:
        "Our team converts designs into a fully functional website, focusing on responsive development and cross-browser compatibility to deliver a high-performance online presence.",
    },
  ];

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Our Digital Product Design Services
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              Over the past few years, we’ve honed and adapted to the way we
              work. Here, we have outlined our web design process, from the
              initial discovery session through the website launch. Have a look!
            </p>
          </div>
        </div>

        <div className="container-fluid custom-ind-slider pe-0">
          <div className="we-serve__inner bg-black-slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                prevEl: ".we-serve__slider-button-prev",
                nextEl: ".we-serve__slider-button-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              className="we-serve__slider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="we-serve__item br-24">
                    <div className="ongoing-left-icon bg-pink">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="fn-24 text-white mt-3 mb-2 fw-bold">
                      {service.title}
                    </h3>
                    <p className="font-18 text-white pb-2">
                      {service.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
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

export default DigitalProductDesign;
