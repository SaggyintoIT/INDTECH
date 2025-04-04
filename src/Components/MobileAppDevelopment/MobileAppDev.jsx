// import { BrowserRouter as Router } from "react-router-dom";

// // import "./assets/css/bootstrap.min.css";

// import HeroBanner from "./HeroBanner/HeroBanner";
// import Service from "./Services/Services";
// // import WebDevelopmentSection from "./DevelopmentSect/DevelopmentSec";

// import TechnologiesSection from "./TechnologySection/TechnologySecton";
// import Insight from "./Insights/Insights";
// import FAQs from "./FaQ/Faq";
// import Testimonial from "./TestimonialSection/TestimonialSection";
// import MobileAppSlider from "./MobDevSwiper/MobDevSwiper";
// import CaseStudySection from "./CaseStudy/CaseStudy";
// import AppDevelopment from "./LetDiscuss/LetDiscuss";
// function MobileAppDev() {
//   return (
//     <>
//       <HeroBanner />
//       <Service />
//       <MobileAppSlider />
//       {/* <WebDevelopmentSection /> */}
//       {/* <Industries /> */}
//       <CaseStudySection />

//       <AppDevelopment />
//       <TechnologiesSection />
//       <Insight />
//       <FAQs />
//       <Testimonial />
//     </>
//   );
// }

// export default MobileAppDev;
import HeroBanner from "./HeroBanner/HeroBanner";
import Service from "./Services/Services";
import TechnologiesSection from "./TechnologySection/TechnologySecton";
import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";
import Testimonial from "./TestimonialSection/TestimonialSection";
import MobileAppSlider from "./MobDevSwiper/MobDevSwiper";
import CaseStudySection from "./CaseStudy/CaseStudy";
import AppDevelopment from "./LetDiscuss/LetDiscuss";

function MobileAppDev() {
  return (
    <>
      <HeroBanner />
      <Service />
      <MobileAppSlider />
      <CaseStudySection />
      <AppDevelopment />
      <TechnologiesSection />
      <Insight />
      <FAQs />
      {/* <Testimonial /> */}
      {/* No footer here - it comes from App.js */}
    </>
  );
}

export default MobileAppDev;
