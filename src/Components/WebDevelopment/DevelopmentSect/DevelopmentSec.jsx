import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import insales from "../../../assets/images/insales.svg";
import userExperience from "../../../assets/images/user_experence.svg";
import winder from "../../../assets/images/winder.svg";
import promote from "../../../assets/images/promote.svg";
import trackBusiness from "../../../assets/images/track_Business.svg";
import customerService from "../../../assets/images/Customer_Service.svg";
import leftArrow from "../../../assets/images/left.png";
import rightArrow from "../../../assets/images/right.png";
import discussImage from "../../../assets/images/Discussimg.svg";
import axios from "axios";

// Static data for the carousel (same as original)
const carouselData = [
  {
    image: insales,
    title: "Increase Sales",
    description:
      "A well-designed website can significantly boost sales by providing a seamless user experience, optimized product displays, and effective call-to-action features. Intuitive functionality and user-friendly design can drive conversions and attract more customers.",
  },
  {
    image: userExperience,
    title: "Improved User Experience",
    description:
      "Expert web development ensures a smooth and intuitive user experience with fast loading times, responsive design, and easy navigation. This leads to increased engagement and a lower bounce rate, which promotes long-term customer loyalty.",
  },
  {
    image: winder,
    title: "Wider Audience Reach",
    description:
      "A strong online presence allows you to reach a wide global audience. Web development solutions ensure that your website is optimized for search engines and mobile devices, which will expand your reach and connect you with potential customers.",
  },
  {
    image: promote,
    title: "Promote Your Business",
    description:
      "A well-developed website serves as a powerful marketing tool. It can seamlessly showcase your brand, products, and services. Features like blogs, social media integration, and email marketing capabilities can boost your promotional efforts and drive traffic.",
  },
  {
    image: trackBusiness,
    title: "Keep Track of Your Business",
    description:
      "Web development solutions include analytics and tracking tools that provide in-depth insights into user behavior, sales trends, and website performance. This data can help you make well-informed decisions and optimize your strategies for better results.",
  },
  {
    image: customerService,
    title: "Improved Customer Service",
    description:
      "With features such as live chat, FAQs, and more, web development can boost overall customer service. It helps provide immediate assistance, resolve issues quickly, and improve customer satisfaction, which leads to stronger relationships and repeat business.",
  },
];

const WebDevelopmentSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [services, setServices] = useState([]);
  const [mainContent, setMainContent] = useState({
    title: "Why Choose IND Tech Mark for Web Development Services?",
    description:
      "With a proven track record in the field, we deliver highly productive web development solutions that help businesses achieve their goals quickly. Are you eager to know how we can contribute to your business? Check it out below!",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First try to fetch services
        try {
          const servicesRes = await axios.get(
            "http://localhost:5000/api/web-dev-services"
          );
          setServices(servicesRes.data);
        } catch (servicesError) {
          console.error("Error fetching services:", servicesError);
          setError("Failed to load services. Using default content.");
        }

        // Then try to fetch main content
        try {
          const mainContentRes = await axios.get(
            "http://localhost:5000/api/web-dev-main-content"
          );
          if (mainContentRes.data) {
            setMainContent(mainContentRes.data);
          }
        } catch (mainContentError) {
          console.error("Error fetching main content:", mainContentError);
          // Use default main content values
          setMainContent({
            title: "Why Choose IND Tech Mark for Web Development Services?",
            description:
              "With a proven track record in the field, we deliver highly productive web development solutions that help businesses achieve their goals quickly. Are you eager to know how we can contribute to your business? Check it out below!",
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) =>
      prev + 1 < carouselData.length - 2 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : carouselData.length - 3
    );
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger m-4">{error}</div>;
  }

  return (
    <>
      <section className="bodypx section-case-study bg-white py-80">
        <div className="container-fluid mi-container px-md-0">
          <div className="row align-items-md-center text-center">
            <div className="col-md-10 mx-auto">
              <h2>Why Should You Go For Web Development?</h2>
              <p>
                In this digital age, establishing a strong online presence is
                essential. Let's explore why web development services are
                crucial for your business.
              </p>
            </div>
          </div>

          <div className="mt-4 testimonial__inner">
            <div className="webappdev position-relative overflow-hidden">
              <motion.div
                className="d-flex"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                {carouselData
                  .slice(startIndex, startIndex + 3)
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      className="appdevbg padding30 rounded16 text-left mx-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        className="d-block"
                        src={item.image}
                        alt={item.title}
                      />
                      <h3 className="fn-24 fw-bold pt-3 pb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
            <div className="btn-wrap mt-4 text-center">
              <button className="prev-btn com-btn mr-3" onClick={prevSlide}>
                <img src={leftArrow} alt="Previous" />
              </button>
              <button className="next-btn com-btn" onClick={nextSlide}>
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="lightgraybg bodypx py-80 mt-5 text-center">
        <div className="container">
          <h2>{mainContent.title}</h2>
          <p>{mainContent.description}</p>
        </div>
        <div className="container-fluid mi-container">
          {services.length > 0 ? (
            <div className="row align-items-md-center">
              {services
                .sort((a, b) => a.order - b.order)
                .map((service, index) => (
                  <div
                    key={service._id || index}
                    className={`col-md-6 mb-4 mt-2 ${
                      index % 2 === 0 ? "ps-md-0 pe-md-4" : "pe-md-0 pe-md-4"
                    }`}
                  >
                    <div className="bg-white padding30 rounded16">
                      <h4 className="fn-24 fw-bold pb-2 d-block text-left">
                        {service.title}
                      </h4>
                      <p className="text-left">{service.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="alert alert-info">
              No services available. Please check back later.
            </div>
          )}
        </div>
      </section>

      <section className="bodypx py-80">
        <div className="redblackbg rounded30 px-md-4 psm-ph text-white text-center">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-7 py-5 ps-md-5">
                <h2 className="fs-50 fw-400">
                  Let's Discuss <span className="fw-600">Your Project</span>
                </h2>
                <p className="fn-24">
                  Get a free consultation to discuss how we will transform your
                  idea into an amazing digital product.
                </p>
                <a
                  href="get-free-consultation"
                  className="themeBtn mt-2 mt-xl-3 fw-bold"
                >
                  <span>Get free consultation</span>
                  <i className="icon icon-arrow"></i>
                </a>
              </div>
              <div className="col-md-5 text-center pe-md-5">
                <img
                  className="my-4 pb-1"
                  src={discussImage}
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

export default WebDevelopmentSection;
