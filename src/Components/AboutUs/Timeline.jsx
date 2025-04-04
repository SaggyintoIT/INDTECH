// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import TimelineImage from "../../assets/images/Timeline.jpg";
// import ActiveBulletImage from "../../assets/images/timelineslideractive.png"; // Add your active bullet image

// const timelineData = [
//   {
//     year: "2024",
//     title: "INDTechMark",
//     description:
//       "We started with just 5 employees working passionately with a vision to grow. With utmost dedication, we bagged our first brand project within a month of our incorporation. Set the grounds for success and unprecedented opportunities.",
//     image: TimelineImage,
//   },
//   {
//     year: "2023",
//     title: "INDTechMark",
//     description:
//       "Expanded our services and onboarded new clients, strengthening our industry presence.",
//     image: TimelineImage,
//   },
//   {
//     year: "2022",
//     title: "INDTechMark",
//     description:
//       "Focused on innovation and product development, leading to significant growth.",
//     image: TimelineImage,
//   },
//   {
//     year: "2021",
//     title: "INDTechMark",
//     description:
//       "Launched our company with a mission to provide cutting-edge technology solutions.",
//     image: TimelineImage,
//   },
// ];

// const TimelineSlider = () => {
//   return (
//     <section className="bodypx bg-red py-80 overflow pos-r ipadpx">
//       <h2 className="text-white pb-3">A Timeline Of Our Journey</h2>
//       <div className="textouter timelinebgtext">History</div>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         loop={false}
//         slidesPerView={1}
//         autoHeight={true}
//         speed={1000}
//         autoplay={{ delay: 3000 }}
//         pagination={{
//           clickable: true,
//           el: ".swiper-pagination",
//           bulletClass: "custom-bullet",
//           bulletActiveClass: "custom-bullet-active",
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="timelineslider"
//       >
//         {timelineData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="text-white text-start">
//                   <span className="fn-24 fw-600 mb-2 d-block">{item.year}</span>
//                   <span className="fn-24 fw-600">{item.title}</span>
//                   <p className="fn-20 py-3 pe-md-5">{item.description}</p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="px-md-5 px-3 dotbg timelineimg">
//                   <img
//                     className="w-100 rounded30"
//                     src={item.image}
//                     alt={`Timeline ${item.year}`}
//                   />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Progress Bar */}
//       <div
//         className="progress-container"
//         style={{
//           width: "30%",
//           backgroundColor: "#ccc",
//           height: "2px",
//           marginTop: "20px",
//           position: "relative",
//           marginRight: "5rem",
//         }}
//       >
//         <div
//           className="progress-bar"
//           style={{
//             width: "100%",
//             backgroundColor: "transparent",
//             height: "100%",
//           }}
//         ></div>
//       </div>

//       {/* Custom Pagination */}
//       <div className="swiper-pagination custom-pagination"></div>

//       {/* Swiper Navigation */}
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>

//       <style jsx>{`
//         .custom-bullet-active {
//           opacity: 1;
//           background-image: url(${ActiveBulletImage}) !important;
//           background-size: cover;
//           width: 3rem;
//           height: 3rem;
//           background-position: center;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TimelineSlider;

// src/components/Timeline.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Timeline.css";
import TimelineImage from "../../assets/images/Timeline.jpg";
import ActiveBulletImage from "../../assets/images/timelineslideractive.png";

const timelineData = [
  {
    year: "2024",
    title: "INDTechMark",
    description:
      "We started with just 5 employees working passionately with a vision to grow. With utmost dedication, we bagged our first brand project within a month of our incorporation. Set the grounds for success and unprecedented opportunities.",
    image: TimelineImage,
  },
  {
    year: "2023",
    title: "INDTechMark",
    description:
      "Expanded our services and onboarded new clients, strengthening our industry presence.",
    image: TimelineImage,
  },
  {
    year: "2022",
    title: "INDTechMark",
    description:
      "Focused on innovation and product development, leading to significant growth.",
    image: TimelineImage,
  },
  {
    year: "2021",
    title: "INDTechMark",
    description:
      "Launched our company with a mission to provide cutting-edge technology solutions.",
    image: TimelineImage,
  },
];

const TimelineSlider = () => {
  return (
    <section className="bodypx bg-red py-80 overflow pos-r ipadpx">
      <h2 className="text-white pb-3">A Timeline Of Our Journey</h2>
      <div className="textouter timelinebgtext">History</div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={false}
        slidesPerView={1}
        autoHeight={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container timelineslider swiper-wrapper"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="row">
              <div className="col-lg-6">
                <div className="text-white text-start">
                  <span className="fn-24 fw-600 mb-2 d-block">{item.year}</span>
                  <span className="fn-24 fw-600">{item.title}</span>
                  <p className="fn-20 py-3 pe-md-5">{item.description}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="px-md-5 px-3 dotbg timelineimg">
                  <img
                    className="w-100 rounded30"
                    src={item.image}
                    alt={`Timeline ${item.year}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots Line */}
      <div className="swiper-pagination custom-pagination"></div>

      {/* Swiper Navigation */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  );
};

export default TimelineSlider;
