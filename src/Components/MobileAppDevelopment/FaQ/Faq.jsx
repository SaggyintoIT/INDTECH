// import React from "react";
// const FAQSection = () => {
//   return (
//     <section className="bodypx services bg-dark py-5" data-aos="fade-up">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 pb-md-4 text-center text-md-start">
//             <h2 className="text-white">FAQs</h2>
//           </div>
//           <div className="container faqs">
//             <div className="accordion" id="accordionExample">
//               {[
//                 {
//                   question: "What services does your company offer?",
//                   answer:
//                     "We, at IND Tech Mark, provide a wide range of digital solutions, including web design and development, app development, and digital marketing. Our services are designed to help businesses boost their online presence and achieve their digital goals.",
//                 },
//                 {
//                   question: "What industries do you specialize in?",
//                   answer:
//                     "We specialize in various industries, such as retail, finance, healthcare, e-commerce, and education. Our expertise enables us to deliver bespoke solutions that meet the specific needs of each industry.",
//                 },
//                 {
//                   question: "Do you offer ongoing support and maintenance?",
//                   answer:
//                     "Yes! We offer ongoing support and maintenance to ensure your website and apps continue to operate smoothly and efficiently. We address any issues promptly and keep your digital solutions up-to-date.",
//                 },
//                 {
//                   question: "Do you offer a free consultation?",
//                   answer:
//                     "Yes! We offer a free initial consultation to understand your needs and discuss how we can help you boost your business online. This helps us provide a tailored solution that aligns with your objectives.",
//                 },
//                 {
//                   question: "Why should I hire IND Tech Mark for web design and development?",
//                   answer:
//                     "Partnering with us means having a team of experts dedicated to creating high-quality and innovative web solutions. We combine your business goals with cutting-edge technology to deliver top-notch results.",
//                 },
//                 {
//                   question: "Do you offer custom web or app development services?",
//                   answer:
//                     "Yes, we create bespoke web and app solutions tailored to your specific needs. This ensures your websites or apps are unique, functional, and aligned with your business goals.",
//                 },
//               ].map((faq, index) => (
//                 <div className="accordion-item" key={index}>
//                   <h2 className="accordion-header">
//                     <button
//                       className="accordion-button collapsed"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target={`#collapse${index}`}
//                       aria-expanded="false"
//                       aria-controls={`collapse${index}`}
//                     >
//                       {faq.question}
//                     </button>
//                   </h2>
//                   <div
//                     id={`collapse${index}`}
//                     className="accordion-collapse collapse"
//                     data-bs-parent="#accordionExample"
//                   >
//                     <div className="accordion-body">{faq.answer}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default FAQSection;
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
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-white">
                      {faq.answer}
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
    question: "What mobile app development services do you offer?",
    answer: (
      <>
        <p>
          At IND Tech Mark, we offer end-to-end mobile app development services
          such as:
        </p>
        <ul className="list-unstyled text-white ps-3">
          <li>Android app development</li>
          <li>iOS app development</li>
          <li>React Native app development</li>
          <li>Flutter app development</li>
          <li>Xamarin app development</li>
          <li>Mobile app consulting</li>
        </ul>
        <p>
          We cover every stage, from idea conceptualization and design to
          development, testing, deployment, and post-launch support.
        </p>
      </>
    ),
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in a wide range of industries, such as healthcare, finance, retail, education, and more. Our expertise in the field allows us to create tailored mobile solutions that meet the unique needs and challenges of each sector, delivering top results.",
  },
  {
    question: "How much does it cost to build a mobile application?",
    answer:
      "An estimated cost to build a mobile application ranges from $10K to $75K. It varies based on factors such as complexity, features, platform, and design requirements. To get an estimated quote for your specific project needs, reach out to our experts today!",
  },
  {
    question: "How much time does it take to develop a mobile app?",
    answer:
      "The development timeframe for mobile app development depends on the app’s complexity, features, and development approach. On average, a basic app can take between 3 and 6 months to develop. To get an estimate of the timeline, you can directly contact us!",
  },
  {
    question: "Do you offer mobile app maintenance and support services?",
    answer:
      "Yes, of course! We offer end-to-end mobile app maintenance and support services. Our post-launch support includes bug fixes, updates, performance monitoring, and enhancements to ensure your app functions as intended and remains updated in the marketplace.",
  },
  {
    question: "Which is the best mobile app development company?",
    answer:
      "While you can find several companies offering top mobile app development services, the best mobile app development company that stands out is IND Tech Mark. Their experienced team and commitment to delivering high-quality solutions can help your app gain an edge.",
  },
  {
    question: "What technologies do you use for app development?",
    answer:
      "We utilize a wide range of technologies for mobile app development, such as AI/ML, computer vision, cloud computing, and AR/VR. Our tech stack includes popular frameworks and platforms like React Native, Flutter, Xamarin, and native development tools for iOS and Android.",
  },
];

export default Faqs;
