import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/HeroBanner";

import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";
import Glimpse from "./Glimpse/Glimpse.jsx";

import EducationAppDevelopment from "./EducatonAppDev/EducationAppDev.jsx";
import EducationAppFeatures from "./FreeConsltAndFeature/FreeConsltAndFeature.jsx";
function App() {
  return (
    <>
      <HeroBanner />
      <EducationAppDevelopment />
      <EducationAppFeatures />
      <Glimpse />
      <Insight />
      <FAQs />
    </>
  );
}

export default App;
