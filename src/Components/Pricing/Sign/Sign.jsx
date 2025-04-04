import React, { useState } from "react";
import axios from "axios";
// import "./Sign.css";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = async () => {
    // Validate email and checkbox
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!isChecked) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    try {
      // Call the backend API to subscribe
      const response = await axios.post(
        "http://localhost:5000/api/subscriberRoutes/subscribe",
        {
          email,
        }
      );

      if (response.status === 201) {
        alert("Thank you for subscribing!");
        setEmail("");
        setIsChecked(false);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.error); // Display error message from the backend
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <section className="bodypx bg-white py-80 pb-0">
      <div className="w-100">
        <div className="rounded30 py-80 signupbg">
          <div className="row">
            <div className="col-md-12 text-center px-4">
              <span className="fn-24 fw-600">
                Sign Up for the Latest Insights
              </span>
              <p className="pe-md-4 mt-2">
                Get free access to our exclusive research and tech strategies to
                level up your knowledge about the digital realm.
              </p>
              <div className="searchbox-wrap my-4">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="form-check d-flex justify-content-center mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="defaultCheck1"
                >
                  I hereby agree to receive newsletters from INDTechmark and
                  acknowledge the company's{" "}
                  <a className="text-red textundarline" href="privacy-policy">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sign;
