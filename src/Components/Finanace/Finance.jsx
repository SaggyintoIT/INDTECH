import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/HeroBanner";

import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";

import Glimpse from "./Glimpse/Glimpse.jsx";
import FullStackCustom from "./FullStackCustom/FullStackCustom.jsx";
import TechStackWeUse from "./TechStackWeUse/TechStackWeUse.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import AdvancedTechnologies from "./AdvancedTechnologies/AdvancedTechnologies.jsx";
function Finance() {
  return (
    <>
      <HeroBanner />
      <FullStackCustom />
      <TechStackWeUse />
      <WhyChooseUs />
      <AdvancedTechnologies />

      <Glimpse />
      <Insight />
      <FAQs />
    </>
  );
}

export default Finance;
