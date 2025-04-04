import { BrowserRouter as Router } from "react-router-dom";
import HeroBanner from "./HeroBanner/HeroBanner";
import BuildBrand from "./BuildBrand/BuildBrand";
import Industries from "./Industries/IndustryData";
import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";
import Service from "./Service/Service";
import UnlockBusiness from "./UnlockBusiness/UnlockBusiness";
import SEOBenefits from "./SEOBenefits/SEOBenefits";
import ChooseIndSeoService from "./ChooseIndSeoService/ChooseIndSeoService";
function DigitalMarketing() {
  return (
    <>
      <HeroBanner />
      <BuildBrand />
      <Service />
      <UnlockBusiness />
      <SEOBenefits />
      <ChooseIndSeoService />

      <Industries />

      <Insight />
      <FAQs />
    </>
  );
}

export default DigitalMarketing;
