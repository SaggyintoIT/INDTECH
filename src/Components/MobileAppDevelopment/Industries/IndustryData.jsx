import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import educationImg from "../../assets/images/education.jpg";
import sliderImg from "../../assets/images/slider.jpg";
import eCommerceImg from "../../assets/images/eCommerce.webp";
import entertainmentImg from "../../assets/images/Entertainment.webp";
import healthcareImg from "../../assets/images/Healthcare.webp";

const IndustriesSection = () => {
  return (
    <>
      <section className="industries" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row px-0">
            <div
              className="w-100"
              id="background"
              style={{ backgroundImage: `url(${educationImg})` }}
            >
              <div
                className="background-panel"
                id="background-panel-0"
                style={{ backgroundImage: `url(${sliderImg})` }}
              ></div>
              <div
                className="background-panel"
                id="background-panel-1"
                style={{ backgroundImage: `url(${eCommerceImg})` }}
              ></div>
              <div
                className="background-panel"
                id="background-panel-2"
                style={{ backgroundImage: `url(${entertainmentImg})` }}
              ></div>
              <div
                className="background-panel"
                id="background-panel-3"
                style={{ backgroundImage: `url(${healthcareImg})` }}
              ></div>

              <div className="h-100">
                <div className="page-industries-title">
                  <h2 className="page-title wow fadeInDown text-white px-md-0 px-3">
                    Industry-focused Insights
                  </h2>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={1}
                  speed={3500}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  breakpoints={{
                    1920: { slidesPerView: 4 },
                    992: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  }}
                  className="industries-section"
                >
                  {[
                    { link: "finance", title: "Banking & Insurance" },
                    { link: "education", title: "Education" },
                    { link: "portfolio", title: "Retail & E-Commerce" },
                    { link: "healthcare", title: "Healthcare" },
                    { link: "finance", title: "Banking & Insurance" },
                  ].map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="swiper-slide btnhoverimg"
                    >
                      <div className="slide-content">
                        <a href={item.link}>
                          <h3 className="slide-title">{item.title}</h3>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesSection;
