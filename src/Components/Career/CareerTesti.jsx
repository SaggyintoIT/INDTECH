import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import talented from "../../assets/images/talented.jpg";
import talented2 from "../../assets/images/talented_2.jpg";
import talented3 from "../../assets/images/talented_3.jpg";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";

const CareerTestimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="Testimonial bg-white">
      <div className="container-fluid py-80">
        <div className="bodypx">
          <div className="row">
            <div className="col-md-7 text-center text-sm-start">
              <h2>We're always looking for talented people</h2>
              <p>
                Don’t find a suitable position that matches your skill set, but
                still interested? Get in touch with us!
              </p>
            </div>
            <div className="col-md-5 text-end d-sm-block d-none">
              <a href="#main-footer" className="btn-darkblack fw-bold fn-16">
                <span>apply now</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row pb-md-4 pt-md-0">
          <div className="pt-3 px-md-0 px-4">
            <div className="testimonial">
              <div className="testimonial__inner">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="testimonial-slider talentedcareer"
                >
                  <div className="testimonial-slide">
                    <img
                      src={talented}
                      alt="talented"
                      className="w-100 myCareerTestimage"
                    />
                  </div>
                  <div className="testimonial-slide">
                    <img
                      src={talented2}
                      alt="talented"
                      className="w-100 myCareerTestimage"
                    />
                  </div>
                  <div className="testimonial-slide">
                    <img
                      src={talented3}
                      alt="talented"
                      className="w-100 myCareerTestimage"
                    />
                  </div>
                </Slider>
                <div className="btn-wrap bodypx">
                  <button
                    className="prev-btn com-btn mr-3"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <span>
                      <img src={left} alt="prev" />
                    </span>
                  </button>
                  <button
                    className="next-btn com-btn"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <span>
                      <img src={right} alt="next" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTestimonial;
