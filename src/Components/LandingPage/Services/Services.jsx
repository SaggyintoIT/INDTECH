import React from "react";

const ServicesSection = () => {
  return (
    <section className="bodypx services bg-dark">
      <div className="container-fluid py-80">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="text-white iph24 ServiceSection">
              Explore Our Range of Cutting-Edge Services We Offer
            </h2>
          </div>

          {/* Web Development */}
          <div className="d-flex align-items-start servicesinner">
            <div className="number fn-30 fw-400 text-red">01</div>
            <div className="region">
              <h2 className="accordion">Web Development</h2>
              <div className="pan">
                <p>
                  Our team at IND Tech Mark offers top web development services
                  and creates robust, scalable websites using the latest
                  technologies. We ensure seamless functionality, high
                  performance, and security, delivering tailored solutions that
                  boost user experience and drive business growth.
                </p>
                <a
                  href="web-development"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Know More</span>
                </a>
              </div>
            </div>
          </div>

          {/* App Development */}
          <div className="d-flex align-items-start servicesinner">
            <div className="number fn-30 fw-400 text-red">02</div>
            <div className="region">
              <h2 className="accordion">App Development</h2>
              <div className="pan">
                <p>
                  We provide customized mobile and web applications that are
                  designed for optimal performance and user engagement.
                  Utilizing cutting-edge tools and modern technologies, we build
                  scalable and intuitive apps that meet your business needs and
                  exceed user expectations.
                </p>
                <a
                  href="mobile-app-development"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Know More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="d-flex align-items-start servicesinner">
            <div className="number fn-30 fw-400 text-red">03</div>
            <div className="region">
              <h2 className="accordion">Digital Marketing</h2>
              <div className="pan">
                <p>
                  We offer world-class digital marketing services that drive
                  online success through strategic SEO, targeted advertising,
                  and compelling content. We boost your brand’s visibility,
                  attract and convert leads, and optimize marketing efforts to
                  achieve measurable results.
                </p>
                <a
                  href="digital-marketing-services"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Know More</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web Design */}
          <div className="d-flex align-items-start servicesinner mb-0 bor_bottom">
            <div className="number fn-30 fw-400 text-red">04</div>
            <div className="region">
              <h2 className="accordion">Web Design</h2>
              <div className="pan">
                <p>
                  With in-depth expertise in the field, our web design services
                  focus on crafting visually appealing and user-centric
                  websites. Combining creativity with functionality, we design
                  intuitive interfaces that attract users, ensuring a memorable
                  and effective online presence.
                </p>
                <a
                  href="website-design-company"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Know More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// This will execute when baackend
// import React, { useState, useEffect } from "react";

// const ServicesSection = () => {
//   const [services, setServices] = useState([]);

//   // Fetch services from the backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/services")
//       .then((response) => response.json())
//       .then((data) => setServices(data))
//       .catch((error) => console.error("Error fetching services:", error));
//   }, []);

//   return (
//     <section className="bodypx services bg-dark" data-aos="fade-up">
//       <div className="container-fluid py-80">
//         <div className="row">
//           <div className="col-md-12 mb-4">
//             <h2 className="text-white iph24 ServiceSection">
//               Explore Our Range of Cutting-Edge Services We Offer
//             </h2>
//           </div>

//           {/* Dynamically render services */}
//           {services.map((service, index) => (
//             <div
//               className="d-flex align-items-start servicesinner"
//               key={service._id}
//             >
//               <div className="number fn-30 fw-400 text-red">
//                 {index + 1 < 10 ? `0${index + 1}` : index + 1}
//               </div>
//               <div className="region">
//                 <h2 className="accordion">{service.title}</h2>
//                 <div className="pan">
//                   <p>{service.description}</p>
//                   <a
//                     href={service.link}
//                     className="themeBtn mt-2 mt-xl-3 fw-bold"
//                   >
//                     <span>Know More</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
