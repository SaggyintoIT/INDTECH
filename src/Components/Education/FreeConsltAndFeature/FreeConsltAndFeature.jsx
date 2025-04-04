import React from "react";

// Import images
import educationalAppImage from "../../../assets/images/Educationalapp.svg";
import education7 from "../../../assets/images/education_7.svg";
import education8 from "../../../assets/images/education_8.svg";
import education9 from "../../../assets/images/education_9.svg";
import education10 from "../../../assets/images/education_10.svg";
import education11 from "../../../assets/images/education_11.svg";
import education12 from "../../../assets/images/education_12.svg";
import education13 from "../../../assets/images/education_13.svg";
import education14 from "../../../assets/images/education_14.svg";
import education15 from "../../../assets/images/education_15.svg";

const EducationAppFeatures = () => {
  // Data for the features
  const features = [
    {
      icon: education7,
      title: "Curriculum Management",
      description:
        "Efficiently organize and manage course content, assignments, and resources, ensuring a structured and accessible learning experience for both educators and students.",
    },
    {
      icon: education8,
      title: "Video Conferencing",
      description:
        "We facilitate real-time virtual classrooms and interactive discussions, enhancing remote learning and collaboration through virtual classroom software development.",
    },
    {
      icon: education9,
      title: "Lecture Scheduling",
      description:
        "We enable educators to set and manage lecture schedules, making it convenient for students to plan and access their classes on time.",
    },
    {
      icon: education10,
      title: "Audio Streaming",
      description:
        "We deliver audio-based educational content, allowing students to engage with lessons, podcasts, and lectures through seamless streaming.",
    },
    {
      icon: education11,
      title: "Smart Classes Module",
      description:
        "We integrate modern teaching methods with interactive digital content, turning traditional classrooms into dynamic smart classes.",
    },
    {
      icon: education12,
      title: "Push Notification",
      description:
        "We keep learners informed with instant updates, announcements, and important notifications for a streamlined and responsive educational experience.",
    },
    {
      icon: education13,
      title: "Integrated Leaderboards",
      description:
        "We gamify the learning process by implementing leaderboards, fostering healthy competition among students, and encouraging their active participation.",
    },
    {
      icon: education14,
      title: "Track History",
      description:
        "We provide learners with the ability to review their learning journey, track progress, and revisit past content to reinforce their understanding.",
    },
    {
      icon: education15,
      title: "Document Sharing",
      description:
        "We simplify the exchange of educational materials by offering a secure and efficient platform for sharing documents, assignments, and supplementary resources.",
    },
  ];

  return (
    <>
      {/* Bring Your Educational App Idea to Life Section */}
      <section className="bodypx py-80 pt-0 hailwhitebg">
        <div className="redblackbg rounded30 px-md-4 psm-ph">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 text-md-start text-center ps-md-5">
                <h2 className="text-white fs-50 fw-400">
                  Looking to Bring Your Out-of-the-box{" "}
                  <span className="text-white fw-600">Educational App</span>{" "}
                  Idea to Life?
                </h2>
                <p className="fn-24 text-white">
                  Our Expert app developers are ready to create the future of
                  learning with you!
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
                  src={educationalAppImage}
                  alt="Educational App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Demand Features Section */}
      <section className="bodypx py-80 pt-0" id="in-demand-features">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              In-Demand Features We Use In Your E-Learning App
            </h2>
            <p className="font-18 mt-3">
              Discover the essential features our e-learning app development
              company offers, from interactive online training tools to adaptive
              e-learning platforms, our learning app solutions empower you to
              deliver dynamic and engaging educational experiences.
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mt-4">
                <div className="appdevbg padding30 rounded16 h-100">
                  <img
                    className="d-block"
                    src={feature.icon}
                    alt={feature.title}
                  />
                  <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                    {feature.title}
                  </span>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationAppFeatures;
