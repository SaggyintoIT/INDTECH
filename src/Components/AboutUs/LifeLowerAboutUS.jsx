// import React, { useEffect, useState } from "react";

// // Import images correctly
// import c1 from "../../assets/images/celebration-4.jpg";
// import c2 from "../../assets/images/celebration-5.jpg";
// import c3 from "../../assets/images/celebration-6.jpg";
// import c4 from "../../assets/images/celebration-7.jpg";
// import c5 from "../../assets/images/celebration-8.jpg";
// import c6 from "../../assets/images/celebration-9.jpg";
// import c7 from "../../assets/images/celebration-10.jpg";
// import c8 from "../../assets/images/celebration-11.jpg";
// import c9 from "../../assets/images/celebration-12.jpg";
// import c10 from "../../assets/images/celebration-13.jpg";
// import c11 from "../../assets/images/celebration-14.jpg";

// import join1 from "../../assets/images/joinus_1.jpg";
// import join2 from "../../assets/images/joinus_2.jpg";
// import join3 from "../../assets/images/joinus_3.jpg";
// import discuss from "../../assets/images/Discussimg.svg";

// const Life = () => {
//   const counters = [
//     { value: 700, text: "Projects Delivered Successfully" },
//     { value: 50, text: "Satisfied Clients Across the Globe" },
//     { value: 500, text: "Happy Customers" },
//     { value: 650, text: "Experts Under the Same Roof" },
//   ];

//   const [counts, setCounts] = useState(counters.map(() => 0));
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prevCounts) =>
//         prevCounts.map((count, index) =>
//           count < counters[index].value ? count + 1 : count
//         )
//       );
//     }, 10);

//     return () => clearInterval(interval);
//   }, []);

//   const images = [
//     {
//       big: c1,
//       smallOne: c2,
//       smallTwo: c3,
//     },
//     {
//       big: c4,
//       smallOne: c5,
//       smallTwo: c6,
//     },
//     {
//       big: c7,
//       smallOne: c8,
//       smallTwo: c9,
//     },
//     {
//       big: c10,
//       smallOne: c11,
//       smallTwo: c9,
//     },
//   ];

//   return (
//     <>
//       <section
//         className="bg-off-white overflow-hidden py-80"
//         id="lifeandculture"
//       >
//         <div className="bodypx pb-4">
//           <div className="container-fluid">
//             <div className="row align-items-md-center">
//               <div className="col-md-7 text-center text-sm-start">
//                 <h2>Life @INDTechMark</h2>
//                 <p>
//                   We work, laugh, celebrate, share experiences, and grow
//                   stronger together!!!
//                 </p>
//               </div>
//               <div className="col-md-5 text-md-end text-center">
//                 <a
//                   href="portfolio"
//                   className="btn-darkblack mt-2 mt-xl-3 fw-bold fn-16"
//                 >
//                   <span>Explore More</span> <i className="icon icon-arrow"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12 p-0">
//               <div className="section-life-culture mt-40">
//                 <div id="marquee">
//                   <div className="view">
//                     <div className="pic-container">
//                       {images.map((image, index) => (
//                         <div className="pic" key={index}>
//                           <div className="img-div">
//                             <div className="img-big">
//                               <img
//                                 width="750"
//                                 height="500"
//                                 src={image.big}
//                                 loading="lazy"
//                                 alt="celebration"
//                                 className="img-fluid"
//                               />
//                             </div>
//                             <div className="img-small">
//                               <div className="small-one">
//                                 <img
//                                   width="750"
//                                   height="500"
//                                   src={image.smallOne}
//                                   loading="lazy"
//                                   alt="celebration"
//                                   className="img-fluid"
//                                 />
//                               </div>
//                               <div className="small-two">
//                                 <img
//                                   width="750"
//                                   height="500"
//                                   src={image.smallTwo}
//                                   loading="lazy"
//                                   alt="celebration"
//                                   className="img-fluid"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div id="marquee">
//                   <div className="view">
//                     <div className="pic-container pic-container-reverse">
//                       {images.map((image, index) => (
//                         <div className="pic" key={index}>
//                           <div className="img-div">
//                             <div className="img-big">
//                               <img
//                                 width="750"
//                                 height="500"
//                                 src={image.big}
//                                 loading="lazy"
//                                 alt="celebration"
//                                 className="img-fluid"
//                               />
//                             </div>
//                             <div className="img-small">
//                               <div className="small-one">
//                                 <img
//                                   width="750"
//                                   height="500"
//                                   src={image.smallOne}
//                                   loading="lazy"
//                                   alt="celebration"
//                                   className="img-fluid"
//                                 />
//                               </div>
//                               <div className="small-two">
//                                 <img
//                                   width="750"
//                                   height="500"
//                                   src={image.smallTwo}
//                                   loading="lazy"
//                                   alt="celebration"
//                                   className="img-fluid"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bodypx bg-white" data-aos="fade-up">
//         <div className="container-fluid px-md-0 py-80">
//           <div className="row">
//             <div className="col-md-5 pe-md-0">
//               <div className="redblackbg text-center text-md-start radius-left py-5 px-4 px-lg-5 h-100">
//                 <span className="fn-36 text-white pb-3 d-block">
//                   We Transform
//                 </span>
//                 <h2 className="text-white">
//                   Every Industry & Business Process.
//                 </h2>
//               </div>
//             </div>
//             <div className="col-md-7 ps-md-0">
//               <ul className="left-counter counter-list list-unstyled mb-0 text-center clientSwiper radius-right py-5 px-3">
//                 {counters.map((counter, index) => (
//                   <li key={index}>
//                     <div className="number_counter">
//                       <div className="counter-text">
//                         <span className="num_count">{counts[index]}</span>+
//                       </div>
//                       <p className="mb-0">{counter.text}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bodypx bg-white aos-init aos-animate">
//         <div className="container-fluid px-md-0">
//           <div className="row align-items-center">
//             <div className="col-md-5">
//               <div className="text-center text-md-start wow fadeInLeft radius-left py-2 pe-md-5 h-100">
//                 <h2>
//                   Join the <br /> INDTech Mark Team!
//                 </h2>
//                 <p>
//                   Innovate with the latest and greatest technologies & get to
//                   work on some of the coolest projects you can imagine.
//                 </p>
//                 <a
//                   href="contact-us"
//                   className="btn-darkblack mt-2 mt-xl-3 fw-bold"
//                 >
//                   <span>Apply Now</span>
//                   <i className="icon icon-arrow"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-7 mt-md-0 mt-4">
//               <div className="row">
//                 <div className="col-6">
//                   <img
//                     src={join1}
//                     alt="office team"
//                     className="img-fluid br-24 w-100 h-100 pe-md-2"
//                   />
//                 </div>
//                 <div className="col-6">
//                   <div className="pb-md-3 pb-2">
//                     <img
//                       src={join2}
//                       alt="entrance area"
//                       className="img-fluid br-24 w-100"
//                     />
//                   </div>
//                   <div className="pt-md-3 pt-3">
//                     <img
//                       src={join3}
//                       alt="working team"
//                       className="img-fluid br-24 w-100"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bodypx py-80 bg-white">
//         <div className="redblackbg rounded30 px-md-4 psm-ph">
//           <div className="container-fluid">
//             <div className="row align-items-center">
//               <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
//                 <h2 className="text-white fs-50 fw-400">
//                   Let’s Discuss{" "}
//                   <span className="text-white fw-600">Your Project</span>
//                 </h2>
//                 <p className="fn-24 text-white">
//                   Get a free consultation to discuss how we will transform your
//                   idea into an amazing digital product.
//                 </p>
//                 <a
//                   href="get-free-consultation"
//                   className="themeBtn mt-2 mt-xl-3 fw-bold"
//                 >
//                   <span>Get free consultation</span>
//                   <i className="icon icon-arrow"></i>
//                 </a>
//               </div>
//               <div className="col-md-5 text-center text-md-end pe-md-5">
//                 <img className="my-4 pb-1" src={discuss} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Life;
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import c1 from "../../assets/images/celebration-4.jpg";
import c2 from "../../assets/images/celebration-5.jpg";
import c3 from "../../assets/images/celebration-6.jpg";
import c4 from "../../assets/images/celebration-7.jpg";
import c5 from "../../assets/images/celebration-8.jpg";
import c6 from "../../assets/images/celebration-9.jpg";
import c7 from "../../assets/images/celebration-10.jpg";
import c8 from "../../assets/images/celebration-11.jpg";
import c9 from "../../assets/images/celebration-12.jpg";
import c10 from "../../assets/images/celebration-13.jpg";
import c11 from "../../assets/images/celebration-14.jpg";
import join1 from "../../assets/images/joinus_1.jpg";
import join2 from "../../assets/images/joinus_2.jpg";
import join3 from "../../assets/images/joinus_3.jpg";
import discuss from "../../assets/images/Discussimg.svg";

const StatsSection = () => {
  // Stats data with counting animation
  const stats = [
    { number: 700, text: "Projects Delivered Successfully" },
    { number: 50, text: "Satisfied Clients Across the Globe" },
    { number: 500, text: "Happy Customers" },
    { number: 650, text: "Experts Under the Same Roof" },
  ];

  // Gallery images
  const images = [
    { big: c1, smallOne: c2, smallTwo: c3 },
    { big: c4, smallOne: c5, smallTwo: c6 },
    { big: c7, smallOne: c8, smallTwo: c9 },
    { big: c10, smallOne: c11, smallTwo: c9 },
  ];

  // Counter component with Intersection Observer
  const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observerRef.current.unobserve(entry.target);
          }
        });
      }, options);

      if (counterRef.current) {
        observerRef.current.observe(counterRef.current);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

    const startCounting = () => {
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(Math.ceil(current));
        }
      }, 16);
    };

    return (
      <span className="num_count" ref={counterRef}>
        {count}
      </span>
    );
  };

  return (
    <>
      {/* Life @INDTechMark Section */}
      <section
        className="bg-off-white overflow-hidden py-80"
        id="lifeandculture"
      >
        <div className="bodypx pb-4">
          <div className="container-fluid">
            <div className="row align-items-md-center">
              <div className="col-md-7 text-center text-sm-start">
                <h2>Life @INDTechMark</h2>
                <p>
                  We work, laugh, celebrate, share experiences, and grow
                  stronger together!!!
                </p>
              </div>
              <div className="col-md-5 text-md-end text-center">
                <a
                  href="portfolio"
                  className="btn-darkblack mt-2 mt-xl-3 fw-bold fn-16"
                >
                  <span>Explore More</span> <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="section-life-culture mt-40">
                {/* Image Marquee 1 */}
                <div id="marquee">
                  <div className="view">
                    <div className="pic-container">
                      {images.map((image, index) => (
                        <div className="pic" key={index}>
                          <div className="img-div">
                            <div className="img-big">
                              <img
                                width="750"
                                height="500"
                                src={image.big}
                                loading="lazy"
                                alt="celebration"
                                className="img-fluid"
                              />
                            </div>
                            <div className="img-small">
                              <div className="small-one">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallOne}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="small-two">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallTwo}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Marquee 2 */}
                <div id="marquee">
                  <div className="view">
                    <div className="pic-container pic-container-reverse">
                      {images.map((image, index) => (
                        <div className="pic" key={index}>
                          <div className="img-div">
                            <div className="img-big">
                              <img
                                width="750"
                                height="500"
                                src={image.big}
                                loading="lazy"
                                alt="celebration"
                                className="img-fluid"
                              />
                            </div>
                            <div className="img-small">
                              <div className="small-one">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallOne}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="small-two">
                                <img
                                  width="750"
                                  height="500"
                                  src={image.smallTwo}
                                  loading="lazy"
                                  alt="celebration"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counting Animation */}
      <section
        className="bodypx bg-white aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="container-fluid px-md-0 py-80">
          <div className="row">
            <div className="col-md-5 pe-md-0">
              <div className="redblackbg text-center text-md-start radius-left py-5 px-4 px-lg-5 h-100">
                <span className="fn-36 text-white pb-3 d-block">
                  We Transform
                </span>
                <h2 className="text-white">
                  Every Industry & Business Process.
                </h2>
              </div>
            </div>
            <div className="col-md-7 ps-md-0">
              <ul className="left-counter counter-list list-unstyled mb-0 text-center clientSwiper radius-right py-5 px-3">
                {stats.map((stat, index) => (
                  <li key={index}>
                    <div className="number_counter">
                      <div className="counter-text">
                        <Counter target={stat.number} /> +
                      </div>
                      <p className="mb-0">{stat.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="bodypx bg-white aos-init aos-animate">
        <div className="container-fluid px-md-0">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="text-center text-md-start wow fadeInLeft radius-left py-2 pe-md-5 h-100">
                <h2>
                  Join the <br /> INDTech Mark Team!
                </h2>
                <p>
                  Innovate with the latest and greatest technologies & get to
                  work on some of the coolest projects you can imagine.
                </p>
                <a
                  href="contact-us"
                  className="btn-darkblack mt-2 mt-xl-3 fw-bold"
                >
                  <span>Apply Now</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-4">
              <div className="row">
                <div className="col-6">
                  <img
                    src={join1}
                    alt="office team"
                    className="img-fluid br-24 w-100 h-100 pe-md-2"
                  />
                </div>
                <div className="col-6">
                  <div className="pb-md-3 pb-2">
                    <img
                      src={join2}
                      alt="entrance area"
                      className="img-fluid br-24 w-100"
                    />
                  </div>
                  <div className="pt-md-3 pt-3">
                    <img
                      src={join3}
                      alt="working team"
                      className="img-fluid br-24 w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Discuss Section */}
      <section className="bodypx py-80 bg-white">
        <div className="redblackbg rounded30 px-md-4 psm-ph">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
                <h2 className="text-white fs-50 fw-400">
                  Let's Discuss{" "}
                  <span className="text-white fw-600">Your Project</span>
                </h2>
                <p className="fn-24 text-white">
                  Get a free consultation to discuss how we will transform your
                  idea into an amazing digital product.
                </p>
                <a
                  href="get-free-consultation"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Get free consultation</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
              <div className="col-md-5 text-center text-md-end pe-md-5">
                <img
                  className="my-4 pb-1"
                  src={discuss}
                  alt="Discussion illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
