import React from "react";
// import "./UIUXDesign.css";

// Import images (replace with your actual image paths)
import digiProductIcon from "../../../assets/images/digiproduct.svg";
import visionIcon from "../../../assets/images/Vision.svg";
import uiuxDesignIcon from "../../../assets/images/uiuxiiDesign.svg";
import designAuditIcon from "../../../assets/images/DesignAudit.svg";

const UIUXDesign = () => {
  // Data for the services
  const services = [
    {
      icon: digiProductIcon,
      title: "Digital Product Design Market & User Research",
      description:
        "From identifying market trends to understanding user behaviors, we gather design references and inspirations that fit well with your business type and deliver you a futuristic design solution.",
      features: [
        "Qualitative Research",
        "Heuristic Evaluation",
        "Competitor Analysis",
        "Usability Testing",
      ],
    },
    {
      icon: visionIcon,
      title: "Digital Product Vision & Strategy",
      description:
        "With an analytical approach, strategic roadmap, and creative design thinking, we help you envision a product design that aligns with your business goals and can elevate your brand's digital presence.",
      features: [
        "Design Thinking",
        "Growth Strategy",
        "Product Roadmap",
        "Data Visualization",
        "Data Visualization",
      ],
    },
    {
      icon: uiuxDesignIcon,
      title: "UI UX Design",
      description:
        "From putting our creative design thinking in place to architecting digital product prototypes, we deliver UI UX design with attractive elements that ensure seamless navigation and engagement.",
      features: [
        "Product Prototyping",
        "User Interface Design",
        "Interaction Design",
        "Illustrations & Iconography",
        "Data Visualization",
      ],
    },
    {
      icon: designAuditIcon,
      title: "UX Design Audit",
      description:
        "With expertise in UX design audit, and by leveraging best practices, we help you examine and identify software usability flaws and provide design solutions aimed at enhancing the overall user experience.",
      features: [
        "Usability Testing",
        "Heuristic Evaluation",
        "Accessibility Assessment",
        "UX Design Audit Report",
      ],
    },
  ];

  return (
    <section className="bodypx py-80 lightgraybg">
      <div className="container">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-40">UI UX Design Services We Offer</h2>
          <p>
            Our clientele ranges from a new app startup to a multinational
            business wanting to revamp their website for our UI UX design
            services which we create based on years of experience and designing
            digital products that transform what your users are looking for.
          </p>
        </div>
      </div>

      <div className="container-fluid mi-container px-md-0">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mt-4">
              <div className="we-serve__item br-24 bg-white">
                <div className="row pe-md-5">
                  <div className="col-12">
                    <div className="ongoing-left-icon bg-pink">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="fn-24 mt-3 fw-bold">{service.title}</h3>
                    <p className="font-18 pb-2">{service.description}</p>
                    <div className="ongoing-bottom libgwhte">
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;
