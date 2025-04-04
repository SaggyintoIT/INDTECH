import React from "react";
// Import images
import education1 from "../../../assets/images/education_1.svg";
import education2 from "../../../assets/images/education_2.svg";
import education3 from "../../../assets/images/education_3.svg";
import education4 from "../../../assets/images/education_4.svg";
import education5 from "../../../assets/images/education_5.svg";
import education6 from "../../../assets/images/education_6.svg";
import shapingImage from "../../../assets/images/Shaping.svg";

const EducationAppDevelopment = () => {
  // Data for the services
  const services = [
    {
      icon: education1,
      title: "Online Training Apps",
      description:
        "INDTechMark is an education app development company that specializes in crafting e-learning applications. We create interactive and user-centric apps that facilitate both learner and educator.",
    },
    {
      icon: education2,
      title: "E2C E-Learning App Development",
      description:
        "Our online class app development services extend to large-scale e-learning applications. We design and develop your e-learning solutions with intuitive features that cater to a wide range of educational needs.",
    },
    {
      icon: education3,
      title: "School Management Apps",
      description:
        "INDTechMark excels in elearning software development, including quiz app development. We create school apps that enhance classroom engagement and education delivery with seamless user interface.",
    },
    {
      icon: education4,
      title: "On-demand e-learning App Development",
      description:
        "As a leading e-learning app development company, we offer on-demand school app development services. These apps provide flexible and convenient learning opportunities for users.",
    },
    {
      icon: education5,
      title: "Platform-Specific App Development",
      description:
        "Our expert educational mobile app development solutions cover platform-specific e-learning applications, ensuring that your educational solutions are accessible across various devices and operating systems.",
    },
    {
      icon: education6,
      title: "Online Exam Management Apps",
      description:
        "As an educational software development company, INDTechMark offers to build a robust and highly efficient online exam management application. We provide some of the most talented and experienced education app developers.",
    },
  ];

  return (
    <>
      {/* Comprehensive Education App Development Services Section */}
      <section className="bodypx py-80" id="education-app-development">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Our Comprehensive Education App <br />
              Development Services
            </h2>
            <p className="font-18 mt-3">
              INDTechMark offers a wide array of elearning App development
              services, with a focus on user-friendly and interactive design, we
              are committed to enhancing the educational experience.
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mt-4">
                <div className="appdevbg padding30 rounded16 h-100">
                  <img
                    className="d-block"
                    src={service.icon}
                    alt={service.title}
                  />
                  <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                    {service.title}
                  </span>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shaping the Future Section */}
      <section className="bodypx py-80 lightgraybg">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-8 mb-4">
              <div className="col-lg-9">
                <h2 className="font-40 fw-400">
                  Shaping The Future Of Learning & Education With{" "}
                  <strong>Next-Gen Tech Innovations</strong>
                </h2>
                <p>
                  Our education app development company is bridging the gap
                  between learning & technology: Let’s empower educators &
                  inspire students with engaging educational journeys.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="appdevbggar padding30 rounded16">
                <img
                  className="d-block w-75 m-auto"
                  src={shapingImage}
                  alt="Shaping the Future"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationAppDevelopment;
