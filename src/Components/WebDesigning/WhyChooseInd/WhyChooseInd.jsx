import React from "react";
// import "./WhyChooseInd.css";
// Import images (replace with your actual image paths)
import discussImg from "../../../assets/images/Discussimg.svg";

const WhyChooseInd = () => {
  return (
    <>
      {/* Why Choose IND Tech Mark Section */}
      <section className="lightgraybg bodypx py-80 mt-5">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Why Choose IND Tech Mark as Your Ideal Web Design Company?
            </h2>
            <p className="font-18 poppins-regular my-3">
              Choosing us as your web design partner can allow you to boost your
              brand image and grab the attention of your target audience with
              visually appealing websites. Take a look at some reasons why we
              set ourselves apart in this highly competitive digital world!
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            {/* Custom Designs */}
            <div className="col-md-6 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">Custom Designs</h3>
                <p>
                  At IND Tech Mark, we understand that every business is unique,
                  and so are their needs. Our experts work closely with you to
                  create tailored web design services that align with your
                  business goals and target audience.
                </p>
              </div>
            </div>

            {/* Remarkable Results */}
            <div className="col-md-6 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Remarkable Results
                </h3>
                <p>
                  We don’t just build stunning websites; we work to drive
                  remarkable results. With our proven techniques, you can expect
                  increased traffic, more leads, and enhanced user engagement,
                  helping you gain an edge in the industry.
                </p>
              </div>
            </div>

            {/* Innovative Design */}
            <div className="col-md-6 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Innovative Design
                </h3>
                <p>
                  Stay ahead of the curve with our engaging and innovative web
                  design practices. We always keep up with the latest
                  developments in the market to create visually appealing and
                  intuitive websites that convert them into loyal customers.
                </p>
              </div>
            </div>

            {/* Extreme Customer Focus */}
            <div className="col-md-6 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Extreme Customer Focus
                </h3>
                <p>
                  Our website design company follows a customized process to fit
                  your dynamic needs and goals. We understand that your
                  schedules can get hectic sometimes; thus, we work with you at
                  your convenience and with the utmost dedication.
                </p>
              </div>
            </div>

            {/* Seamless Project Management */}
            <div className="col-md-6 mb-4 mt-2 ps-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Seamless Project Management
                </h3>
                <p>
                  Having us as your partner can allow you to experience seamless
                  project execution. Your assigned project manager would serve
                  as your main point of contact through the web design project
                  and provide you with timely updates.
                </p>
              </div>
            </div>

            {/* Exceptional Customer Support */}
            <div className="col-md-6 mb-4 mt-2 pe-md-0 pe-md-4">
              <div className="bg-white padding30 rounded16">
                <h3 className="fn-24 fw-bold pb-2 d-block">
                  Exceptional Customer Support
                </h3>
                <p>
                  We, at IND Tech Mark, pride ourselves on our commitment to the
                  utmost client satisfaction. Our skilled and knowledgeable team
                  is always there to help you, whether you have questions during
                  the project or need ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let’s Discuss Your Project Section */}
      <section className="bodypx py-80 bg-white">
        <div className="redblackbg rounded30 px-md-4 psm-ph">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
                <h2 className="text-white fs-50 fw-400">
                  Let’s Discuss{" "}
                  <span className="text-white fw-600">Your Project</span>
                </h2>
                <p className="fn-24 text-white">
                  Get a free consultation to discuss how our website design
                  company can help your business achieve impactful results!
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
                  src={discussImg}
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

export default WhyChooseInd;
