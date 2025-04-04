import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/HeroBanner";

import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";

import Glimpse from "./Glimpse/Glimpse.jsx";

import HealthcareAppDevelopment from "./HealthCareAppDev/HealthCareAppDev.jsx";
import LetDiscuss from "./LetDiscuss/LetDiscuss.jsx";
import HealthcareBenefits from "./HealthCareBenifit/HealthCareBenifit.jsx";

function App() {
  return (
    <>
      <HeroBanner />

      <HealthcareAppDevelopment />
      <LetDiscuss />
      <HealthcareBenefits />
      <Glimpse />
      <Insight />
      <FAQs />
    </>
  );
}

export default App;
