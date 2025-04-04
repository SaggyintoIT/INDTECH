import React from "react";

// Import images (replace with your actual image paths)
import uiuxIcon from "../../../assets/images/uiuxicon.svg";
import uiuxWebIcon from "../../../assets/images/uiuxwebicon.svg";
import userReIcon from "../../../assets/images/Userreicon.svg";
import wireframeIcon from "../../../assets/images/Wireframeicon.svg";
import dataDrivenIcon from "../../../assets/images/dataDrivenicon.svg";
import dataVisualizationIcon from "../../../assets/images/datavisualizationicon.svg";

const EndToEndWebDesign = () => {
  // Data for the services
  const services = [
    {
      icon: uiuxIcon,
      title: "Responsive Website Design",
      description:
        "Indeed, mobile users account for more than half of the overall website traffic, and it will rise in the future. To increase conversions, we implement responsive web design structures that seamlessly adjust to any screen size or resolution.",
    },
    {
      icon: uiuxWebIcon,
      title: "E-Commerce Website Design",
      description:
        "Transform your online store with our top e-commerce web design services. We create visually stunning and user-friendly stores that are equipped with secure payment systems and seamless navigation to boost the customer experience and increase sales.",
    },
    {
      icon: userReIcon,
      title: "Custom Website Design",
      description:
        "Our custom website design services deliver unique and brand-centric websites that can be tailored to your specific needs. We create visually appealing and responsive designs that align with your business goals and resonate with your target audience.",
    },
    {
      icon: wireframeIcon,
      title: "Content Management System (CMS) Design",
      description:
        "We design intuitive CMS platforms that make managing your website’s content easy and efficient. Our solutions offer user-friendly interfaces and robust features that allow you to easily maintain your website with minimal hassle.",
    },
    {
      icon: dataDrivenIcon,
      title: "Landing Page Design",
      description:
        "Our landing page design services focus on creating high-converting pages that drive user action. We build compelling and visually engaging designs that are optimized for lead generation, boost your marketing campaigns, and maximize conversions.",
    },
    {
      icon: dataVisualizationIcon,
      title: "UI/UX Design Services",
      description:
        "Boost user satisfaction with our top-notch UI/UX design services. We create intuitive and aesthetically pleasing interfaces and seamless user experiences, which ensure your website is engaging, functional, and tailored to meet your users' needs.",
    },
  ];

  return (
    <section className="bodypx py-80">
      <div className="container-fluid mi-container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">Our End-to-End Web Design Services</h2>
            <p>
              Our web design services cater to a wide range of clients, from
              emerging startups to well-established businesses seeking a
              website. Leveraging years of experience in the field, we craft
              custom website designs that align with your brand and attract your
              audience.
            </p>
          </div>

          {/* Map through the services array to render each service */}
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="appdevbg padding30 rounded16 h-100">
                <img
                  className="d-block"
                  src={service.icon}
                  alt={service.title}
                />
                <h3 className="fn-24 fw-bold pt-3 pb-2 d-block">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndWebDesign;
