import React from "react";
import logo1 from "../../../assets/images/logo_1.png"; // Adjust the path as needed
import logo2 from "../../../assets/images/logo_2.png";
import logo3 from "../../../assets/images/logo_3.png";
import logo4 from "../../../assets/images/logo_4.png";
import logo5 from "../../../assets/images/logo_5.png";
import logo6 from "../../../assets/images/logo_6.png";
import "./LogoSlider.css"; // Import the CSS file for styling

const LogoSlider = () => {
  return (
    <section className="bottomslide">
      <div className="py-4 text-center">
        <div className="clientSwipera">
          <div className="logo-slider">
            <div className="logo-slider-track">
              {/* Render the logos twice for seamless scrolling */}
              {[
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
                logo1,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
              ].map((logo, index) => (
                <div key={index} className="logo-slide">
                  <img src={logo} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
