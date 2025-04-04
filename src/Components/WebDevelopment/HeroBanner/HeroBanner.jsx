// import React from "react";
// import logo1 from "../../assets/images/logo_1.png"; // Adjust the path as needed
// import logo2 from "../../assets/images/logo_2.png";
// import logo3 from "../../assets/images/logo_3.png";
// import logo4 from "../../assets/images/logo_4.png";
// import logo5 from "../../assets/images/logo_5.png";
// import logo6 from "../../assets/images/logo_6.png";

// const HeroBanner = () => {
//   return (
//     <section className="banner text-white pt-5 herobanner">
//       <div className="position-relative innerbg webbanner">
//         <div className="slidoverlay bodypx">
//           <div className="container h-100">
//             <div className="row align-items-center py-md-5 h-100">
//               <div className="col-md-12 tracking-in-expand text-center py-5">
//                 <h1 className="text-white tage-h-one fs-50 fw-bold">
//                   Top Web Development Company
//                 </h1>
//                 <p className="text-white mb-md-4 pb-md-3">
//                   Transform your digital vision into reality with our top web
//                   development services. With our team of experts, you can
//                   seamlessly craft stunning, user-friendly websites that grab
//                   the attention of audiences and drive success.
//                 </p>

//                 {/* Statistics Section */}
//                 <div className="services-hero-statistics d-none d-md-flex">
//                   <div className="hero-statistics-cards">
//                     <div className="fn-42 fw-bold">75+</div>
//                     <div className="fn-18">
//                       Mobile App <span className="d-block">Developers</span>
//                     </div>
//                   </div>
//                   <div className="hero-statistics-cards">
//                     <div className="fn-42 fw-bold">6+</div>
//                     <div className="fn-18">
//                       Years of Devs Avg.{" "}
//                       <span className="d-md-block">Experience</span>
//                     </div>
//                   </div>
//                   <div className="hero-statistics-cards">
//                     <div className="fn-42 fw-bold">90%</div>
//                     <div className="fn-18">
//                       Talent <span className="d-md-block">Retention Rate</span>
//                     </div>
//                   </div>
//                   <div className="hero-statistics-cards">
//                     <div className="fn-42 fw-bold">100%</div>
//                     <div className="fn-18">
//                       Refund <span className="d-md-block">Policy*</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Call-to-Action Button */}
//                 <a href="portfolio" className="btn-white mt-4 fw-bold">
//                   <span>Talk about Your Project</span>
//                   <i className="icon icon-arrow"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logo Slider Section */}
//         <section className="bottomslide">
//           <div className="py-4 text-center">
//             <div className="clientSwipera" id="clientSwipera">
//               <div>
//                 <img src={logo1} alt="Logo 1" />
//               </div>
//               <div>
//                 <img src={logo2} alt="Logo 2" />
//               </div>
//               <div>
//                 <img src={logo3} alt="Logo 3" />
//               </div>
//               <div>
//                 <img src={logo4} alt="Logo 4" />
//               </div>
//               <div>
//                 <img src={logo5} alt="Logo 5" />
//               </div>
//               <div>
//                 <img src={logo6} alt="Logo 6" />
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
import logo1 from "../../../assets/images/logo_1.png"; // Adjust the path as needed
import logo2 from "../../../assets/images/logo_2.png";
import logo3 from "../../../assets/images/logo_3.png";
import logo4 from "../../../assets/images/logo_4.png";
import logo5 from "../../../assets/images/logo_5.png";
import logo6 from "../../../assets/images/logo_6.png";
import "./HeroBanner.css"; // Import the CSS file for animations

const HeroBanner = () => {
  return (
    <section className="banner text-white pt-5 herobanner">
      <div className="position-relative innerbg webbanner">
        <div className="slidoverlay bodypx">
          <div className="container h-100">
            <div className="row align-items-center py-md-5 h-100">
              <div className="col-md-12 tracking-in-expand text-center py-5">
                <h1 className="text-white tage-h-one fs-50 fw-bold">
                  Top Web Development Company
                </h1>
                <p className="text-white mb-md-4 pb-md-3">
                  Transform your digital vision into reality with our top web
                  development services. With our team of experts, you can
                  seamlessly craft stunning, user-friendly websites that grab
                  the attention of audiences and drive success.
                </p>

                {/* Statistics Section */}
                <div className="services-hero-statistics d-none d-md-flex">
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">75+</div>
                    <div className="fn-18">
                      Mobile App <span className="d-block">Developers</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">6+</div>
                    <div className="fn-18">
                      Years of Devs Avg.{" "}
                      <span className="d-md-block">Experience</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">90%</div>
                    <div className="fn-18">
                      Talent <span className="d-md-block">Retention Rate</span>
                    </div>
                  </div>
                  <div className="hero-statistics-cards">
                    <div className="fn-42 fw-bold">100%</div>
                    <div className="fn-18">
                      Refund <span className="d-md-block">Policy*</span>
                    </div>
                  </div>
                </div>

                {/* Call-to-Action Button */}
                <a href="portfolio" className="btn-white mt-4 fw-bold">
                  <span>Talk about Your Project</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Slider Section */}
        {/* <section className="bottomslide">
          <div className="py-4 text-center">
            <div className="clientSwipera">
              <div className="logo-slider">
                <div className="logo-slider-track">
                  {[logo1, logo2, logo3, logo4, logo5, logo6].map(
                    (logo, index) => (
                      <div key={index} className="logo-slide">
                        <img src={logo} alt={`Logo ${index + 1}`} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
