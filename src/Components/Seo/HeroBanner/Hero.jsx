// import React from "react";
// import logo1 from "../../assets/images/logo_1.png";
// import logo2 from "../../assets/images/logo_2.png";
// import logo3 from "../../assets/images/logo_3.png";
// import logo4 from "../../assets/images/logo_4.png";
// import logo5 from "../../assets/images/logo_5.png";
// import logo6 from "../../assets/images/logo_6.png";
// import "./HeroBanner.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const HeroBanner = () => {
//   return (
//     <section
//       className="banner text-white pt-5 herobanner"
//       style={{
//         backgroundImage: "url('../../assets/images/banner-bg.jpg')", // Keep or update this path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "#1a1a1a",
//       }}
//     >
//       <div className="position-relative DigitalMarketing">
//         <div className="slidoverlay bodypx">
//           <div className="container h-100">
//             <div className="row align-items-center py-md-5 h-100">
//               <div className="col-lg-9 tracking-in-expand text-center py-5 mx-auto">
//                 <h1 className="text-white tage-h-one fs-50 fw-bold">
//                   SEO Driven Service Company
//                 </h1>
//                 <p className="text-white pt-2">
//                   We use the best SEO services that guarantee your space in the
//                   digital journey. Our team is known to help new-age startups
//                   and established businesses set their presence in the search
//                   engine domain.Want to become the next big thing on the
//                   internet? We can help you get there.
//                 </p>
//                 <a href="portfolio" className="btn-white mt-4 fw-bold">
//                   <span>Talk about Your Project</span>
//                   <i className="icon icon-arrow"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logo Slider Section (Unchanged) */}
//         <section className="bottomslide">
//           <div className="py-4 text-center">
//             <div className="clientSwipera">
//               <div className="logo-slider">
//                 <div className="logo-slider-track">
//                   {[
//                     logo1,
//                     logo2,
//                     logo3,
//                     logo4,
//                     logo5,
//                     logo6,
//                     logo1,
//                     logo2,
//                     logo3,
//                     logo4,
//                     logo5,
//                     logo6,
//                   ].map((logo, index) => (
//                     <div key={index} className="logo-slide">
//                       <img src={logo} alt={`Logo ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
import React from "react";
import logo1 from "../../../assets/images/logo_1.png";
import logo2 from "../../../assets/images/logo_2.png";
import logo3 from "../../../assets/images/logo_3.png";
import logo4 from "../../../assets/images/logo_4.png";
import logo5 from "../../../assets/images/logo_5.png";
import logo6 from "../../../assets/images/logo_6.png";
import "./HeroBanner.css";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HeroBanner = () => {
  return (
    <section
      className="banner text-white pt-5 herobanner"
      style={{
        backgroundImage: "url('../../assets/images/banner-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div className="position-relative seobanner">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-lg-9 tracking-in-expand text-center py-5 mx-auto">
                <h2 className="text-white fs-50 fw-bold">
                  SEO Driven Service Company
                </h2>
                <p className="text-white pt-2">
                  We use the best SEO services that guarantee your space in the
                  digital journey. Our team is known to help new-age startups
                  and established businesses set their presence in the search
                  engine domain.Want to become the next big thing on the
                  internet? We can help you get there.
                </p>
                <a href="portfolio" className="btn-white mt-4 fw-bold">
                  <span>Talk about Your Project</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider Section */}
        <section className="bottomslide">
          <div className="py-4 text-center">
            <div className="clientSwipera">
              <div className="logo-slider">
                <div className="logo-slider-track">
                  {/* Render the logos twice for seamless scrolling */}
                  {[
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                    logo1,
                    logo2,
                    logo3,
                    logo4,
                    logo5,
                    logo6,
                  ].map((logo, index) => (
                    <div key={index} className="logo-slide">
                      <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroBanner;
