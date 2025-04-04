import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechStackWeUse.css";

// Import images
import languages1 from "../../../assets/images/languages_1.svg";
import languages2 from "../../../assets/images/languages_2.svg";
import languages3 from "../../../assets/images/languages_3.svg";
import languages4 from "../../../assets/images/languages_4.svg";
import languages5 from "../../../assets/images/languages_5.svg";
import languages6 from "../../../assets/images/languages_6.svg";
import languages7 from "../../../assets/images/languages_7.svg";
import languages8 from "../../../assets/images/languages_8.svg";
import languages9 from "../../../assets/images/languages_9.svg";

import frameworks1 from "../../../assets/images/frameworks_1.svg";
import frameworks2 from "../../../assets/images/frameworks_2.svg";
import frameworks3 from "../../../assets/images/frameworks_3.svg";
import frameworks4 from "../../../assets/images/frameworks_4.svg";
import frameworks5 from "../../../assets/images/frameworks_5.svg";
import frameworks6 from "../../../assets/images/frameworks_6.svg";

import database1 from "../../../assets/images/database_1.svg";
import database2 from "../../../assets/images/database_2.svg";
import database3 from "../../../assets/images/database_3.svg";
import database4 from "../../../assets/images/database_4.svg";
import database5 from "../../../assets/images/database_5.svg";
import database6 from "../../../assets/images/database_6.svg";
import database7 from "../../../assets/images/database_7.svg";
import database8 from "../../../assets/images/database_8.svg";
import database9 from "../../../assets/images/database_9.svg";

import devops1 from "../../../assets/images/devops_1.svg";
import devops2 from "../../../assets/images/devops_2.svg";
import devops3 from "../../../assets/images/devops_3.svg";
import devops4 from "../../../assets/images/devops_4.svg";
import devops5 from "../../../assets/images/devops_5.svg";
import devops6 from "../../../assets/images/devops_6.svg";
import devops7 from "../../../assets/images/devops_7.svg";
import devops8 from "../../../assets/images/devops_8.svg";
import devops9 from "../../../assets/images/devops_9.svg";

import payment1 from "../../../assets/images/payment_1.svg";
import payment2 from "../../../assets/images/payment_2.svg";
import payment3 from "../../../assets/images/payment_3.svg";
import payment4 from "../../../assets/images/payment_4.svg";
import payment5 from "../../../assets/images/payment_5.svg";

import clouds1 from "../../../assets/images/clouds_1.svg";
import clouds2 from "../../../assets/images/clouds_2.svg";
import clouds3 from "../../../assets/images/clouds_3.svg";
import clouds4 from "../../../assets/images/clouds_4.svg";

const TechStackWeUse = () => {
  const [activeTab, setActiveTab] = useState("hovertabeslid_tab-1");

  const tabs = [
    {
      id: "hovertabeslid_tab-1",
      title: "Programming Languages",
      content: [
        { icon: languages1, name: "C-#" },
        { icon: languages2, name: "C++" },
        { icon: languages3, name: "HTML5" },
        { icon: languages4, name: "Java" },
        { icon: languages5, name: "Javascript" },
        { icon: languages6, name: "OBJ-C" },
        { icon: languages7, name: "Swift" },
        { icon: languages8, name: "Kotdivn" },
        { icon: languages9, name: "Python" },
      ],
    },
    {
      id: "hovertabeslid_tab-2",
      title: "Frameworks",
      content: [
        { icon: frameworks1, name: "Appcelerator" },
        { icon: frameworks2, name: "Flutter" },
        { icon: frameworks3, name: "Node JS" },
        { icon: frameworks4, name: "Phonegap" },
        { icon: frameworks5, name: "Lonic" },
        { icon: frameworks6, name: "Xamarin" },
      ],
    },
    {
      id: "hovertabeslid_tab-3",
      title: "Databases",
      content: [
        { icon: database1, name: "Apache Haase" },
        { icon: database2, name: "Apache Nifi" },
        { icon: database3, name: "Cassandra" },
        { icon: database4, name: "Hive" },
        { icon: database5, name: "MongoDB" },
        { icon: database6, name: "Mysql" },
        { icon: database7, name: "Oracle" },
        { icon: database8, name: "Postgre SQL" },
        { icon: database9, name: "SQL Server" },
      ],
    },
    {
      id: "hovertabeslid_tab-4",
      title: "Devops",
      content: [
        { icon: devops1, name: "Ansible" },
        { icon: devops2, name: "Chef" },
        { icon: devops3, name: "Docker" },
        { icon: devops4, name: "Kubernet" },
        { icon: devops5, name: "Openshift" },
        { icon: devops6, name: "Puppet" },
        { icon: devops7, name: "Saltstack" },
        { icon: devops8, name: "SQL Server" },
        { icon: devops9, name: "Terraform" },
      ],
    },
    {
      id: "hovertabeslid_tab-5",
      title: "Payment Gateways",
      content: [
        { icon: payment1, name: "Adyen" },
        { icon: payment2, name: "Alipay" },
        { icon: payment3, name: "Paypal" },
        { icon: payment4, name: "Square" },
        { icon: payment5, name: "Stripe" },
      ],
    },
    {
      id: "hovertabeslid_tab-6",
      title: "Clouds",
      content: [
        { icon: clouds1, name: "AWS" },
        { icon: clouds2, name: "Azure" },
        { icon: clouds3, name: "Digital Ocean" },
        { icon: clouds4, name: "Google Cloud" },
      ],
    },
  ];

  return (
    <section className="slicktabslider pt-0 py-80">
      <div className="container">
        <div className="text-center">
          <div className="col-md-12 mx-auto">
            <h2 className="font-40 mb-2 we-serve__title">Tech Stack We Use</h2>
            <p className="font-18 mt-3 px-md-5">
              Successful mobile app development in Dubai demands mastery of
              high-end technologies to keep pace with the ever-evolving dynamics
              of this vibrant city. Thus, we have engineers of all technologies
              in our Dubai office.
            </p>
          </div>
          <div className="tech_us wow zoomin pt-4">
            <div
              className="nav nav-pills"
              id="hovertabeslid_tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
            <div className="techs-main lightgraybg br-24 tab-content wow slideInUp p-4 wow slideInUp">
              {tabs
                .filter((tab) => tab.id === activeTab)
                .map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane pnl1 ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    tabIndex="0"
                  >
                    <LogoSlider logos={tab.content} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tab = ({ tab, isActive, onClick }) => (
  <button
    className={`nav-link ${isActive ? "active" : ""}`}
    onMouseEnter={onClick}
    onFocus={onClick}
    aria-selected={isActive}
    role="tab"
  >
    <p>{tab.title}</p>
  </button>
);

const LogoSlider = ({ logos }) => (
  <div className="logo-slider-container">
    <div className="logo-slider-track">
      {logos.map((item, index) => (
        <div key={index} className="logo-slide">
          <img src={item.icon} alt={item.name} />
          <h4>{item.name}</h4>
        </div>
      ))}
      {logos.map((item, index) => (
        <div key={`dup-${index}`} className="logo-slide">
          <img src={item.icon} alt={item.name} />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default TechStackWeUse;
