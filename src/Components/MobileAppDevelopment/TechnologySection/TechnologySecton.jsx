import React, { useState } from "react";
import tickCircle from "../../../assets/images/tick-circle.svg"; // Import the tick-circle image
import "./TechnologySection.css";
const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("hot-jobs"); // State to manage active tab

  // Data for each tab
  const tabData = {
    "hot-jobs": {
      heading: "IOS",
      technologies: ["Swift", "SwiftUI", "Objective-C", "X-Code"],
    },
    "recent-jobs": {
      heading: "ANDROID",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Version Control tools (Git, GitLab, Bit Bucket)",
      ],
    },
    "popular-jobs": {
      heading: "CROSS PLATFORM",
      technologies: ["Flutter", "React Native", "Ionic", "NativeScript"],
    },
    Database: {
      heading: "DATABASE",
      technologies: [
        "Firebase",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "DynamoDB",
        "SQLite",
      ],
    },
    DesignTool: {
      heading: "DESIGN TOOL",
      technologies: [
        "Figma",
        "Sketch",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "After Effects",
        "InVision",
        "Zeplin",
      ],
    },
  };

  return (
    <div className="gallery-block bodypx pt-5 section-hire-technology-stacks Proficiencyblock">
      <div className="container">
        <div className="col-md-12 text-center">
          <h2>Our Team's Technological Expertise in Web Development</h2>
        </div>
      </div>
      <div className="container-fluid mt-lg-5">
        <div className="row">
          <div className="col-12 text-center">
            {/* Tab Navigation */}
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              {Object.entries(tabData).map(([tab, { heading }]) => (
                <li key={tab} role="presentation" className="nav-item">
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    aria-selected={activeTab === tab}
                  >
                    <strong>{heading}</strong>
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content text-left">
              {Object.entries(tabData).map(([tab, { technologies }]) => (
                <div
                  key={tab}
                  role="tabpanel"
                  className={`tab-pane fade ${
                    activeTab === tab ? "show active" : ""
                  }`}
                  id={tab}
                >
                  <div className="row g-4 portfolio-container mt-3 tech-outer">
                    <div className="col-lg-12 mx-auto">
                      <div className="techs-main d-md-flex align-items-end lightgraybg br-24 mb-3">
                        <div className="technology-stacks-techs">
                          <ul className="list-unstyled m-0 p-0 w-100">
                            {technologies.map((tech) => (
                              <li key={tech} className="font-18 text-dgray">
                                <img
                                  src={tickCircle}
                                  className="me-2"
                                  alt="tick"
                                />
                                {tech}
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

export default TechnologiesSection;
