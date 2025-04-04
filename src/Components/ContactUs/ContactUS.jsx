import React from "react";

import Address1 from "../../assets/images/address-1.jpg";
import Address2 from "../../assets/images/address-2.jpg";
import AddressIcon from "../../assets/images/address.svg";
import PhoneIcon from "../../assets/images/phone.svg";
import EmailIcon from "../../assets/images/email.svg";
import FreeCons from "../OurTeam/FreeCons";
// import TestimonialSection from '../../HomePage/Testimonial/Testimonials';

const ContactUS = () => {
  return (
    <>
      <section className="banner bg-dark mb-5 pt-4">
        <div className="text-center h-450 text-white pt-70 iphoneh">
          <span className="text-white fs-70 fw-600">
            Say <span className="text-red">Hello!</span>
          </span>
          <p className="fn-24 mt-3">
            Dream projects are built here. Make yours today!
          </p>
        </div>
      </section>

      <section className="bodypx py-80 pt-0 bg">
        <div className="form-box p-0 shadowone overflow mx-md-0 mx-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-8 outer-col-2">
                <div className="py-5 px-4">
                  <div className="title mb-20 wow fadeInDown pe-md-5">
                    <span className="fn-36 mb-4">
                      For Project <strong>Queries</strong>
                    </span>
                    <form
                      id="collaborateForm"
                      method="post"
                      className="form-horizontal mt-3"
                      action=""
                      name="collaborate-form"
                      noValidate
                    >
                      <div className="row justify-content-center">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <input
                                  type="text"
                                  className="form-control font-16 nameicon"
                                  id="firstname"
                                  name="firstname"
                                  aria-describedby="firstnameHelp"
                                  placeholder="Name*"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <input
                                  type="email"
                                  className="form-control font-16 emailicon"
                                  id="email"
                                  name="email"
                                  aria-describedby="emailHelp"
                                  placeholder="Email address*"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 form-item mb-3 mb-lg-4">
                              <div className="country-wrap">
                                <div className="country-code d-flex">
                                  <div className="country-number">
                                    <div className="form-group line">
                                      <input
                                        type="text"
                                        id="mobile_code"
                                        className="form-control font-16 ps-0"
                                        placeholder="Mobile Number*"
                                        name="name"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 select-country">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <div className="country-list collaborate-list">
                                  <div className="SumoSelect" tabIndex="0">
                                    <select
                                      id="country_name"
                                      className="js-example-placeholder-single js-states form-control font-16 in"
                                      tabIndex="-1"
                                    >
                                      <option value="interested in*" selected>
                                        interested in*
                                      </option>
                                      <option value="IN">India</option>
                                      <option value="AF">Afghanistan</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3 mb-lg-4 form-item line">
                              <label className="text-lgray3 text-uppercase fw-400 mess ps-4 mb-2">
                                <span className="ms-2">Message*</span>
                              </label>
                              <textarea
                                className="form-control-textarea w-100 font-16 border-0 rounded-3 p-3"
                                rows="3"
                                name="message"
                              ></textarea>
                            </div>
                          </div>
                          {/* <div className="col-md-12 upload-files">
                            <div className="form-item inputDnD inputfiles">
                              <div className="inside-div">
                                <span className="d-flex align-items-center">
                                  <span className="attach_icon"></span>
                                  <p className="ms-1 font-18 mb-0">
                                    Attach a file
                                  </p>
                                </span>
                                <span className="para-text d-block text-left font-12">
                                  Please upload a file with one of the following
                                  extensions: .pdf, .docx
                                </span>
                              </div>
                              <label className="file">
                                <input
                                  name="attach_file"
                                  className="custom-file form-control-file"
                                  type="file"
                                  id="project_attach_file"
                                  multiple
                                  data-title="Drag 'n' drop your CV here, or select file"
                                />
                                <div
                                  style={{ display: "none" }}
                                  id="file-upload-filename"
                                  className="align-items-center"
                                >
                                  <span id="file-text-name"></span>
                                  <a
                                    className="d-flex file-clear"
                                    href="javascript:void(0)"
                                  >
                                    <span className="material-symbols-rounded">
                                      close
                                    </span>
                                  </a>
                                </div>
                              </label>
                            </div>
                          </div> */}
                          <div className="col-md-12">
                            <div className="d-flex align-items-end">
                              <a
                                href="javascript:void(0)"
                                className="btn-darkblack iph-w100 mt-4 mt-xl-3 fw-bold fn-16 ms-sm-auto"
                              >
                                <span>Submit</span>
                                <i className="icon icon-arrow"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pe-md-0">
                <div className="shadow px-md-5 p-4 py-md-5 h-100">
                  <div className="pt-3 pt-md-0">
                    <h3 className="fn-36 pb-4">Contact INDTechMark</h3>
                    <span className="fn-30 fw-400">
                      For <span className="text-red fw-600">Work</span> inquiry
                    </span>
                    <div className="pt-3">
                      <span className="fn-24 fw-600">
                        Mail to our sales department
                      </span>
                      <p className="mb-1 mt-2">
                        <a
                          className="text-dark"
                          href="mailto:sales@indtechmark.com"
                          title="sales@indtechmark.com"
                        >
                          sales@indtechmark.com
                        </a>
                      </p>
                      <p>
                        <a
                          className="text-dark"
                          href="tel:+91 6232 69 6232"
                          title="+91 6232 69 6232"
                        >
                          +91 6232 69 6232
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="fn-30 fw-400">
                      For <span className="text-red fw-600">General</span>{" "}
                      inquiry
                    </span>
                    <div className="">
                      <p className="mb-1 mt-2">
                        <a
                          className="text-dark"
                          href="mailto:sales@indtechmark.com"
                          title="sales@indtechmark.com"
                        >
                          sales@indtechmark.com
                        </a>
                      </p>
                      <p>
                        <a
                          className="text-dark"
                          href="tel:+91 6232 69 6232"
                          title="+91 6232 69 6232"
                        >
                          +91 6232 69 6232
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="fn-30 fw-400">
                      <span className="fw-bold fw-600">Connect</span> inquiry
                    </span>
                    <div className="contactpage">
                      <div className="socialLink mt-3">
                        <a href="javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            width="19px"
                            height="23px"
                            fill="#fff"
                          >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                          </svg>
                        </a>
                        <a href="javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="19px"
                            height="23px"
                            fill="#fff"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                          </svg>
                        </a>
                        <a href="javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="19px"
                            height="23px"
                            fill="#fff"
                          >
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                          </svg>
                        </a>
                        <a href="javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            width="19px"
                            height="23px"
                            fill="#fff"
                          >
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx lightgraybg">
        <div className="bg-color contactm-top py-80">
          <div className="container-fluid">
            <div className="row addresssection">
              <div className="col-md-12 text-center pb-md-5 pb-4">
                <h2 className="lighttext fs-50 fw-400 mt-md-0 mt-3">
                  Our <span className="text-red fw-600">Global</span> Presence
                </h2>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <div className="borderlight bg-white p-4 addressblock rounded16 h-100">
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        className="w-100 h-100 rounded8"
                        src={Address1}
                        alt="Patna - INDIA"
                        title="Patna - INDIA"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="ms-md-2">
                        <h3 className="py-2 fs-20 mt-2">Patna - INDIA</h3>
                        <div className="d-flex">
                          <div>
                            <img
                              className="pe-1"
                              src={AddressIcon}
                              alt="Address"
                              title="Address"
                            />
                          </div>
                          <div>Shishwachak, Punpun, Patna (804453)</div>
                        </div>
                        <p className="my-2">
                          <img
                            className="pe-1"
                            src={PhoneIcon}
                            alt="Phone Number"
                            title="Phone Number"
                          />{" "}
                          +91 6232 69 6232
                        </p>
                        <p className="my-2">
                          <img
                            className="pe-1"
                            src={EmailIcon}
                            alt="Email Id"
                            title="Email ID"
                          />{" "}
                          info@indtechmark.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <div className="borderlight bg-white p-4 addressblock rounded16 h-100">
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        className="w-100 h-100 rounded8"
                        src={Address2}
                        alt="Jaipur - INDIA"
                        title="Jaipur - INDIA"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="ms-ms-2">
                        <h3 className="py-2 fs-20 mt-2">JAIPUR - INDIA</h3>
                        <div className="d-flex">
                          <div>
                            <img
                              className="pe-1"
                              src={AddressIcon}
                              alt="Address"
                              title="Address"
                            />
                          </div>
                          <div>
                            3, Gjendra Vihar, 80 Feet Road Mahesh Nagar Jaipur,
                            Rajasthan - 302018 INDIA
                          </div>
                        </div>
                        <p className="my-2">
                          <img
                            className="pe-1"
                            src={PhoneIcon}
                            alt="Phone Number"
                            title="Phone Number"
                          />{" "}
                          +91 6232 69 6232
                        </p>
                        <p className="my-2">
                          <img
                            className="pe-1"
                            src={EmailIcon}
                            alt="Email Id"
                            title="Email ID"
                          />{" "}
                          info@indtechmark.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FreeCons />
    </>
  );
};

export default ContactUS;
