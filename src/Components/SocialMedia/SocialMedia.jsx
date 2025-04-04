import { BrowserRouter as Router } from "react-router-dom";
import HeroBanner from "./HeroBanner/HeroBanner";

import Insight from "./Insights/Insights";
import FAQs from "./FaQ/Faq";

import SocialMedia from "./SocialMedia/SocialMedia";
import TransformSocialMediaApp from "./TransformSocialMedia/TransformSocialMedia";
import LetDiscuss from "./LetDiscuss/LetDiscuss";
import SocialMediaDevelopmentApproach from "./SocialMediaDevelopmentApproach/SocialMediaDevelopmentApproach.jsx";
import Glimpse from "./Glimpse/Glimpse.jsx";
function App() {
  return (
    <>
      <HeroBanner />
      <SocialMedia />
      <TransformSocialMediaApp />
      <LetDiscuss />
      <SocialMediaDevelopmentApproach />
      <Glimpse />
      <Insight />
      <FAQs />
    </>
  );
}

export default App;
