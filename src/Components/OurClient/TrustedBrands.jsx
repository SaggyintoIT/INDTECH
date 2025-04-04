// import React from "react";
// import trusted1 from "../../assets/images/trusted_1.png";
// import trusted2 from "../../assets/images/trusted_2.png";
// import trusted3 from "../../assets/images/trusted_3.png";
// import trusted4 from "../../assets/images/trusted_4.png";
// import trusted5 from "../../assets/images/trusted_5.png";
// import trusted6 from "../../assets/images/trusted_6.png";
// import trusted7 from "../../assets/images/trusted_7.png";
// import trusted8 from "../../assets/images/trusted_8.png";
// import trusted9 from "../../assets/images/trusted_9.png";
// import trusted10 from "../../assets/images/trusted_10.png";
// import trusted11 from "../../assets/images/trusted_11.png";
// import trusted12 from "../../assets/images/trusted_12.png";
// import Insights from "../LandingPage/Insights/Insights";
// import FreeCons from "../OurTeam/FreeCons";

// const TrustedBrands = () => {
//   const images = [
//     trusted1,
//     trusted2,
//     trusted3,
//     trusted4,
//     trusted5,
//     trusted6,
//     trusted7,
//     trusted8,
//     trusted9,
//     trusted10,
//     trusted11,
//     trusted12,
//   ];
//   console.log(trusted1);

//   return (
//     <>
//       <section className="bodypx py-80 bg-dark">
//         <div className="container-fluid mi-container">
//           <div className="row align-items-md-center abt-expertise">
//             <div className="col-md-12 text-center mb-4">
//               <h2 className="font-40 text-white">
//                 Trusted by leading brands including Fortune 250
//               </h2>
//               <p className="font-18 text-white my-3">
//                 We are proud to work with some of the most renowned brands in
//                 the world.
//               </p>
//             </div>
//             <div className="col-md-12 divmore">
//               <div className="grid_colm_panel">
//                 {images.map((image, index) => (
//                   <div key={index} className="grid_colm_item">
//                     <img src={image} alt={`trusted-brand-${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Insights />
//       <FreeCons />
//     </>
//   );
// };

// export default TrustedBrands;

import React from "react";
// Make sure these paths are correct relative to your file structure
import trusted1 from "../../assets/images/trusted_1.png";
import trusted2 from "../../assets/images/trusted_2.png";
import trusted3 from "../../assets/images/trusted_3.png";
import trusted4 from "../../assets/images/trusted_4.png";
import trusted5 from "../../assets/images/trusted_5.png";
import trusted6 from "../../assets/images/trusted_6.png";
import trusted7 from "../../assets/images/trusted_7.png";
import trusted8 from "../../assets/images/trusted_8.png";
import trusted9 from "../../assets/images/trusted_9.png";
import trusted10 from "../../assets/images/trusted_10.png";
import trusted11 from "../../assets/images/trusted_11.png";
import trusted12 from "../../assets/images/trusted_12.png";
import Insights from "../LandingPage/Insights/Insights";
import FreeCons from "../OurTeam/FreeCons";

const TrustedBrands = () => {
  const images = [
    { src: trusted1, alt: "Trusted Brand 1" },
    { src: trusted2, alt: "Trusted Brand 2" },
    { src: trusted3, alt: "Trusted Brand 3" },
    { src: trusted4, alt: "Trusted Brand 4" },
    { src: trusted5, alt: "Trusted Brand 5" },
    { src: trusted6, alt: "Trusted Brand 6" },
    { src: trusted7, alt: "Trusted Brand 7" },
    { src: trusted8, alt: "Trusted Brand 8" },
    { src: trusted9, alt: "Trusted Brand 9" },
    { src: trusted10, alt: "Trusted Brand 10" },
    { src: trusted11, alt: "Trusted Brand 11" },
    { src: trusted12, alt: "Trusted Brand 12" },
  ];

  return (
    <>
      <section className="bodypx py-80 bg-dark">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center abt-expertise">
            <div className="col-md-12 text-center mb-4">
              <h2 className="font-40 text-white">
                Trusted by leading brands including Fortune 250
              </h2>
              <p className="font-18 text-white my-3">
                We are proud to work with some of the most renowned brands in
                the world.
              </p>
            </div>
            <div className="col-md-12 ">
              <div className="grid_colm_panel">
                {images.map((image, index) => (
                  <div key={index} className="grid_colm_item">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid" // Added for responsive images
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block", // Ensures image is visible
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Insights />
      <FreeCons />
    </>
  );
};

export default TrustedBrands;
