import React from "react";
import media1 from "../../assets/images/media_1.jpg";
import media2 from "../../assets/images/media_2.jpg";
import media3 from "../../assets/images/media_3.jpg";
import media4 from "../../assets/images/media_4.jpg";
import media5 from "../../assets/images/media_5.jpg";
import media6 from "../../assets/images/media_6.jpg";
import media7 from "../../assets/images/media_7.jpg";
import media8 from "../../assets/images/media_8.jpg";
import media9 from "../../assets/images/media_9.jpg";
import media10 from "../../assets/images/media_10.jpg";
import media11 from "../../assets/images/media_11.jpg";
import Insights from "../../Components/LandingPage/Insights/Insights";
import FreeCons from "../OurTeam/FreeCons";

const PressMedia = () => {
  return (
    <>
      <section className="banner text-white pt-5">
        <div className="position-relative press_banner">
          <div className="slidoverlay bodypx">
            <div className="container-fluid h-100">
              <div className="row align-items-center py-5 h-100">
                <div className="col-md-12 tracking-in-expand py-md-5 text-md-center">
                  <h2 className="text-white fs-50 fw-bold pt-2">
                    See what people are saying <br />
                    about us!
                  </h2>
                  <p className="text-white pe-md-5">
                    Explore the list of our all PR title's about events,
                    launches and know more!
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="btn-white mt-2 mt-xl-3 fw-bold me-3"
                  >
                    <span>get free consultation</span>
                    <i className="icon icon-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bodypx py-80" id="openings">
        <div className="container-fluid mi-container">
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h2 className="font-40">INDTechMark in the media</h2>
              <p className="font-18 poppins-regular my-3">
                See what people are saying about us!
              </p>
            </div>

            {/* First Row */}
            <div className="col-md-6 mb-4">
              <div className="media">
                <img src={media1} alt="Media 1" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  Tripple, Developed by INDTechMark, Honored at 28th Annual
                  Webby Awards
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="media">
                <img src={media2} alt="Media 2" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark Cracks Great Place to Work Code, Reinforcing its
                  Commitment to Employee Well-being and Workplace Excellence
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media3} alt="Media 3" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark participates at the largest consumer tech
                  conference CES 2023
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media4} alt="Media 4" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark realigns its focus to changing requirements of
                  connected world, launches new brand identity
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media5} alt="Media 5" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark is Providing 24×7 Support to Help Clients’
                  Maintain Business Continuity During Coronavirus Outbreak
                </p>
              </div>
            </div>

            {/* Third Row */}
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media6} alt="Media 6" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark participates at the largest consumer tech
                  conference CES 2023
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media7} alt="Media 7" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark realigns its focus to changing requirements of
                  connected world, launches new brand identity
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media8} alt="Media 8" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark is Providing 24×7 Support to Help Clients’
                  Maintain Business Continuity During Coronavirus Outbreak
                </p>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media9} alt="Media 9" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark participates at the largest consumer tech
                  conference CES 2023
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media10} alt="Media 10" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark realigns its focus to changing requirements of
                  connected world, launches new brand identity
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media">
                <img src={media11} alt="Media 11" className="w-100 rounded24" />
                <p className="fn-24 pe-md-4 pt-3">
                  INDTechMark is Providing 24×7 Support to Help Clients’
                  Maintain Business Continuity During Coronavirus Outbreak
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Insights />
      <FreeCons />
    </>
  );
};

export default PressMedia;
