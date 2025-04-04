import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/HeroBanner";

import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";

import Glimpse from "./Glimpse/Glimpse.jsx";

import LetDiscuss from "./LetDiscuss/LetDiscuss.jsx";

import FantasySportsApp from "./FantasySportApp/FantasySportApp.jsx";
import FantasySportsFeatures from "./FantasySportFeatures/FantasySportFeatures.jsx";
import CaseStudy from "./CaseStudy/CaseStudy.jsx";
import FantasySportsProcess from "./FantasySportProcess/FantasySportProcess.jsx";
function Sports() {
  return (
    <>
      <HeroBanner />
      <FantasySportsApp />
      <LetDiscuss />

      <FantasySportsFeatures />
      <CaseStudy />
      <FantasySportsProcess />
      <Glimpse />
      <Insight />
      <FAQs />
    </>
  );
}

export default Sports;
