import { BrowserRouter as Router } from "react-router-dom";
import HeroBanner from "./HeroBanner/HeroBanner";
import Insight from "./Insights/Insights";
import Gallery from "./Gallery/Gallery";
import LogoSlider from "./LogoSlider/LogoSlider";
import DiscussProject from "./DiscussProject/DiscussProject";
function Portfolio() {
  return (
    <>
      <HeroBanner />
      <Gallery />
      <LogoSlider />
      <Insight />
      <DiscussProject />
    </>
  );
}

export default Portfolio;
