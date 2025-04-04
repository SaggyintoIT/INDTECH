// import HeroBanner1 from "./HeroBanner/HeroBanner";
// import Service from "./Services/Services";
// import OurWork from "./OurWork/OurWork";
// import WebDevelopmentSection from "./DevelopmentSect/DevelopmentSec";
// import Industries from "./Industries/IndustryData";
// import TechnologiesSection from "./TechnologySection/TechnologySecton";
// import FAQs from "./FaQ/Faq";
// import Testimonial from "./TestimonialSection/TestimonialSection";

// const WebDevelopmentPage = () => {
//   return (
//     <>
//       <HeroBanner1 />
//       <Service />
//       <OurWork />
//       <WebDevelopmentSection />
//       <Industries />
//       <TechnologiesSection />
//       <FAQs />
//       <Testimonial />
//     </>
//   );
// };

// export default WebDevelopmentPage;
import HeroBanner1 from "./HeroBanner/HeroBanner";
import Service from "./Services/Services";
import OurWork from "./OurWork/OurWork";
import WebDevelopmentSection from "./DevelopmentSect/DevelopmentSec";
import Industries from "./Industries/IndustryData";
import TechnologiesSection from "./TechnologySection/TechnologySecton";
import FAQs from "./FaQ/Faq";
import Testimonial from "./TestimonialSection/TestimonialSection";

const WebDevelopmentPage = () => {
  return (
    <>
      <HeroBanner1 />
      <Service />
      <OurWork />
      <WebDevelopmentSection />
      <Industries />
      <TechnologiesSection />
      <FAQs />
      {/* <Testimonial /> */}
      {/* No footer here - it comes from App.js */}
    </>
  );
};

export default WebDevelopmentPage;
