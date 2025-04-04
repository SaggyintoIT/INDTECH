import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AppIcon1 from "../../../assets/images/appicon_1.svg"; // Import app icon 1
import AppIcon2 from "../../../assets/images/appicon_2.svg"; // Import app icon 2
import LeftArrow from "../../../assets/images/left.png"; // Import left arrow
import RightArrow from "../../../assets/images/right.png"; // Import right arrow

const MobileAppSlider = () => {
  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="we-serve bg-dark py-80">
        <div className="container-fluid text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Some of the Interesting Mobile Apps that we are working on
          </h2>
          <div
            className="we-serve__text mx-auto font-18"
            style={{ maxWidth: "1000px" }}
          >
            <p>
              Explore some of the mobile app development projects that our team
              is working on. From a Fintech Startup to a Large Fortune 500
              Business, our programmers don't shy away from taking a challenge
              and building apps that are used by millions.
            </p>
          </div>
        </div>
        <div className="container-fluid custom-ind-slider pe-0">
          <div className="we-serve__inner bg-black-slider">
            <Swiper
              slidesPerView={3} // Display 3 slides at a time
              spaceBetween={30} // Space between slides
              navigation={{
                prevEl: ".we-serve__slider-button-prev", // Connect to the previous button
                nextEl: ".we-serve__slider-button-next", // Connect to the next button
              }}
              modules={[Navigation]} // Add Navigation module
              className="we-serve__slider"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="row">
                    <div className="col-5">
                      <div className="ongoing-left-icon bg-pink">
                        <img src={AppIcon1} alt="E-Commerce Mobile App" />
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="ongoing-right-bg light-pink">
                        In Progress
                      </div>
                    </div>
                  </div>
                  <div className="fn-24 text-white mb-3 link-white we-serve__item-title">
                    <div className="fn-24 text-white mt-3 fw-bold">
                      E-Commerce Mobile App for a Leading Retail Brand
                    </div>
                  </div>
                  <p className="font-18 text-white pb-2">
                    Crafting user-friendly mobile apps for online shopping
                    experiences tailored to meet customer needs.
                  </p>
                  <div className="ongoing-bottom">
                    <ul>
                      <li>Mobile Wallet Integration</li>
                      <li>Push Notifications</li>
                      <li>Customer Analytics</li>
                      <li>AR/VR Technology</li>
                      <li>Payment Gateway Integration</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="row">
                    <div className="col-5">
                      <div className="ongoing-left-icon bg-pink">
                        <img src={AppIcon2} alt="Educational App" />
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="ongoing-right-bg light-green">
                        In Progress
                      </div>
                    </div>
                  </div>
                  <div className="fn-24 text-white mb-3 link-white we-serve__item-title">
                    <div className="fn-24 text-white mt-3 fw-bold">
                      Educational App for a Nonprofit Organization
                    </div>
                  </div>
                  <p className="font-18 text-white pb-2">
                    Our experts have developed this AI-powered project that
                    automates consultation appointment scheduling and more.
                  </p>
                  <div className="ongoing-bottom">
                    <ul>
                      <li>Mobile Wallet Integration</li>
                      <li>Push Notifications</li>
                      <li>Customer Analytics</li>
                      <li>AR/VR Technology</li>
                      <li>Payment Gateway Integration</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              {/* Repeat Slides for Demonstration */}
              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="row">
                    <div className="col-5">
                      <div className="ongoing-left-icon bg-pink">
                        <img src={AppIcon1} alt="E-Commerce Mobile App" />
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="ongoing-right-bg light-pink">
                        In Progress
                      </div>
                    </div>
                  </div>
                  <div className="fn-24 text-white mb-3 link-white we-serve__item-title">
                    <div className="fn-24 text-white mt-3 fw-bold">
                      E-Commerce Mobile App for a Leading Retail Brand
                    </div>
                  </div>
                  <p className="font-18 text-white pb-2">
                    Crafting user-friendly mobile apps for online shopping
                    experiences tailored to meet customer needs.
                  </p>
                  <div className="ongoing-bottom">
                    <ul>
                      <li>Mobile Wallet Integration</li>
                      <li>Push Notifications</li>
                      <li>Customer Analytics</li>
                      <li>AR/VR Technology</li>
                      <li>Payment Gateway Integration</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="we-serve__item br-24">
                  <div className="row">
                    <div className="col-5">
                      <div className="ongoing-left-icon bg-pink">
                        <img src={AppIcon2} alt="Educational App" />
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="ongoing-right-bg light-green">
                        In Progress
                      </div>
                    </div>
                  </div>
                  <div className="fn-24 text-white mb-3 link-white we-serve__item-title">
                    <div className="fn-24 text-white mt-3 fw-bold">
                      Educational App for a Nonprofit Organization
                    </div>
                  </div>
                  <p className="font-18 text-white pb-2">
                    Our experts have developed this AI-powered project that
                    automates consultation appointment scheduling and more.
                  </p>
                  <div className="ongoing-bottom">
                    <ul>
                      <li>Mobile Wallet Integration</li>
                      <li>Push Notifications</li>
                      <li>Customer Analytics</li>
                      <li>AR/VR Technology</li>
                      <li>Payment Gateway Integration</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation Arrows */}
            <div className="we-serve__nav d-sm-flex d-black mt-5 justify-content-between">
              <div className="d-flex gap-3 ms-auto">
                <div
                  className="we-serve__slider-button-prev swiper-button-disabled"
                  tabIndex="-1"
                  role="button"
                  aria-label="Previous slide"
                >
                  <span>
                    <img src={LeftArrow} alt="Previous" />
                  </span>
                </div>
                <div
                  className="we-serve__slider-button-next"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                >
                  <span>
                    <img src={RightArrow} alt="Next" />
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

export default MobileAppSlider;
