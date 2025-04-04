import React from "react";
// import "./SocialMediaApp.css";
import socialmedia1 from "../../../assets/images/socialmedia_1.svg";
import socialmedia2 from "../../../assets/images/socialmedia_2.svg";
import socialmedia3 from "../../../assets/images/socialmedia_3.svg";
import socialmedia4 from "../../../assets/images/socialmedia_4.svg";
import socialmedia5 from "../../../assets/images/socialmedia_5.svg";
import socialmedia6 from "../../../assets/images/socialmedia_6.svg";

// Services Data
const services = [
  {
    id: 1,
    img: socialmedia1,
    title: "Custom Social Networking Apps",
    description:
      "Our team of social app developers excels in building custom social networking apps which allow users to add friends, manage their network, and send requests to get added to other users’ networks.",
  },
  {
    id: 2,
    img: socialmedia2,
    title: "Social Network Analysis",
    description:
      "Our custom social network analysis tools help you to get insights into how your social campaigns are performing, how your users are interacting with the app, what experiences they are enjoying, and other behavioral metrics.",
  },
  {
    id: 3,
    img: socialmedia3,
    title: "Messaging App",
    description:
      "Our team understands how messaging and real-time chats form the backbone of a social media app. We develop platforms that enable instant connection in a safe and hack-proof environment.",
  },
  {
    id: 4,
    img: socialmedia4,
    title: "Video-Based Apps",
    description:
      "We create efficient live video streaming software to help you manage your streaming apps or channels efficiently and to the highest possible standards.",
  },
  {
    id: 5,
    img: socialmedia5,
    title: "Social Gaming App Development",
    description:
      "As leading social app builders, we bring networking, excitement, and technology together with our social gaming apps, providing a thrilling experience to connect and enjoy.",
  },
  {
    id: 6,
    img: socialmedia6,
    title: "Mobile Dating Apps",
    description:
      "Powered by geolocation and a robust verification algorithm, we simplify the dating world by giving users a simple and secure platform to build new relationships.",
  },
];

// Counter Data
const counters = [
  { id: 1, count: "60", text: "social media apps developed" },
  { id: 2, count: "100", text: "social media apps developed" },
  { id: 3, count: "98", text: "customer retention" },
  { id: 4, count: "50", text: "startups boosted" },
];

const SocialMediaApp = () => {
  return (
    <section className="bodypx py-80">
      <div className="container">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-40">Social Media App Development Services</h2>
          <p className="font-18 mt-3">
            From custom social networking website design to an extensive
            development process, our social app developers are skilled in
            connecting the world with a suite of services.
          </p>
        </div>
      </div>

      <div className="container-fluid mi-container">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4 mt-4" key={service.id}>
              <div className="appdevbg padding30 rounded16 h-100">
                <img
                  className="d-block"
                  src={service.img}
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

      {/* Counter Section */}
      <section className="bodypx py-80 pt-0">
        <div className="container-fluid mi-container">
          <div className="row">
            <div className="col-md-12">
              <div className="lightgraybg rounded24">
                <ul className="d-lg-flex left-counter counter-list counterlist py-5 px-3 libordernone">
                  {counters.map((counter) => (
                    <li key={counter.id}>
                      <div className="number_counter">
                        <div className="counter-text">
                          <span className="num_count">{counter.count} </span>+
                        </div>
                        <p className="mb-0">{counter.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="col-md-12 text-center">
                  <a
                    href="javascript:void(0)"
                    className="btn-darkblack mb-5 fw-bold fn-16"
                  >
                    <span>Connect with Experts</span>
                    <i className="icon icon-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SocialMediaApp;
