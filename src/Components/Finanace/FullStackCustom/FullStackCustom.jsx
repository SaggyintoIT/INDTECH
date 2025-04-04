import React from "react";
import financeIcon1 from "../../../assets/images/financeicon_1.svg";
import financeIcon2 from "../../../assets/images/financeicon_2.svg";
import financeIcon3 from "../../../assets/images/financeicon_3.svg";
import financeIcon4 from "../../../assets/images/financeicon_4.svg";
import financeIcon5 from "../../../assets/images/financeicon_5.svg";
import financeIcon6 from "../../../assets/images/financeicon_6.svg";
import solutionImage from "../../../assets/images/Solution.svg";
import discussImage from "../../../assets/images/Discussimg.svg";

const FullStackCustom = () => {
  return (
    <>
      <section className="bodypx py-80" id="">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Our Full-Stack Custom FinTech Software
              <br />
              Development Services
            </h2>
            <p className="font-18 mt-3">
              From custom social networking website design to an extensive
              development process, our social app developers are skilled in
              connecting the world with a suite of services.
            </p>
          </div>
        </div>
        <div className="container-fluid mi-container">
          <div className="row">
            {[
              {
                icon: financeIcon1,
                title: "Financial App Development",
                description:
                  "Ensure top-level security while handling sensitive data and financial transactions. Our personal finance app development services align with industry standards to meet your business requirements.",
              },
              {
                icon: financeIcon2,
                title: "Mobile Accounting App Development",
                description:
                  "Access cross-platform and native accounting applications for iOS and Android devices. Gain control over accounting operations with instant billing and profit and loss statements, through our fintech software development services.",
              },
              {
                icon: financeIcon3,
                title: "Wealth Management App Development",
                description:
                  "We are a FinTech app development company that deeply understands the importance of efficient and secure wealth management. Our FinTech app developers give your customers an intelligent platform to track, manage, and grow their wealth.",
              },
              {
                icon: financeIcon4,
                title: "Insurance app development",
                description:
                  "Elevate the insurtech sector with our financial software development company that prioritize exceptional customer service and address critical business challenges.",
              },
              {
                icon: financeIcon5,
                title: "Banking app development",
                description:
                  "Transform the banking landscape with our tailor-made financial software development services. Craft user-centric applications like mobile banking apps and digital wallets through our fintech app development services.",
              },
              {
                icon: financeIcon6,
                title: "Wallet App Development",
                description:
                  "INDTechMark, being a leading fintech app development company enhances customer loyalty with digital wallet apps offering seamless payment options and integrated promotional tools like vouchers and coupons.",
              },
            ].map((service, index) => (
              <div className="col-md-4 mt-4" key={index}>
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

      <section className="bodypx py-80 lightgraybg">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-8 mb-4">
              <div className="col-lg-9">
                <h2 className="font-40 fw-400">
                  <strong> Build a Secure </strong>
                  FinTech App <br />
                  Development <strong>Solution</strong>
                </h2>
                <p>
                  Building a secure FinTech solution requires careful planning
                  and implementation of various security measures to protect
                  user data and prevent fraud. Being a reliable banking app
                  development company, we prioritize security throughout the
                  development process with continuous monitoring and updating of
                  the security measures as per the need to stay ahead of
                  emerging threats.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="appdevbggar padding30 rounded16">
                <img
                  className="d-block w-75 m-auto"
                  src={solutionImage}
                  alt="Solution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx py-80 pt-0 hailwhitebg">
        <div className="redblackbg rounded30 px-md-4 psm-ph">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
                <h2 className="text-white fs-50 fw-400">
                  Let’s Discuss{" "}
                  <span className="text-white fw-600">Your Project</span>
                </h2>
                <p className="fn-24 text-white">
                  Get a free consultation to discuss how we will transform your
                  idea into an amazing digital product.
                </p>
                <a
                  href="get-free-consultation"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Get free consultation</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
              <div className="col-md-5 text-center text-md-end pe-md-5">
                <img
                  className="my-4 pb-1"
                  src={discussImage}
                  alt="Discuss Project"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullStackCustom;
