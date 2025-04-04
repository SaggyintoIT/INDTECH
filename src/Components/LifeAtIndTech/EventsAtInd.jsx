import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

// Import images
import Dicelebrating1 from "../../assets/images/Dicelebrating_1.jpg";
import Dicelebrating2 from "../../assets/images/Dicelebrating_2.jpg";
import Dicelebrating3 from "../../assets/images/Dicelebrating_3.jpg";
import Dicelebrating4 from "../../assets/images/Dicelebrating_4.jpg";
import Dicelebrating6 from "../../assets/images/Dicelebrating_6.jpg";
import Dicelebrating7 from "../../assets/images/Dicelebrating_7.jpg";
import Dicelebrating8 from "../../assets/images/Dicelebrating_8.jpg";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";
import FreeCons from "../OurTeam/FreeCons";

const EventsFestivals = () => {
  useEffect(() => {
    // Initialize Slick Carousel
    const $carousel = $(".eventsfestivals");
    $carousel.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      loop: true,
      speed: 300,
      autoplaySpeed: 5000,
      autoplay: true,
    });

    // Add event listeners for custom buttons
    $(".prev-btn").click(function () {
      $carousel.slick("slickPrev");
    });

    $(".next-btn").click(function () {
      $carousel.slick("slickNext");
    });

    // Disable prev button initially
    $(".prev-btn").addClass("slick-disabled");

    // Update button states on carousel change
    $carousel.on("afterChange", function () {
      if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn").addClass("slick-disabled");
      } else {
        $(".prev-btn").removeClass("slick-disabled");
      }
      if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn").addClass("slick-disabled");
      } else {
        $(".next-btn").removeClass("slick-disabled");
      }
    });

    // Clean up Slick Carousel on unmount
    return () => {
      $carousel.slick("unslick"); // Destroy Slick instance
    };
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="container-fluid py-80">
          <div className="bodypx">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>
                  Events, Celebrations, Functions, Festivals and much more!
                </h2>
                <p className="px-md-5">
                  At INDTechMark, we believe in enjoying each and every moment
                  of life. We are enjoying freedom of speech, expressions,
                  emotions, thoughts and most importantly sharing fun.
                  Therefore, our life at MI is full of hustle- bustle,
                  collisions and recreation at all level of personal and
                  professional aspects.
                </p>
              </div>
              <div className="eventsfestivals">
                <div className="dicelebrating">
                  <ul className="d-flex justify-content-between ps-0 align-items-center">
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating1}
                        alt="Dicelebrating 1"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating2}
                        alt="Dicelebrating 2"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating3}
                        alt="Dicelebrating 3"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating4}
                        alt="Dicelebrating 4"
                      />
                    </li>
                  </ul>
                  <ul className="d-flex justify-content-between ps-0 lastch">
                    <li className="w-100 p-all">
                      <div className="d-flex align-items-center h-100">
                        <h2>
                          Diwali Celebration <br /> 2024
                        </h2>
                      </div>
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating6}
                        alt="Dicelebrating 6"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating7}
                        alt="Dicelebrating 7"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating8}
                        alt="Dicelebrating 8"
                      />
                    </li>
                  </ul>
                </div>
                <div className="dicelebrating">
                  <ul className="d-flex justify-content-between ps-0 align-items-center">
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating1}
                        alt="Dicelebrating 1"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating2}
                        alt="Dicelebrating 2"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating3}
                        alt="Dicelebrating 3"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating4}
                        alt="Dicelebrating 4"
                      />
                    </li>
                  </ul>
                  <ul className="d-flex justify-content-between ps-0 lastch">
                    <li className="w-100 p-all">
                      <div className="d-flex align-items-center h-100">
                        <h2>
                          Diwali Celebration <br /> 2024
                        </h2>
                      </div>
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating6}
                        alt="Dicelebrating 6"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating7}
                        alt="Dicelebrating 7"
                      />
                    </li>
                    <li className="w-100 p-all">
                      <img
                        className="w-100 EventImg"
                        src={Dicelebrating8}
                        alt="Dicelebrating 8"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-wrap eventsarrow">
                <button className="prev-btn com-btn mr-3">
                  <span>
                    <img src={leftArrow} alt="Left Arrow" />
                  </span>
                </button>
                <button className="next-btn com-btn">
                  <span>
                    <img src={rightArrow} alt="Right Arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FreeCons />
    </>
  );
};

export default EventsFestivals;
