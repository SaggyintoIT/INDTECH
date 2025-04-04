import React, { useState } from "react";
import "./CreativeTool.css";
// Import images (replace with your actual image paths)
import tickCircle from "../../../assets/images/tick-circle.svg";

const CreativeTool = () => {
  const [activeTab, setActiveTab] = useState("ui-ux");

  // Data for the tabs
  const tabs = [
    {
      id: "ui-ux",
      label: "UI UX",
      tools: ["Sketch", "Adobe XD", "Photoshop", "Illustrator", "Figma"],
    },
    {
      id: "prototyping",
      label: "Prototyping",
      tools: ["Adobe XD", "Invision Studio", "Sketch", "Figma"],
    },
    {
      id: "collaboration",
      label: "Collaboration",
      tools: ["Zeplin", "Invision", "Adobe Cloud"],
    },
    {
      id: "illustrator-graphic-design",
      label: "Illustrator & Graphic Design",
      tools: ["Illustrator", "Photoshop", "Sketch"],
    },
  ];

  return (
    <div className="gallery-block bodypx py-80 section-hire-technology-stacks Proficiencyblock">
      <div className="container text-center">
        <div className="col-md-12 mx-auto">
          <h2 className="font-40 mb-2 we-serve__title">
            Creative Tools Our Web Designers Excel With
          </h2>
          <p className="font-18 mt-3 px-md-5">
            Our expert team of web designers expertly utilize top-tier tools to
            craft visually stunning and user-friendly websites. These tools
            enable us to deliver innovative designs that drive engagement and
            success. Have a look!
          </p>
        </div>
      </div>

      <div className="container-fluid mt-lg-5">
        <div className="row">
          <div className="col-12 text-center">
            {/* Tab Navigation */}
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              {tabs.map((tab) => (
                <li key={tab.id} role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content text-left">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  className={`tab-pane fade ${
                    activeTab === tab.id ? "show active" : ""
                  }`}
                >
                  <div className="row g-4 portfolio-container mt-3 tech-outer">
                    <div className="col-lg-9 mx-auto">
                      <div className="techs-main d-md-flex align-items-end lightgraybg br-24 mb-3">
                        <div className="technology-stacks-techs">
                          <ul className="list-unstyled m-0 p-0">
                            {tab.tools.map((tool, index) => (
                              <li key={index} className="font-18 text-dgray">
                                <img
                                  src={tickCircle}
                                  alt="Tick"
                                  className="me-2"
                                />
                                {tool}
                              </li>
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
        </div>
      </div>
    </div>
  );
};

export default CreativeTool;
