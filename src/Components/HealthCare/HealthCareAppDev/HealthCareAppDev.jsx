import React from "react";

// Import images
import healthcareIcon1 from "../../../assets/images/healthcareicon_1.svg";
import healthcareIcon2 from "../../../assets/images/healthcareicon_2.svg";
import healthcareIcon3 from "../../../assets/images/healthcareicon_3.svg";
import healthcareIcon4 from "../../../assets/images/healthcareicon_4.svg";
import healthcareIcon5 from "../../../assets/images/healthcareicon_5.svg";
import healthcareIcon6 from "../../../assets/images/healthcareicon_6.svg";

const HealthcareAppDevelopment = () => {
  // Data for the healthcare app development services
  const healthcareServices = [
    {
      title: "Custom Healthcare Software Development",
      description:
        "INDTechMark believes in providing an engaging patient experience through its range of custom healthcare software solutions. Our team of medical app developers are highly skilled and have hands-on experience in creating complex healthcare software solutions, aimed at offering improved patient care for better medical outcomes.",
    },
    {
      title: "Laboratory Information Management System (LIMS)",
      description:
        "At INDTechMark, we develop tailored healthcare software solutions for the better management of information associated with the labs. No matter how big the lab is and what specialties it offers, our scalable and adaptable LIMS software monitors laboratory storage and inventory, data integrity, security, and protocol executions.",
    },
    {
      title: "Custom mHealth App Development",
      description:
        "We develop custom mHealth app solutions that are HL7, HIPAA, and FDA-compliant and offer remote monitoring services. With our mHealth solutions, healthcare organizations can deliver better patient care by simply streamlining workflow and ensuring smoother management of patient health records.",
    },
    {
      title: "Electronic Health Record Software",
      description:
        "Being an industry-leading medical app development company, INDTechMark ensures the development of robust electronic health record software systems. Our EHR systems pack features that enable healthcare professionals to quickly access patient data and stay connected to them via patient portals.",
    },
    {
      title: "Telemedicine App Development",
      description:
        "With INDTechMark, you can develop telemedicine software to offer contactless care to patients by enabling them to connect and communicate with doctors through video calls or instant messaging. Our highly intuitive telemedicine software offers quick and convenient access to patient care at a reduced cost.",
    },
    {
      title: "Pharmacy Management System",
      description:
        "We create all new pharmacy management systems or update the existing ones integrating the latest features and functionalities. With our all-in-one pharmacy management software, not only can you manage multiple stores of your healthcare center but also enable real-time communication, workflow automation, and simplified payment processing.",
    },
    {
      title: "Clinic Management System",
      description:
        "We offer clinic management solutions to simply manage multiple clinics and operations in a single place. Our solutions and applications are designed in a way that authorities can fast-track operational processes while ensuring patients get proper care.",
    },
    {
      title: "Patient Portal",
      description:
        "We develop tailored patient portals for healthcare organizations. Using this, they can simply interact with their patients and handle various requirements at a time. If the portal requires any patient-centric features, we design them as well to make the portal more interactive and user-friendly.",
    },
  ];

  // Data for the excelled medical & healthcare app development solutions
  const excelledSolutions = [
    {
      icon: healthcareIcon1,
      title: "Healthcare app development",
      description:
        "Our top Custom Healthcare App Development solutions enhance the efficiency of your businesses.",
    },
    {
      icon: healthcareIcon2,
      title: "Mobility & Cloud solutions",
      description:
        "We provide the top mobility and cloud solutions that make your medical and healthcare operations secure and hassle-free.",
    },
    {
      icon: healthcareIcon3,
      title: "HIPAA Compliant Development",
      description:
        "INDTechMark provides solutions considering all the medical industry guidelines and this also includes HIPAA & SEPA compliance.",
    },
    {
      icon: healthcareIcon4,
      title: "Integration of medical systems",
      description:
        "We believe in integrating the apps with the systems which not only empower the workflow but also operations with the right APIs.",
    },
    {
      icon: healthcareIcon5,
      title: "Technical Consulting",
      description:
        "We are available 24*7 available and provide healthcare industry consulting experts to help you with any sort of problem.",
    },
    {
      icon: healthcareIcon6,
      title: "Maintenance & Support",
      description:
        "We not only focus on development and design but we also believe in providing complete support and maintenance standards.",
    },
  ];

  return (
    <>
      {/* Healthcare App Development Services Section */}
      <section className="bodypx py-80" id="healthcare-app-development">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Our Range of Innovative Healthcare App Development Services
            </h2>
            <p className="font-18 poppins-regular my-3">
              At INDTechMark, we offer a wide range of healthcare app
              development services to leverage healthcare organizations with
              optimized administrative processes, improved efficiency, and
              lowered operations costs. Do check out our healthcare app
              development services given below.
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            {healthcareServices.map((service, index) => (
              <div
                key={index}
                className={`col-md-6 mb-4 mt-2 ${
                  index % 2 === 0 ? "ps-md-0 pe-md-4" : "pe-md-0 ps-md-4"
                }`}
              >
                <div className="appdevbg padding30 rounded16">
                  <span className="fn-24 fw-bold pb-2 d-block">
                    {service.title}
                  </span>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excelled Medical & Healthcare App Development Solutions Section */}
      <section className="lightgraybg bodypx py-80" id="excelled-solutions">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Excelled Medical & Healthcare App Development Solutions
            </h2>
            <p className="font-18 my-3">
              INDTechMark is among the top Medical and Healthcare service
              providers as we have provided a wide range of solutions in
              Healthcare Industries across the world.
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row">
            {excelledSolutions.map((solution, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="bg-white padding30 rounded16 h-100">
                  <img
                    className="d-block"
                    src={solution.icon}
                    alt={solution.title}
                  />
                  <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                    {solution.title}
                  </span>
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareAppDevelopment;
