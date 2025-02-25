// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import images
// import amanImage from "../../assets/images/aman.svg";
// import ayushImage from "../../assets/images/Ayush.svg";
// import dhirendraImage from "../../assets/images/Dhirendra.svg";
// import leftArrow from "../../assets/images/left.svg";
// import rightArrow from "../../assets/images/right.svg";
// import "./Testimonials.css";
// const TestimonialSection = () => {
//   const sliderRef = useRef(null);

//   // Slick Carousel settings
//   const settings = {
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     infinite: true,
//     speed: 300,
//     autoplaySpeed: 5000,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2.5,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   // Custom navigation functions
//   const goToPrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const goToNext = () => {
//     sliderRef.current.slickNext();
//   };

//   return (
//     <section className="bodypx Testimonial bg-white py-80 pb-1">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <h2>Client's Testimonial</h2>
//             <p>
//               Client success stories showcasing IND TechMark expertise in mobile
//               app development, <br />
//               web development, and digital transformation services
//             </p>
//           </div>

//           <div className="pt-3 px-0">
//             <div className="testimonial">
//               <div className="testimonial__inner">
//                 {/* Slick Carousel */}
//                 <Slider ref={sliderRef} {...settings}>
//                   {/* Testimonial Slide 1 */}
//                   <div className="testimonial-slide">
//                     <div className="testimonial_box">
//                       <div className="testimonial_box-inner">
//                         <div className="testimonial_box-top">
//                           <div className="testimonial_box-text">
//                             <p>
//                               We were happy that we found the best UI/UX Design
//                               agency and best product design agency to work
//                               with. We will definitely continue to work with
//                               them as we have greatest output.
//                             </p>
//                             <div className="d-flex align-items-center d-md-none">
//                               <div className="rate me-auto">
//                                 <input
//                                   type="radio"
//                                   id="star5"
//                                   name="rate"
//                                   value="5"
//                                 />
//                                 <label htmlFor="star5" title="text">
//                                   5 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star4"
//                                   name="rate"
//                                   value="4"
//                                 />
//                                 <label htmlFor="star4" title="text">
//                                   4 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star3"
//                                   name="rate"
//                                   value="3"
//                                 />
//                                 <label htmlFor="star3" title="text">
//                                   3 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star2"
//                                   name="rate"
//                                   value="2"
//                                 />
//                                 <label htmlFor="star2" title="text">
//                                   2 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star1"
//                                   name="rate"
//                                   value="1"
//                                 />
//                                 <label htmlFor="star1" title="text">
//                                   1 star
//                                 </label>
//                               </div>
//                               <span className="fw-bold fn-18">3.0 / 3.0</span>
//                             </div>
//                           </div>
//                           <div className="testimonial_box-shape"></div>
//                         </div>
//                         <div className="testimonial_box-bottom">
//                           <div className="testimonial_box-profile align-items-center">
//                             <div className="testimonial_box-img">
//                               <img src={amanImage} alt="Aman" />
//                             </div>
//                             <div className="testimonial_box-info">
//                               <div className="testimonial_box-name">
//                                 <h3 className="mb-0">Aman Singh</h3>
//                                 <p className="mb-1">Jaipur, Rajasthan</p>
//                               </div>
//                             </div>
//                             <div className="d-md-flex align-items-center ps-3 d-none">
//                               <div className="rate ms-auto">
//                                 <input
//                                   type="radio"
//                                   id="star5"
//                                   name="rate"
//                                   value="5"
//                                 />
//                                 <label htmlFor="star5" title="text">
//                                   5 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star4"
//                                   name="rate"
//                                   value="4"
//                                 />
//                                 <label htmlFor="star4" title="text">
//                                   4 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star3"
//                                   name="rate"
//                                   value="3"
//                                 />
//                                 <label htmlFor="star3" title="text">
//                                   3 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star2"
//                                   name="rate"
//                                   value="2"
//                                 />
//                                 <label htmlFor="star2" title="text">
//                                   2 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star1"
//                                   name="rate"
//                                   value="1"
//                                 />
//                                 <label htmlFor="star1" title="text">
//                                   1 star
//                                 </label>
//                               </div>
//                               <span className="fw-bold fn-18">3.0 / 3.0</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Testimonial Slide 2 */}
//                   <div className="testimonial-slide">
//                     <div className="testimonial_box">
//                       <div className="testimonial_box-inner">
//                         <div className="testimonial_box-top">
//                           <div className="testimonial_box-text">
//                             <p>
//                               Their ability to produce high-quality, on-brand
//                               design elements and animation within days was a
//                               game changer!
//                             </p>
//                             <div className="d-flex align-items-center d-md-none">
//                               <div className="rate me-auto">
//                                 <input
//                                   type="radio"
//                                   id="star5"
//                                   name="rate"
//                                   value="5"
//                                 />
//                                 <label htmlFor="star5" title="text">
//                                   5 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star4"
//                                   name="rate"
//                                   value="4"
//                                 />
//                                 <label htmlFor="star4" title="text">
//                                   4 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star3"
//                                   name="rate"
//                                   value="3"
//                                 />
//                                 <label htmlFor="star3" title="text">
//                                   3 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star2"
//                                   name="rate"
//                                   value="2"
//                                 />
//                                 <label htmlFor="star2" title="text">
//                                   2 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star1"
//                                   name="rate"
//                                   value="1"
//                                 />
//                                 <label htmlFor="star1" title="text">
//                                   1 star
//                                 </label>
//                               </div>
//                               <span className="fw-bold fn-18">3.0 / 3.0</span>
//                             </div>
//                           </div>
//                           <div className="testimonial_box-shape"></div>
//                         </div>
//                         <div className="testimonial_box-bottom">
//                           <div className="testimonial_box-profile align-items-center">
//                             <div className="testimonial_box-img">
//                               <img src={ayushImage} alt="Ayush" />
//                             </div>
//                             <div className="testimonial_box-info">
//                               <div className="testimonial_box-name">
//                                 <h3 className="mb-0">Ayush Kumar</h3>
//                                 <p className="mb-1">Jaipur, Rajasthan</p>
//                               </div>
//                             </div>
//                             <div className="d-md-flex align-items-center ps-3 d-none">
//                               <div className="rate ms-auto">
//                                 <input
//                                   type="radio"
//                                   id="star5"
//                                   name="rate"
//                                   value="5"
//                                 />
//                                 <label htmlFor="star5" title="text">
//                                   5 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star4"
//                                   name="rate"
//                                   value="4"
//                                 />
//                                 <label htmlFor="star4" title="text">
//                                   4 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star3"
//                                   name="rate"
//                                   value="3"
//                                 />
//                                 <label htmlFor="star3" title="text">
//                                   3 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star2"
//                                   name="rate"
//                                   value="2"
//                                 />
//                                 <label htmlFor="star2" title="text">
//                                   2 stars
//                                 </label>
//                                 <input
//                                   type="radio"
//                                   id="star1"
//                                   name="rate"
//                                   value="1"
//                                 />
//                                 <label htmlFor="star1" title="text">
//                                   1 star
//                                 </label>
//                               </div>
//                               <span className="fw-bold fn-18">3.0 / 3.0</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Add more testimonial slides as needed */}
//                 </Slider>

//                 {/* Custom Navigation Buttons */}
//                 <div className="btn-wrap">
//                   <button className="prev-btn com-btn mr-3" onClick={goToPrev}>
//                     <span>
//                       <img src={leftArrow} alt="Previous" />
//                     </span>
//                   </button>
//                   <div className="progress-bar"></div> {/* Progress Line */}
//                   <button className="next-btn com-btn" onClick={goToNext}>
//                     <span>
//                       <img src={rightArrow} alt="Next" />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import amanImage from "../../assets/images/aman.svg";
import ayushImage from "../../assets/images/Ayush.svg";
import dhirendraImage from "../../assets/images/Dhirendra.svg";
import leftArrow from "../../assets/images/left.svg";
import rightArrow from "../../assets/images/right.svg";
import "./Testimonials.css";

const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slick Carousel settings
  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 5000,
    autoplay: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Custom navigation functions
  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const testimonials = [
    {
      image: amanImage,
      name: "Aman Singh",
      location: "Jaipur, Rajasthan",
      review:
        "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    },
    {
      image: ayushImage,
      name: "Ayush Kumar",
      location: "Jaipur, Rajasthan",
      review:
        "Their ability to produce high-quality, on-brand design elements and animation within days was a game changer!",
    },
    {
      image: dhirendraImage,
      name: "Dhirendra Singh",
      location: "Delhi, India",
      review:
        "The professionalism and attention to detail of IND TechMark's team were outstanding. We highly recommend them for any digital transformation projects.",
    },
  ];

  return (
    <section className="bodypx Testimonial bg-white py-80 pb-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Client's Testimonial</h2>
            <p>
              Client success stories showcasing IND TechMark expertise in mobile
              app development, web development, and digital transformation
              services
            </p>
          </div>

          <div className="pt-3 px-0">
            <div className="testimonial">
              <div className="testimonial__inner">
                {/* Slick Carousel */}
                <Slider ref={sliderRef} {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                      <div className="testimonial_box">
                        <div className="testimonial_box-inner">
                          <div className="testimonial_box-top">
                            <div className="testimonial_box-text">
                              <p>{testimonial.review}</p>
                            </div>
                          </div>
                          <div className="testimonial_box-bottom">
                            <div className="testimonial_box-profile align-items-center">
                              <div className="testimonial_box-img">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                />
                              </div>
                              <div className="testimonial_box-info">
                                <h3 className="mb-0">{testimonial.name}</h3>
                                <p className="mb-1">{testimonial.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* Custom Navigation Buttons */}
                <div className="btn-wrap">
                  <button className="prev-btn com-btn mr-3" onClick={goToPrev}>
                    <span>
                      <img src={leftArrow} alt="Previous" />
                    </span>
                  </button>

                  {/* Progress Bar */}
                  <div className="progress-bar">
                    {[...Array(testimonials.length)].map((_, index) => (
                      <span
                        key={index}
                        className={`progress-segment ${
                          index === currentSlide % testimonials.length
                            ? "active"
                            : ""
                        }`}
                      ></span>
                    ))}
                  </div>

                  <button className="next-btn com-btn" onClick={goToNext}>
                    <span>
                      <img src={rightArrow} alt="Next" />
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

export default TestimonialSection;
