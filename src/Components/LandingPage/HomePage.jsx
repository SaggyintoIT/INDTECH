// import HeroBanner from "./HeroBanner/Hero";
// import LogoSlider from "./LogoSlider/LogoSlider";
// import ServicesSection from "./Services/Services";
// import IndustriesSection from "./Industries/Industries";
// import OurWorkSection from "./OurWork/OurWork";
// import Insights from "./Insights/Insights";
// import FAQSection from "./FaQ/Faq";
// import TestimonialSection from "./Testimonial/Testimonials";
// import Footer from "../WebDevelopment/Footer/Footer";

// const HomePage = () => {
//   return (
//     <>
//       <HeroBanner />
//       <LogoSlider />
//       <ServicesSection />
//       <IndustriesSection />
//       <OurWorkSection />
//       <Insights />
//       <FAQSection />
//       <TestimonialSection />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
import HeroBanner from "./HeroBanner/Hero";
import LogoSlider from "./LogoSlider/LogoSlider";
import ServicesSection from "./Services/Services";
import IndustriesSection from "./Industries/Industries";
import OurWorkSection from "./OurWork/OurWork";
import Insights from "./Insights/Insights";
import FAQSection from "./FaQ/Faq";
import TestimonialSection from "./Testimonial/Testimonials";
import HomeFooter from "./Footer/Footer"; // Importing homepage-specific footer

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <LogoSlider />
      <ServicesSection />
      <IndustriesSection />
      <OurWorkSection />
      <Insights />
      <FAQSection />
      <TestimonialSection />
      <HomeFooter />
    </>
  );
};

export default HomePage;
