import { BrowserRouter as Router } from "react-router-dom";

import HeroBanner from "./HeroBanner/Hero";
import Gallery from "./Gallery/Gallery";

import Signin from "./Sign/Sign";
function Blog() {
  return (
    <>
      <HeroBanner />
      <Gallery />
      <Signin />
    </>
  );
}

export default Blog;
