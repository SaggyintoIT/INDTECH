import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./HomePage/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/construction/jquery.localizationTool.css'
import './App.css'
import './assets/css/style.css'
// import './assets/css/style2.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/slick.css'
import './assets/css/responsive.css'
import './assets/css/intlTelInput.css'
import './assets/css/sScrollBar.css'
import './assets/css/slick-theme.css'
import Footer from "./HomePage/Footer/Footer";
import HeroBanner from "./HomePage/HeroBanner/Hero";
import LogoSlider from "./HomePage/LogoSlider/LogoSlider";
import ServicesSection from "./HomePage/Services/Services";
import IndustriesSection from "./HomePage/Industries/Industries";
import OurWorkSection from "./HomePage/OurWork/OurWork";
import Insights from "./HomePage/Insights/Insights";
import FAQSection from "./HomePage/FaQ/Faq";
import TestimonialSection from "./HomePage/Testimonial/Testimonials";
import AboutBanner from "./AboutUs/AboutBanner";
import TimelineSlider from "./AboutUs/Timeline";


function App() {
  return (
    <Router>
      <Navbar />
      <HeroBanner/>
      <LogoSlider/>
      <ServicesSection/>
      <IndustriesSection/>
      <OurWorkSection/>
      <Insights/>
      <FAQSection/>
      <TestimonialSection/>
      <Footer/>
      <AboutBanner/>
      <TimelineSlider/>
    </Router>
  );
}

export default App;
