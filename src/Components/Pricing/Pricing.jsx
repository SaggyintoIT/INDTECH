import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/HeroBanner";
import Plans from "./Plans/Plans";
import FaQ from "./FaQ/Faq";

import Sign from "./Sign/Sign";

function Pricing() {
  return (
    <>
      <HeroBanner />
      <Plans />
      <FaQ />
      <Sign />
    </>
  );
}

export default Pricing;
