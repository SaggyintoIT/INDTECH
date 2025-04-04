import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeroBanner.css"; // Import the updated CSS

const slides = [
  {
    title: "Top Web Development",
    description:
      "Are you looking for top web development services in the field? IND Tech Mark will be perfect for you! We offer expert website development solutions; from creating custom to responsive websites, we help drive business growth with cutting-edge technology and innovative websites.",
    link: "web-development",
  },
  {
    title: "Top App Development",
    description:
      "IND Tech Mark provides end-to-end app development services. We craft intuitive and user-friendly mobile and web applications tailored to your business needs. Our expert team leverages the latest technologies to deliver high-performance and scalable solutions that boost user engagement and drive business growth.",
    link: "mobile-app-development",
  },
  {
    title: "Digital Marketing ",
    description:
      "IND Tech Mark, a well-known digital marketing company, offers a wide range of solutions designed to boost your online business. We have the proficiency to take your digital presence to great heights, from creating a full-fledged website to executing a social media marketing campaign.",
    link: "digital-marketing-services",
  },
  {
    title: "Web Designing",
    description:
      "IND Tech Mark's web design services focus on creating visually stunning and highly functional websites that grab the attention of users and reflect your brand’s identity. Our team combines creative design with intuitive navigation to ensure a seamless user experience, thus maximizing your online presence.",
    link: "ui-ux-designing",
  },
];

const HeroBanner = () => {
  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        loop={true}
        slidesPerView={1}
        autoHeight={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}"><em>${slides[index].title}</em><i></i><b></b></span>`,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={`slide_${index + 1}`}>
            <div className="text-white slide_content text-start tracking-in-expand">
              <span className="fs-70 fw-bold">{slide.title}</span>
              <p className="fn-24 py-3">{slide.description}</p>
              <a href={slide.link} className="themeBtn mt-2 mt-xl-3 fw-bold">
                <span>know more</span>
                <i className="icon icon-arrow"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
        {/* Pagination */}
        <div className="swiper-pagination"></div>
        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

      {/* Work Together Button */}
      <div className="btn-control">
        <a href="contact-us" className="btn btn-circle">
          <i className="icon"></i>
          <span>
            Lets Work <br /> Together
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;

// This is code will execute when backend start
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "./HeroBanner.css";

// const HeroBanner = () => {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/slides")
//       .then((response) => response.json())
//       .then((data) => setSlides(data))
//       .catch((error) => console.error("Error fetching slides:", error));
//   }, []);

//   return (
//     <section className="banner">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, Parallax]}
//         loop={true}
//         slidesPerView={1}
//         autoHeight={true}
//         speed={1000}
//         autoplay={{ delay: 3000 }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) =>
//             `<span class="${className}"><em>${slides[index]?.title}</em><i></i><b></b></span>`,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className={`slide_${index + 1}`}>
//             <div className="text-white slide_content text-start tracking-in-expand">
//               <span className="fs-70 fw-bold">{slide.title}</span>
//               <p className="fn-24 py-3">{slide.description}</p>
//               <a href={slide.link} className="themeBtn mt-2 mt-xl-3 fw-bold">
//                 <span>know more</span>
//                 <i className="icon icon-arrow"></i>
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </Swiper>

//       <div className="btn-control">
//         <a href="contact-us" className="btn btn-circle">
//           <i className="icon"></i>
//           <span>
//             Lets Work <br /> Together
//           </span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
