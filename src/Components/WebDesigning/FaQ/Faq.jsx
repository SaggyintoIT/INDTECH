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
    question: "What is included in your website design services?",
    answer:
      "Our website design services include end-to-end solutions for individuals, such as custom web design, e-commerce web design, CMS design, and more. We cover each and every aspect of web design, from initial concept to final launch, ensuring a fully functional and visually appealing website.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "The timeframe for designing a website varies based on complexity and needs. On average, a basic website takes somewhere from 4 to 8 weeks. To get an exact timeline for your project, reach out to our experts.",
  },
  {
    question: "How much does a website design cost?",
    answer:
      "he cost of website design depends on certain factors, such as complexity, features, and customization. An estimated website design cost ranges between $50K and $250K. If you wish to get an estimate for your project, connect with us today.",
  },
  {
    question: " Will my website be mobile-friendly?",
    answer:
      "Yes, of course! Our websites are designed to be mobile-friendly. We use responsive design practices, so your website looks and functions perfectly on all devices. It provides an optimal user experience across different screen sizes.",
  },
  {
    question: "Do you provide website redesign services?",
    answer:
      "Absolutely! If you wish to update your existing websites, we’re here to help you. It doesn’t matter whether you need a modern look, improved functionality, or better performance; we’ll revamp your site to align with your needs.",
  },
  {
    question: " Will my website be optimized for search engines, that is SEO?",
    answer:
      "Yes, we include SEO best practices in our web design services. Your website will be optimized for search engines with proper on-page SEO techniques, such as keyword integration, meta tags, and optimized content. This will help you improve your site’s visibility and boost search engine rankings.",
  },
  {
    question: "Do you offer any kind of support after the website is launched?",
    answer:
      "Once your website is launched, we provide ongoing support, including maintenance and updates. Our team is available to address any issues, implement changes, and ensure your website remains updated and performs optimally.",
  },
];

export default Faqs;
