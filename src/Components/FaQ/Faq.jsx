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
    <section className="bodypx services bg-dark py-80" data-aos="fade-up">
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
    question: "What services does your company offer?",
    answer:
      "We, at IND Tech Mark, provide a wide range of digital solutions, including web design and development, app development, and digital marketing.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in various industries such as retail, finance, healthcare, e-commerce, and education.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer end-to-end support and maintenance services to ensure smooth operation of your digital solutions.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes! We provide a free initial consultation to understand your needs and provide tailored solutions.",
  },
  {
    question: "Why should I hire IND Tech Mark for web development?",
    answer:
      "We offer expert-driven, high-quality, and innovative web solutions tailored to your business goals.",
  },
  {
    question: "Do you offer custom web or app development services?",
    answer:
      "Yes, we create tailored web and app solutions that align with your unique business needs.",
  },
];

export default Faqs;
