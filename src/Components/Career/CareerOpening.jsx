import React, { useState } from "react";
import FreeCons from "../OurTeam/FreeCons";

const JobOpenings = () => {
  // State to manage which job description is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of a job description
  const toggleDetails = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open section
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  // Job openings data
  const jobOpenings = [
    {
      title: "Business Development Executive",
      experience: "1+ Years",
      openings: 2,
      description: {
        jobDescription:
          "The Android Developer is a key member of our team to develop the next generation of mobile applications. The team will work closely with designers, project managers, and business partners to develop and maintain world-class Android mobile apps in conjunction with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        responsibilities: [
          "Design and build advanced applications for the Android platform.",
          "Collaborate with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams to define, design, and ship new features.",
          "Unit-test code for robustness, including edge cases, usability, and general reliability.",
          "Work on bug fixes and continuously improve application performance.",
        ],
        requirements: [
          "BS/MS degree in Computer Science, Engineering or a related subject.",
          "Proven work experience in software development within small teams.",
          "Substantial experience with fully-native Android development, including having published one or more apps in Google Play that use client-server interactions.",
          "Deep familiarity with Kotlin and Android Studio.",
          "Experience working with the Android SDK and SDK Tools, including compatibility libraries.",
          "Experience with third-party libraries and APIs.",
          "Solid understanding of the full mobile development life cycle.",
          "Experience working on Android app development projects with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        ],
        keySkills: [
          "Kotlin, Android, MVVM, Java, MVP, Android Application Development, Mobile Application Development",
        ],
      },
    },
    {
      title: "Content Writer",
      experience: "1+ Years",
      openings: 2,
      description: {
        jobDescription:
          "The Android Developer is a key member of our team to develop the next generation of mobile applications. The team will work closely with designers, project managers, and business partners to develop and maintain world-class Android mobile apps in conjunction with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        responsibilities: [
          "Design and build advanced applications for the Android platform.",
          "Collaborate with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams to define, design, and ship new features.",
          "Unit-test code for robustness, including edge cases, usability, and general reliability.",
          "Work on bug fixes and continuously improve application performance.",
        ],
        requirements: [
          "BS/MS degree in Computer Science, Engineering or a related subject.",
          "Proven work experience in software development within small teams.",
          "Substantial experience with fully-native Android development, including having published one or more apps in Google Play that use client-server interactions.",
          "Deep familiarity with Kotlin and Android Studio.",
          "Experience working with the Android SDK and SDK Tools, including compatibility libraries.",
          "Experience with third-party libraries and APIs.",
          "Solid understanding of the full mobile development life cycle.",
          "Experience working on Android app development projects with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        ],
        keySkills: [
          "Kotlin, Android, MVVM, Java, MVP, Android Application Development, Mobile Application Development",
        ],
      },
    },
    {
      title: "Content Writer",
      experience: "1+ Years",
      openings: 2,
      description: {
        jobDescription:
          "The Android Developer is a key member of our team to develop the next generation of mobile applications. The team will work closely with designers, project managers, and business partners to develop and maintain world-class Android mobile apps in conjunction with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        responsibilities: [
          "Design and build advanced applications for the Android platform.",
          "Collaborate with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams to define, design, and ship new features.",
          "Unit-test code for robustness, including edge cases, usability, and general reliability.",
          "Work on bug fixes and continuously improve application performance.",
        ],
        requirements: [
          "BS/MS degree in Computer Science, Engineering or a related subject.",
          "Proven work experience in software development within small teams.",
          "Substantial experience with fully-native Android development, including having published one or more apps in Google Play that use client-server interactions.",
          "Deep familiarity with Kotlin and Android Studio.",
          "Experience working with the Android SDK and SDK Tools, including compatibility libraries.",
          "Experience with third-party libraries and APIs.",
          "Solid understanding of the full mobile development life cycle.",
          "Experience working on Android app development projects with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        ],
        keySkills: [
          "Kotlin, Android, MVVM, Java, MVP, Android Application Development, Mobile Application Development",
        ],
      },
    },
    {
      title: "Content Writer",
      experience: "1+ Years",
      openings: 2,
      description: {
        jobDescription:
          "The Android Developer is a key member of our team to develop the next generation of mobile applications. The team will work closely with designers, project managers, and business partners to develop and maintain world-class Android mobile apps in conjunction with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        responsibilities: [
          "Design and build advanced applications for the Android platform.",
          "Collaborate with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams to define, design, and ship new features.",
          "Unit-test code for robustness, including edge cases, usability, and general reliability.",
          "Work on bug fixes and continuously improve application performance.",
        ],
        requirements: [
          "BS/MS degree in Computer Science, Engineering or a related subject.",
          "Proven work experience in software development within small teams.",
          "Substantial experience with fully-native Android development, including having published one or more apps in Google Play that use client-server interactions.",
          "Deep familiarity with Kotlin and Android Studio.",
          "Experience working with the Android SDK and SDK Tools, including compatibility libraries.",
          "Experience with third-party libraries and APIs.",
          "Solid understanding of the full mobile development life cycle.",
          "Experience working on Android app development projects with Shopify, Shopify Plus, Magento, Woocommerce / WordPress, Adobe Experience Manager, Salesforce Commerce Cloud, Adobe commerce, Bigcommerce development teams.",
        ],
        keySkills: [
          "Kotlin, Android, MVVM, Java, MVP, Android Application Development, Mobile Application Development",
        ],
      },
    },

    // Add more job openings here...
  ];

  return (
    <>
      <section className="bodypx carrierOpening">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-12 text-center">
              <h2 className="font-40">Current openings</h2>
              <p className="font-18 poppins-regular my-3">
                We're hiring for the following positions. If you are interested
                in any and find yourself the best fit, please apply here.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="career-opening-main">
                <div className="accordion" id="accordionExample">
                  {jobOpenings.map((job, index) => (
                    <div className="accordion-item br-24" key={index}>
                      <div className="accordion-header" id={`heading${index}`}>
                        <div className="opening-left">
                          <h4 className="fn-24 fw-bold mb-1">{job.title}</h4>
                          <div className="d-flex align-items-center pt-1">
                            <p className="font-18 pe-2 line-h border-r-1 text-lgray3">
                              Experience {job.experience}
                            </p>
                            <p className="font-18 ps-2 text-lgray3">
                              No of openings {job.openings}
                            </p>
                          </div>
                        </div>
                        <div className="opening-right d-flex align-items-center justify-content-between">
                          <div
                            className="accordion-button w-sm-auto p-sm-0 collapsed"
                            type="button"
                            onClick={() => toggleDetails(index)}
                          >
                            <button className="btn2 fw-bold fn-16">
                              <span>Details</span>
                              <i className="icon icon-arrow"></i>
                            </button>
                          </div>
                          <a
                            href="#main-footer"
                            className="btn-darkblack fw-bold d-none d-md-inline-flex w-100 text-center apply-title-fill"
                            style={{ maxWidth: "220px" }}
                          >
                            <span>Apply Now</span>
                            <i className="icon icon-arrow"></i>
                          </a>
                        </div>
                      </div>

                      {/* Job Description */}
                      {openIndex === index && (
                        <div
                          id={`collapse${index}`}
                          className="accordion-collapse collapse show"
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body text-dark">
                            <p className="fw-bold mb-2">Job description</p>
                            <p>{job.description.jobDescription}</p>
                            <p className="fw-bold mb-2 mt-3">What you’ll do</p>
                            <ul className="list-unstyled requirements">
                              {job.description.responsibilities.map(
                                (item, i) => (
                                  <li key={i}>{item}</li>
                                )
                              )}
                            </ul>

                            <p className="fw-bold mb-2 mt-3">
                              What you’ll need
                            </p>
                            <ul className="list-unstyled requirements">
                              {job.description.requirements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            <p className="fw-bold mb-2 mt-3">Key Skills -</p>
                            <ul className="list-unstyled requirements">
                              {job.description.keySkills.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>

                            <div className="apply-now mt-2 mt-md-3 fw-600">
                              Apply Now On
                              <a
                                href="mailto:career@indtechmark.com"
                                className="text-dark"
                              >
                                career@indtechmark.com
                              </a>{" "}
                              OR Call Us on
                              <a
                                href="tel:+91 6232 69 6232"
                                className="text-dark"
                              >
                                {" "}
                                +91 6232 69 6232
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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

export default JobOpenings;
