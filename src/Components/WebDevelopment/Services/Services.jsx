import React from "react";
import eCommerce from "../../../assets/images/eCommerce.svg";
import CustomWeb from "../../../assets/images/CustomWeb.svg";
import WebApp from "../../../assets/images/webapp.svg";
import WebIcon1 from "../../../assets/images/web_icon1.svg";
import WebIcon2 from "../../../assets/images/web_icon2.svg";
import WebIcon3 from "../../../assets/images/web_icon3.svg";
import WebIcon4 from "../../../assets/images/web_ico4.svg";
import WebIcon5 from "../../../assets/images/web_ico5.svg";
import WebIcon6 from "../../../assets/images/web_ico6.svg";

const WebDevelopmentServices = () => {
  return (
    <>
      <section className="bodypx py-80">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">Custom Web Development Solutions</h2>
            <p className="font-18 poppins-regular my-3">
              Your website defines your online presence. To make a thriving
              website, our expert team of developers combines innovative design
              with cutting-edge technology, ensuring your site is visually
              stunning, highly functional, and tailored to your needs.
            </p>
          </div>
        </div>
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            {[
              {
                img: eCommerce,
                title: "eCommerce Platform Development",
                desc: "Our experts help you build a robust, scalable, intuitive, and user-friendly online store. We create custom shopping experiences for users with secure payment gateways to boost your online sales and customer satisfaction.",
              },
              {
                img: CustomWeb,
                title: "Custom Web Development Services",
                desc: "We offer customized web development services tailored to meet your specific business needs. We craft bespoke websites with unique features and functionalities, ensuring a perfect fit for your brand’s goals.",
              },
              {
                img: WebApp,
                title: "Web App Development Services",
                desc: "At IND Tech Mark, we provide end-to-end web app development services to build responsive applications. From concept to deployment, our team uses the latest technologies to create robust and scalable applications.",
              },
              {
                img: WebIcon1,
                title: "Landing Page Development Services",
                desc: "We focus on creating high-converting and visually appealing pages designed to capture leads. We optimize each landing page and ensure it aligns with your marketing goals and delivers measurable results.",
              },
              {
                img: WebIcon2,
                title: "Website Designing Services",
                desc: "Our team of designers at IND Tech Mark excels at website design that reflects your brand identity. We deliver a seamless user experience with intuitive navigation that enhances your online presence.",
              },
              {
                img: WebIcon3,
                title: "Cloud Web Development (SaaS)",
                desc: "We specialize in Software-as-a Service applications and build scalable, reliable, and secure cloud-based solutions that provide flexibility and efficiency for your business, allowing for seamless updates and integrations.",
              },
              {
                img: WebIcon4,
                title: "UI/UX Development",
                desc: "Our team focuses on creating user-centric designs that ensure a smooth and engaging user experience. We build intuitive interfaces to boost usability and satisfaction, which leads to higher engagement rates.",
              },
              {
                img: WebIcon5,
                title: "Digital Commerce Applications",
                desc: "We develop advanced digital commerce apps that enhance the shopping experience. Our solutions integrate advanced features like personalized recommendations and efficient order management to drive eCommerce success.",
              },
              {
                img: WebIcon6,
                title: "Web Support & Maintenance",
                desc: "Our services don’t end with just website design and development. We provide end-to-end web support and maintenance services to keep your website running smoothly, giving you peace of mind.",
              },
            ].map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="appdevbg padding30 rounded16">
                  <img
                    className="d-block"
                    src={service.img}
                    alt={service.title}
                  />
                  <h3 className="fn-24 fw-bold pt-3 pb-2 d-block">
                    {service.title}
                  </h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Stack Web Development Services */}
      <section className="lightgraybg bodypx py-80" id="">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-10 mx-auto text-center mb-4">
              <h2 className="font-40">
                Full-Stack Web Development Services That Drive Results
              </h2>
              <p className="font-18 poppins-regular my-3">
                Being a top web development company, IND Tech Mark delivers
                end-to-end full-stack web development services that drive
                results. Our team integrates cutting-edge technologies to ensure
                a high-performance and robust online presence for your business.
              </p>
            </div>
            <div className="col-md-4 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Frontend Web Development
                </h3>
                <p>
                  Choosing us as your frontend web development partner can allow
                  you to craft visually stunning and highly responsive user
                  interfaces. We utilize the latest technologies to ensure an
                  engaging, visually appealing, and intuitive experience that
                  captivates users and boosts overall satisfaction.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Backend Development
                </h3>
                <p>
                  Our backend development services focus on building robust,
                  secure, and scalable server-side solutions. We create
                  high-performance backends using modern frameworks and
                  technologies and ensure seamless data processing, app logic,
                  and integration with frontend components for top
                  functionality.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mt-2 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Database Development
                </h3>
                <p>
                  You can count on us to provide database development services
                  according to your specific business needs. Our services
                  include schema design, data modeling, and optimization, which
                  ensure reliable data management, fast access, and security for
                  your website and business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovational Technologies */}
      <section className="bg-white bodypx py-80" id="">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-10 mx-auto text-center mb-4">
              <h2 className="font-40">
                Innovational Technologies Driving Our Web Development
              </h2>
              <p className="font-18 poppins-regular my-3">
                As a leading web development company, we utilize cutting-edge
                technology stacks to deliver innovative solutions. We use
                advanced frameworks, tools, and methodologies that drive
                exceptional results and user experiences for your web projects.
              </p>
            </div>
            <div className="col-md-6 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="appdevbg padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">AI/ML</h3>
                <p>
                  Our experts integrate AI and ML technologies to enhance web
                  development with features such as personalized
                  recommendations, predictive analytics, and more. These improve
                  user engagement and drive decision-making, which creates
                  smarter and more efficient web solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="appdevbg padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Big Data Analytics
                </h3>
                <p>
                  By leveraging the potential of Big Data analytics, you can
                  harness and analyze vast amounts of data seamlessly. It will
                  provide you with valuable insights for optimizing performance
                  and the user experience. This will even help you make informed
                  decisions.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="appdevbg padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">Cloud Computing</h3>
                <p>
                  At IND Tech Mark, we utilize cloud computing to deliver
                  scalable, flexible, and cost-effective web solutions. It
                  ensures robust security and seamless integration, which
                  enables quick deployment, easy maintenance, and management of
                  web applications and services.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="appdevbg padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Internet of Things (IoT)
                </h3>
                <p>
                  Our IoT web development services allow us to create
                  interconnected and smart solutions that boost overall user
                  interaction and automation. By integrating IoT devices, we
                  enable real-time data collection and remote control, which
                  promotes responsive web experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentServices;
