import React from "react";

// Import images
import sports1 from "../../../assets/images/sports_1.svg";
import sports2 from "../../../assets/images/sports_2.svg";
import sports3 from "../../../assets/images/sports_3.svg";
import sports4 from "../../../assets/images/sports_4.svg";
import sports5 from "../../../assets/images/sports_5.svg";
import sports6 from "../../../assets/images/sports_6.svg";
import gamingImage from "../../../assets/images/gaming.svg";

const FantasySportsApp = () => {
  // Data for the fantasy sports app development services
  const fantasySportsServices = [
    {
      icon: sports1,
      title: "Fantasy Cricket App Development",
      description:
        "Cricket fantasy applications have recently gained popularity and our dedicated Fantasy Cricket App Development team has gained expertise and excellence in developing solutions that can help you be at the top of your game.",
    },
    {
      icon: sports2,
      title: "Fantasy Golf App Development",
      description:
        "Connect with the fantasy Golf app development team that offers a competitive edge with advanced technology and secure APIs that allows you enter the competitive market with a profit-making application.",
    },
    {
      icon: sports3,
      title: "Fantasy Football App Development",
      description:
        "The fantasy football development team is well-versed developing advanced functioning and features of the application that helps you stand ahead of your competitors and offer your users a fantastic experience.",
    },
    {
      icon: sports4,
      title: "Fantasy Basketball App Development",
      description:
        "Basketball fantasy applications can change how the market operates and our developers are ready to help you bring the change. Enter the market with a technically advanced and easy to play fantasy game.",
    },
    {
      icon: sports5,
      title: "Fantasy Baseball App Development",
      description:
        "Here’s a fantasy baseball app development team that is dedicated to building interesting solutions that excite you and your users alike. Our team studies the market and delivers unique solutions.",
    },
    {
      icon: sports6,
      title: "Fantasy Rugby App Development",
      description:
        "Explore the possibilities of fantasy rugby app development with a team well aware of the game’s rules and technicalities. The solution gives real life thrill and excitement to the players to engage them with the app.",
    },
  ];

  return (
    <>
      {/* Fantasy Sports App Development Services Section */}
      <section className="bodypx py-80" id="fantasy-sports-app-development">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Choose from Various Games for Your Fantasy Sports App
            </h2>
            <p className="font-18 mt-3">
              Whether you are a startup or a well-established brand, our
              sportsbook software providers are here to push the envelope by
              coming up with innovative ideas for you.
            </p>
          </div>
        </div>

        <div className="container-fluid mi-container">
          <div className="row">
            {fantasySportsServices.map((service, index) => (
              <div key={index} className="col-md-4 mt-4">
                <div className="appdevbg padding30 rounded16 h-100">
                  <img
                    className="d-block"
                    src={service.icon}
                    alt={service.title}
                  />
                  <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                    {service.title}
                  </span>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powering Up Gaming Industry Section */}
      <section className="bodypx py-80 lightgraybg">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-8 mb-4">
              <div className="col-lg-9">
                <h2 className="font-40 fw-400">
                  Powering Up <strong>Gaming Industry</strong> with <br />
                  <strong>Fantasy Sports App Development</strong>
                </h2>
                <p>
                  INDTechMark comprehensive application development process that
                  uses an original approach to constructing an efficient and
                  safe platform for all businesses. INDTechMark has a highly
                  skilled group of developers who specialize in fantasy games.
                  They offer distinctive, bug-free, and customized products.
                </p>
                <p>
                  From the initial concept to the product's launch, our team
                  will take charge of everything. We ensure that your app has a
                  user-friendly UX/UI design and exciting features and models
                  that can help you maximize your return on investment. Our
                  skilled developers utilize modern technology to create apps
                  that provide users with easy access to their most-loved news
                  and updates on sports, among other things.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="appdevbggar padding30 rounded16">
                <img
                  className="d-block w-75 m-auto"
                  src={gamingImage}
                  alt="Gaming Industry"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FantasySportsApp;
