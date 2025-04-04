import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./SocialMediaDevelopmentApproach.css";

// Import images
import socialMedia17 from "../../../assets/images/socialmedia_17.svg";
import socialMedia18 from "../../../assets/images/socialmedia_18.svg";
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";

const SocialMediaDevelopmentApproach = () => {
  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Our Social Media App Development Approach
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              In order to produce an engaging and profitable product, we, as a
              reputed social media app development company, follow an agile
              development process with a blend of technical skill, imaginative
              design, user-focused testing, and iteration for developing a
              social media app that ensures maximum returns.
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
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              className="we-serve__slider"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="ongoing-left-icon bg-pink">
                    <img src={socialMedia17} alt="Customer Satisfaction" />
                  </div>
                  <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                    Customer Satisfaction
                  </div>
                  <p className="font-18 text-white pb-2">
                    Utilizing the latest frameworks and technologies, we create
                    innovative, user-friendly business solutions that prioritize
                    security, scalability, and meeting your specific
                    requirements.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="ongoing-left-icon bg-pink">
                    <img src={socialMedia18} alt="Agile Process" />
                  </div>
                  <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                    Agile Process
                  </div>
                  <p className="font-18 text-white pb-2">
                    Employing the Agile methodology, we optimize practices and
                    processes, ensuring the best outcomes through frequent
                    events.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="ongoing-left-icon bg-pink">
                    <img src={socialMedia17} alt="Dedicated Teams" />
                  </div>
                  <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                    Dedicated Teams
                  </div>
                  <p className="font-18 text-white pb-2">
                    Our skilled team of developers is committed to delivering
                    high-end business solutions using a diverse range of
                    frameworks and technologies.
                  </p>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="ongoing-left-icon bg-pink">
                    <img src={socialMedia18} alt="Agile Process" />
                  </div>
                  <div className="fn-24 text-white mt-3 mb-2 fw-bold">
                    Agile Process
                  </div>
                  <p className="font-18 text-white pb-2">
                    Employing the Agile methodology, we optimize practices and
                    processes, ensuring the best outcomes through frequent
                    events.
                  </p>
                </div>
              </SwiperSlide>
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

export default SocialMediaDevelopmentApproach;
