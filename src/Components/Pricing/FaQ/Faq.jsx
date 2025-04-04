import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Faqs = () => {
  return (
    <section className="bodypx services bg-dark py-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pb-md-4 text-center text-md-start">
            <h2 className="text-white">FAQs</h2>
          </div>
          <div className="container faqs">
            <div className="accordion" id="accordionExample">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is the purpose of mobile app development?",
    answer:
      "The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
  {
    question: " What is needed to develop a mobile app?",
    answer:
      "The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
  {
    question:
      " What are the key factors that influence the success of a mobile app?",
    answer:
      "he choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
  {
    question:
      " Is cross-platform app development better than native app development?",
    answer:
      "The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
  {
    question: " Do I own the ownership and the code of my application?",
    answer:
      "The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
  {
    question: " Will TechAhead also provide support and maintenance services?",
    answer:
      "The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.",
  },
];

export default Faqs;
