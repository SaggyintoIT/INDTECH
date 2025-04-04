import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/Hero";

import Insights from "./Insights/Insights";

import LetsDiscuss from "./LetDiscuss/LetDiscuss";
import Testimonial2 from "./Testimonial2/Testimonial2";
function OurClientReview() {
  return (
    <>
      <HeroBanner />

      <Testimonial2 />
      <LetsDiscuss />
      <Insights />
    </>
  );
}

export default OurClientReview;
