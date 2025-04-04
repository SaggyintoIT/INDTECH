import { BrowserRouter as Router } from "react-router-dom";
import HeroBanner from "./HeroBanner/HeroBanner";
import Industries from "./Industries/IndustryData";
import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";
import EndToEndWebService from "./EndToEndWebService/EndToEndWebService";
import DigitalProductDesign from "./DigitalProductDesign/DegitalProductDesign";
import Glimpse from "./Glimpse/Glimpse";
import CreativeTool from "./CreativeTool/CreativeTool";
import CaseStudy from "./CaseStudy/CaseStudy";
import WhyChooseInd from "./WhyChooseInd/WhyChooseInd";
import UIUXDesign from "./UIUXDesign/UIUXDesign";
function WebDesigning() {
  return (
    <>
      <HeroBanner />
      <EndToEndWebService />
      <DigitalProductDesign />
      <Glimpse />
      <CreativeTool />
      <CaseStudy />
      <WhyChooseInd />

      <Industries />
      <UIUXDesign />

      <Insight />
      <FAQs />
    </>
  );
}

export default WebDesigning;
