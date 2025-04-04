import React from "react";
import FreeCons from "../OurTeam/FreeCons";

const BannerFreeCons = () => {
  return (
    <>
      <section className="banner bg-dark mb-5">
        <div className="text-center h-450 text-white pt-70">
          <span className="text-white fs-70 fw-600">
            Say <span className="text-red">Hello!</span>
          </span>
          <p className="fn-24">
            Are You Ready to Level-up Your Business With a Reliable Technology
            Partner?
          </p>
        </div>
      </section>

      <section className="bodypx py-80 pt-0 bg psm-ph">
        <div className="form-box p-0 shadowone overflow">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-12 outer-col-2">
                <div className="py-md-5 p-4">
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
                                  type="text"
                                  className="form-control font-16 nameicon"
                                  id="company"
                                  name="company"
                                  aria-describedby="companyHelp"
                                  placeholder="Company*"
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
                            <div className="col-lg-6 select-country">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <div className="country-list collaborate-list">
                                  <div className="SumoSelect" tabIndex="0">
                                    <select
                                      id="country_name"
                                      className="js-example-placeholder-single js-states form-control font-16 in"
                                      tabIndex="-1"
                                    >
                                      <option
                                        value="what you are looking for?*"
                                        selected
                                      >
                                        What you are looking for?*
                                      </option>
                                      <option value="E- Commerce / Web Development">
                                        E- Commerce / Web Development
                                      </option>
                                      <option value="Digital Marketing">
                                        Digital Marketing
                                      </option>
                                      <option value="App Development">
                                        App Development
                                      </option>
                                      <option value="Search Engine Optimization">
                                        Search Engine Optimization
                                      </option>
                                      <option value="Logo">Logo</option>
                                      <option value="Partnership">
                                        Partnership
                                      </option>
                                    </select>
                                  </div>
                                </div>
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
                            <div className="col-lg-6">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <input
                                  type="text"
                                  className="form-control font-16 websiteicon"
                                  id="website"
                                  name="website"
                                  aria-describedby="websiteHelp"
                                  placeholder="Website*"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 select-country">
                              <div className="mb-3 mb-lg-4 form-item line">
                                <div className="country-list collaborate-list">
                                  <div className="SumoSelect" tabIndex="0">
                                    <select
                                      id="country_name"
                                      className="js-example-placeholder-single js-states form-control font-16 timelineicon"
                                      tabIndex="-1"
                                    >
                                      <option value="Timeline*" selected>
                                        Timeline*
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 select-country">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3 mb-lg-4 form-item line pt-3">
                                    <div className="d-flex mt-2">
                                      <div>
                                        <label
                                          className="radio-button-container text-uppercase"
                                          disabled
                                        >
                                          Fixed
                                          <input
                                            type="radio"
                                            defaultChecked
                                            name="radio"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                      </div>
                                      <div className="ms-auto">
                                        <label className="radio-button-container text-uppercase">
                                          Monthly
                                          <input type="radio" name="radio" />
                                          <span className="checkmark"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 select-country">
                                  <div className="mb-3 mb-lg-4 form-item line">
                                    <div className="country-list collaborate-list">
                                      <div className="SumoSelect" tabIndex="0">
                                        <select
                                          id="Budget"
                                          className="js-example-placeholder-single js-states form-control font-16 ps-0"
                                          tabIndex="-1"
                                        >
                                          <option
                                            value="Select Budget*"
                                            selected
                                          >
                                            Select Budget*
                                          </option>
                                          <option value="USD 5000 to USD 10000">
                                            USD 5000 to USD 10000
                                          </option>
                                          <option value="USD 10000 to USD 25000">
                                            USD 10000 to USD 25000
                                          </option>
                                          <option value="USD 25000 to USD 50000">
                                            USD 25000 to USD 50000
                                          </option>
                                          <option value="USD 50000+">
                                            USD 50000+
                                          </option>
                                        </select>
                                      </div>
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
                                  id="message"
                                  placeholder=""
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
                                    Please upload a file with one of the
                                    following extensions: .pdf, .docx
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
                              <div className="d-flex align-items-start">
                                <a
                                  href="javascript:void(0)"
                                  className="btn-darkblack iph-w100 mt-4 fw-bold fn-16"
                                >
                                  <span>Submit</span>
                                  <i className="icon icon-arrow"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default BannerFreeCons;
