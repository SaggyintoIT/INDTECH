import { BrowserRouter as Router } from "react-router-dom";
import HeroBanner from "./HeroBanner/HeroBanner";
import DiscussProject from "./DiscussProject/DiscussProject";
function Checkout() {
  return (
    <>
      <HeroBanner />

      <DiscussProject />
    </>
  );
}

export default Checkout;
