import React from "react";
import Slider from "react-slick";
import C1 from '../../assets/images/logo_1.png'
import C2 from '../../assets/images/logo_2.png'
import C3 from '../../assets/images/logo_3.png'
import C4 from '../../assets/images/logo_4.png'
import C5 from '../../assets/images/logo_5.png'
import C6 from '../../assets/images/logo_6.png'



const LogoSlider = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section>
      <div className="py-4 text-center">
        <Slider {...settings}>
          <div>
            <img src={C1} alt="Client 1" />
          </div>
          <div>
            <img src={C2} alt="Client 2" />
          </div>
          <div>
            <img src={C3} alt="Client 3" />
          </div>
          <div>
            <img src={C4} alt="Client 4" />
          </div>
          <div>
            <img src={C5} alt="Client 5" />
          </div>
          <div>
            <img src={C5} alt="Client 6" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
