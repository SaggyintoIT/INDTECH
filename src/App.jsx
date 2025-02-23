import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/construction/jquery.localizationTool.css'
import './App.css'
import './assets/css/style.css'
import './assets/css/style2.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/slick.css'
import './assets/css/responsive.css'
import './assets/css/intlTelInput.css'
import './assets/css/sScrollBar.css'
import './assets/css/slick-theme.css'
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/Hero";
import LogoSlider from "./Components/LogoSlider/LogoSlider";
import ServicesSection from "./Components/Services/Services";
import IndustriesSection from "./Components/Industries/Industries";
import OurWorkSection from "./Components/OurWork/OurWork";
import Insights from "./Components/Insights/Insights";
import FAQSection from "./Components/FaQ/Faq";
import TestimonialSection from "./Components/Testimonial/Testimonials";


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
    </Router>
  );
}

export default App;
