import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/Hero";

import Insights from "./Insights/Insights";

import LetsDiscuss from "./LetDiscuss/LetDiscuss";
import SEOServices from "./SEOServices/SEOServices";
import WhyChooseUs from "./WhyIndAndLetsDis/WhyChhoseAndLetsDiss";
import Faq from "./FaQ/Faq";
function App() {
  return (
    <Router>
      <HeroBanner />
      <SEOServices />
      <WhyChooseUs />
      <Insights />
      <Faq />

      <LetsDiscuss />
    </Router>
  );
}

export default App;
