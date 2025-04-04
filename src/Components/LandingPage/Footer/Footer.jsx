// import React from "react";
// import footerLogo from "../../assets/images/footerlogo.svg"; // Import footer logo
// import mapPinIcon from "../../assets/images/map_pin.svg"; // Import map pin icon
// import emailIcon from "../../assets/images/email_2.svg"; // Import email icon
// import callIcon from "../../assets/images/call.svg"; // Import call icon
// import mailIcon from "../../assets/images/mail-icon.svg"; // Import mail icon
// import wattIcon from "../../assets/images/watt.svg"; // Import WhatsApp icon
// import "swiper/scss/pagination";
// const Footer = () => {
//   return (
//     <>
//       <div className="bodypx bg-white paddingtop-200">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-6 col-md-6 first-outer">
//               <div className="second-inner">
//                 <div className="wow fadeInUp">
//                   <h3 className="fn-34">Interested in working with us?</h3>
//                 </div>
//                 <p className="f-22 wow fadeInRight">
//                   LET'S TALK AND GET STARTED
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="bodypx pb-5 pt-4">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-6 col-md-4 outer-col-1 py-5">
//               <div className="text272A2E px-4 py-3 rounded-3">
//                 <div className="d-flex align-items-center">
//                   <div className="iconshow">
//                     <img src={mailIcon} alt="Mail Icon" />
//                   </div>
//                   <div className="ms-3 line-h">
//                     <p className="mb-2 text-uppercase text-lgray3">
//                       mail to our sales department
//                     </p>
//                     <a
//                       href="mailto:info@indtechmark.com"
//                       className="fn-24 fw-midem text-white"
//                       title="info@indtechmark.com"
//                     >
//                       info@indtechmark.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-red px-4 py-3 rounded-3 mt-4">
//                 <div className="d-flex align-items-center">
//                   <div className="iconshow">
//                     <img src={wattIcon} alt="WhatsApp Icon" />
//                   </div>
//                   <div className="ms-3 line-h">
//                     <p className="mb-2 text-uppercase text-white-50">
//                       our WhatsApp number
//                     </p>
//                     <a
//                       href="https://wa.me/916232696232"
//                       className="fn-24 fw-midem text-white"
//                       title="+91 6232 69 6232"
//                     >
//                       +91 6232 69 6232
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-6 col-md-8 outer-col-2">
//               <div className="form-box ms-md-5">
//                 <div className="title mb-20 wow fadeInDown">
//                   <form
//                     id="collaborateForm"
//                     method="post"
//                     className="form-horizontal"
//                     action=""
//                     name="collaborate-form"
//                     noValidate
//                   >
//                     <div className="row justify-content-center">
//                       <div className="col-md-12">
//                         <div className="row">
//                           <div className="col-lg-6">
//                             <div className="mb-3 mb-lg-4 form-item line">
//                               <input
//                                 type="text"
//                                 className="form-control font-16 nameicon"
//                                 id="firstname"
//                                 name="firstname"
//                                 placeholder="Name*"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-6">
//                             <div className="mb-3 mb-lg-4 form-item line">
//                               <input
//                                 type="email"
//                                 className="form-control font-16 emailicon"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Email address*"
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-6 form-item mb-3 mb-lg-4">
//                             <div className="country-wrap">
//                               <div className="country-code d-flex">
//                                 <div className="country-number">
//                                   <div className="form-group line">
//                                     <input
//                                       type="text"
//                                       id="mobile_code"
//                                       className="form-control font-16 ps-0"
//                                       placeholder="Mobile Number*"
//                                       name="name"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-6 select-country">
//                             <div className="mb-3 mb-lg-4 form-item line">
//                               <div className="country-list collaborate-list">
//                                 <select
//                                   id="country_name"
//                                   className="js-example-placeholder-single js-states form-control font-16 in"
//                                 >
//                                   <option value="interested in*" selected>
//                                     Interested in*
//                                   </option>
//                                   <option value="IN">India</option>
//                                   <option value="AF">Afghanistan</option>
//                                 </select>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <div className="mb-3 mb-lg-4 form-item line">
//                             <label className="text-lgray3 text-uppercase fw-400 mess ps-4 mb-2">
//                               <span className="ms-2">Message*</span>
//                             </label>
//                             <textarea
//                               className="form-control-textarea w-100 font-16 rounded-3 p-3 border-0"
//                               id="message"
//                               placeholder=""
//                               rows="3"
//                               name="message"
//                             ></textarea>
//                           </div>
//                         </div>
//                         <div className="col-md-12 upload-files">
//                           <div className="form-item inputDnD inputfiles">
//                             <div className="inside-div">
//                               <span className="d-flex align-items-center">
//                                 <span className="attach_icon"></span>
//                                 <p className="ms-1 font-18 mb-0">
//                                   Attach a file
//                                 </p>
//                               </span>
//                               <span className="para-text d-block text-left font-12">
//                                 Please upload a file with one of the following
//                                 extensions: .pdf, .docx
//                               </span>
//                             </div>
//                             <label className="file">
//                               <input
//                                 name="attach_file"
//                                 className="custom-file form-control-file"
//                                 type="file"
//                                 id="project_attach_file"
//                                 multiple
//                                 data-title="Drag 'n' drop your CV here, or select file"
//                               />
//                               <div
//                                 style={{ display: "none" }}
//                                 id="file-upload-filename"
//                                 className="align-items-center"
//                               >
//                                 <span id="file-text-name"></span>
//                                 <a
//                                   className="d-flex file-clear"
//                                   href="javascript:void(0)"
//                                 >
//                                   <span className="material-symbols-rounded">
//                                     close
//                                   </span>
//                                 </a>
//                               </div>
//                             </label>
//                           </div>
//                         </div>
//                         <input
//                           type="hidden"
//                           name="recaptcha_response"
//                           id="recaptchaResponse"
//                         />
//                         <div className="col-md-12">
//                           <div className="d-flex align-items-end">
//                             <a
//                               href="javascript:void(0)"
//                               className="btn-darkblack iph-w100 mt-4 mt-xl-3 fw-bold fn-16 ms-sm-auto"
//                             >
//                               <span>send your enquiry</span>
//                               <i className="icon icon-arrow"></i>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-md-0 mt-5">
//             <div className="col-md-12">
//               <img className="footerlogo" src={footerLogo} alt="Footer Logo" />
//             </div>
//             <div className="col-sm-12 col-md-4" data-aos="fade-up">
//               <div className="pt-5">
//                 <div className="d-flex align-items-baseline">
//                   <div className="me-1">
//                     <img
//                       src={mapPinIcon}
//                       alt="Address"
//                       title=""
//                       width="21"
//                       height="20"
//                       className="pe-1"
//                     />
//                   </div>
//                   <h5 className="fn-face2 fn-16 text-white mb-2">
//                     Shishwachak, Punpun, Patna (804453)
//                   </h5>
//                 </div>
//                 <p className="mb-2">
//                   <div className="d-flex align-items-baseline">
//                     <div className="me-1">
//                       <img
//                         className="pe-1"
//                         src={emailIcon}
//                         alt="Email"
//                         title=""
//                         width="21"
//                         height="20"
//                       />
//                     </div>
//                     <a
//                       className="fn-16 text-white"
//                       href="mailto:info@indtechmark.com"
//                       title="info@indtechmark.com"
//                     >
//                       info@indtechmark.com
//                     </a>
//                   </div>
//                 </p>
//                 <p className="">
//                   <div className="d-flex align-items-baseline">
//                     <div className="me-1">
//                       <img
//                         className="pe-1"
//                         src={callIcon}
//                         alt="Call"
//                         title=""
//                         width="21"
//                         height="20"
//                       />
//                     </div>
//                     <a
//                       className="fn-16 text-white"
//                       href="tel:+91 6232 69 6232"
//                       title="+91 6232 69 6232"
//                     >
//                       +91 6232 69 6232
//                     </a>
//                   </div>
//                 </p>

//                 <div className="socialLink">
//                   <a
//                     href="https://facebook.com/indtechmark"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 320 512"
//                       width="19px"
//                       height="23px"
//                       fill="#fff"
//                     >
//                       <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://x.com/indtechmark"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                       width="19px"
//                       height="23px"
//                       fill="#fff"
//                     >
//                       <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://in.linkedin.com/company/indtechmark"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 448 512"
//                       width="19px"
//                       height="23px"
//                       fill="#fff"
//                     >
//                       <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
//                     </svg>
//                   </a>
//                   <a href="javascript:void(0);">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 576 512"
//                       width="19px"
//                       height="23px"
//                       fill="#fff"
//                     >
//                       <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-12 col-md-8" data-aos="fade-up">
//               <div className="d-md-flex justify-content-between pr-100">
//                 <div className="mt-4 mt-md-0">
//                   <h4 className="fn-18 text-lgray3">Services</h4>
//                   <ul className="f_link pb-0">
//                     <li>
//                       <a href="mobile-app-development">
//                         Mobile App Development
//                       </a>
//                     </li>
//                     <li>
//                       <a href="web-development">Web Development</a>
//                     </li>
//                     <li>
//                       <a href="digital-marketing-services">Digital Marketing</a>
//                     </li>
//                     <li className="d-none">
//                       <a href="seo">Search Engine Optimization</a>
//                     </li>
//                     <li>
//                       <a href="website-design-company">Web Designing</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="ipad-w">
//                   <h4 className="fn-18 text-lgray3">Industries</h4>
//                   <ul className="f_link pb-0">
//                     <li>
//                       <a href="healthcare">Healthcare</a>
//                     </li>
//                     <li>
//                       <a href="social-media">Social Media</a>
//                     </li>
//                     <li>
//                       <a href="finance">Finance</a>
//                     </li>
//                     <li>
//                       <a href="education">Education</a>
//                     </li>
//                     <li>
//                       <a href="sports">Sports</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="ipad-w">
//                   <h4 className="fn-18 text-lgray3">COMPANY</h4>
//                   <ul className="f_link pb-0">
//                     <li>
//                       <a href="contact-us">Contact Us</a>
//                     </li>
//                     <li>
//                       <a href="about-us">About Us</a>
//                     </li>
//                     <li>
//                       <a href="blog">Blog</a>
//                     </li>
//                     <li>
//                       <a href="careers">Career</a>
//                     </li>
//                     <li>
//                       <a href="portfolio">Work</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <div className="bodypx bg-dark copyRright">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="py-4">
//               <div className="row">
//                 <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
//                   <p className="mb-0 font-primary fn-16 text-md-start">
//                     © Copyright 2024 IND Tech Mark. All Rights Reserved.
//                   </p>
//                 </div>
//                 <div className="col-md-6 order-md-2 order-1">
//                   <ul className="ms-auto p-0 quick-links f_link text-center text-lg-end">
//                     <li>
//                       <a href="privacy-policy">Privacy Policy</a>
//                     </li>
//                     <li>
//                       <a href="refund-policy">Refund Policy</a>
//                     </li>
//                     <li>
//                       <a href="disclaimer">Disclaimer</a>
//                     </li>
//                     <li>
//                       <a href="term-conditions">Term & Conditions</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import React, { useState } from "react";
import axios from "axios";
import footerLogo from "../../../assets/images/footerlogo.svg";
import mapPinIcon from "../../../assets/images/map_pin.svg";
import emailIcon from "../../../assets/images/email_2.svg";
import callIcon from "../../../assets/images/call.svg";
import mailIcon from "../../../assets/images/mail-icon.svg";
import wattIcon from "../../../assets/images/watt.svg";
import "swiper/scss/pagination";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interested: "",
    message: "",
    file: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("interested", formData.interested);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/formRoutes/submit-form", // Correct endpoint
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          interested: "",
          message: "",
          file: null,
        });
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="bodypx bg-white paddingtop-200">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6 first-outer">
              <div className="second-inner">
                <div className="wow fadeInUp">
                  <h3 className="fn-34">Interested in working with us?</h3>
                </div>
                <p className="f-22 wow fadeInRight">
                  LET'S TALK AND GET STARTED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bodypx pb-5 pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 outer-col-1 py-5">
              <div className="text272A2E px-4 py-3 rounded-3">
                <div className="d-flex align-items-center">
                  <div className="iconshow">
                    <img src={mailIcon} alt="Mail Icon" />
                  </div>
                  <div className="ms-3 line-h">
                    <p className="mb-2 text-uppercase text-lgray3">
                      mail to our sales department
                    </p>
                    <a
                      href="mailto:info@indtechmark.com"
                      className="fn-24 fw-midem text-white"
                      title="info@indtechmark.com"
                    >
                      info@indtechmark.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-red px-4 py-3 rounded-3 mt-4">
                <div className="d-flex align-items-center">
                  <div className="iconshow">
                    <img src={wattIcon} alt="WhatsApp Icon" />
                  </div>
                  <div className="ms-3 line-h">
                    <p className="mb-2 text-uppercase text-white-50">
                      our WhatsApp number
                    </p>
                    <a
                      href="https://wa.me/916232696232"
                      className="fn-24 fw-midem text-white"
                      title="+91 6232 69 6232"
                    >
                      +91 6232 69 6232
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-8 outer-col-2">
              <div className="form-box ms-md-5">
                <div className="title mb-20 wow fadeInDown">
                  <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3 mb-lg-4 form-item line">
                              <input
                                type="text"
                                className="form-control font-16 nameicon"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3 mb-lg-4 form-item line">
                              <input
                                type="email"
                                className="form-control font-16 emailicon"
                                name="email"
                                placeholder="Email address*"
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                                      className="form-control font-16 ps-0"
                                      placeholder="Mobile Number*"
                                      name="mobile"
                                      value={formData.mobile}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 select-country">
                            <div className="mb-3 mb-lg-4 form-item line">
                              <div className="country-list collaborate-list">
                                <select
                                  className="js-example-placeholder-single js-states form-control font-16 in"
                                  name="interested"
                                  value={formData.interested}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="" disabled>
                                    Interested in*
                                  </option>
                                  <option value="Mobile App Development">
                                    Mobile App Development
                                  </option>
                                  <option value="Web Development">
                                    Web Development
                                  </option>
                                  <option value="Digital Marketing">
                                    Digital Marketing
                                  </option>
                                </select>
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
                              className="form-control-textarea w-100 font-16 rounded-3 p-3 border-0"
                              placeholder=""
                              rows="3"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 upload-files">
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
                                name="file"
                                className="custom-file form-control-file"
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.docx"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="d-flex align-items-end">
                            <button
                              type="submit"
                              className="btn-darkblack iph-w100 mt-4 mt-xl-3 fw-bold fn-16 ms-sm-auto"
                              disabled={submitting}
                            >
                              {submitting
                                ? "Submitting..."
                                : "Send your enquiry"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {success && (
                    <div className="alert alert-success mt-3">
                      Form submitted successfully!
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-md-0 mt-5">
            <div className="col-md-12">
              <img className="footerlogo" src={footerLogo} alt="Footer Logo" />
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-up">
              <div className="pt-5">
                <div className="d-flex align-items-baseline">
                  <div className="me-1">
                    <img
                      src={mapPinIcon}
                      alt="Address"
                      title=""
                      width="21"
                      height="20"
                      className="pe-1"
                    />
                  </div>
                  <h5 className="fn-face2 fn-16 text-white mb-2">
                    Shishwachak, Punpun, Patna (804453)
                  </h5>
                </div>
                <p className="mb-2">
                  <div className="d-flex align-items-baseline">
                    <div className="me-1">
                      <img
                        className="pe-1"
                        src={emailIcon}
                        alt="Email"
                        title=""
                        width="21"
                        height="20"
                      />
                    </div>
                    <a
                      className="fn-16 text-white"
                      href="mailto:info@indtechmark.com"
                      title="info@indtechmark.com"
                    >
                      info@indtechmark.com
                    </a>
                  </div>
                </p>
                <p className="">
                  <div className="d-flex align-items-baseline">
                    <div className="me-1">
                      <img
                        className="pe-1"
                        src={callIcon}
                        alt="Call"
                        title=""
                        width="21"
                        height="20"
                      />
                    </div>
                    <a
                      className="fn-16 text-white"
                      href="tel:+91 6232 69 6232"
                      title="+91 6232 69 6232"
                    >
                      +91 6232 69 6232
                    </a>
                  </div>
                </p>

                <div className="socialLink">
                  <a
                    href="https://facebook.com/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/indtechmark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="19px"
                      height="23px"
                      fill="#fff"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
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
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-8" data-aos="fade-up">
              <div className="d-md-flex justify-content-between pr-100">
                <div className="mt-4 mt-md-0">
                  <h4 className="fn-18 text-lgray3">Services</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="mobile-app-development">
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a href="web-development">Web Development</a>
                    </li>
                    <li>
                      <a href="digital-marketing-services">Digital Marketing</a>
                    </li>
                    <li className="d-none">
                      <a href="seo">Search Engine Optimization</a>
                    </li>
                    <li>
                      <a href="website-design-company">Web Designing</a>
                    </li>
                  </ul>
                </div>
                <div className="ipad-w">
                  <h4 className="fn-18 text-lgray3">Industries</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="healthcare">Healthcare</a>
                    </li>
                    <li>
                      <a href="social-media">Social Media</a>
                    </li>
                    <li>
                      <a href="finance">Finance</a>
                    </li>
                    <li>
                      <a href="education">Education</a>
                    </li>
                    <li>
                      <a href="sports">Sports</a>
                    </li>
                  </ul>
                </div>
                <div className="ipad-w">
                  <h4 className="fn-18 text-lgray3">COMPANY</h4>
                  <ul className="f_link pb-0">
                    <li>
                      <a href="contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="about-us">About Us</a>
                    </li>
                    <li>
                      <a href="blog">Blog</a>
                    </li>
                    <li>
                      <a href="careers">Career</a>
                    </li>
                    <li>
                      <a href="portfolio">Work</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bodypx bg-dark copyRright">
        <div className="container-fluid">
          <div className="row">
            <div className="py-4">
              <div className="row">
                <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                  <p className="mb-0 font-primary fn-16 text-md-start">
                    © Copyright 2024 IND Tech Mark. All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 order-md-2 order-1">
                  <ul className="ms-auto p-0 quick-links f_link text-center text-lg-end">
                    <li>
                      <a href="privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="refund-policy">Refund Policy</a>
                    </li>
                    <li>
                      <a href="disclaimer">Disclaimer</a>
                    </li>
                    <li>
                      <a href="term-conditions">Term & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
