import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/construction/jquery.localizationTool.css";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import "./assets/css/intlTelInput.css";
import "./assets/css/sScrollBar.css";
import "./assets/css/slick-theme.css";
//New add
import "./assets/css/aos.css";
// import "./assets/css/construction/style.min.css";
// import "./assets/css/construction/plugins.min.css";
// import "./assets/css/construction/templete.min.css";
import "./assets/css/fontawesome/css/font-awesome.min.css";
import Navbar from "./Components/LandingPage/Navbar/Navbar";
import Footer from "./Components/WebDevelopment/Footer/Footer";
import TestimonialSection from "./Components/LandingPage/Testimonial/Testimonials";
import HomePage from "./Components/LandingPage/HomePage";
import WebDevelopmentPage from "./Components/WebDevelopment/WebDevelopmentPage";
import MobileAppDev from "./Components/MobileAppDevelopment/MobileAppDev";
import DigitalMarketing from "./Components/DigitalMarketing/DitalMarketing";
import WebDesigning from "./Components/WebDesigning/WebDesigning";
import Portfolio from "./Components/Portfolio/Portfolio";
import Checkout from "./Components/Checkout/Checkout";
import Pricing from "./Components/Pricing/Pricing";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Finance from "./Components/Finanace/Finance";
import Education from "./Components/Education/Education";
import HealthCare from "./Components/HealthCare/HealthCare";
import Sports from "./Components/Sports/Sports";
import Blog from "./Components/Blog/Blog";
import OurClientReview from "./Components/OurClientReview/OurClientReview";
import Seo from "./Components/Seo/Seo";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurTeam from "./Components/OurTeam/OurTeam";
import Career from "./Components/Career/Career";
import ContactUS from "./Components/ContactUs/ContactUS";
import OurClient from "./Components/OurClient/ClientsMain";
import PressMedia from "./Components/Press&Media/PressMedia";
import LifeAtInd from "./Components/LifeAtIndTech/LifeAtInd";
import GetFreeConslutant from "./Components/GetFreeConslutant/BannerFreeCons";
function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/mob-app-development" element={<MobileAppDev />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/our-client-review" element={<OurClientReview />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/our-client" element={<OurClient />} />
        <Route path="/press-and-media" element={<PressMedia />} />
        <Route path="/life-at-indtech" element={<LifeAtInd />} />
        <Route path="/get-free-conslutant" element={<GetFreeConslutant />} />
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/career" && (
        <TestimonialSection />
      )}
      {location.pathname !== "/" && location.pathname !== "/career" && (
        <Footer />
      )}
    </>
  );
}

export default AppWrapper;
