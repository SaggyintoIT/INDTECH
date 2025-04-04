import React from "react";

// Import images
import tickCircleMark from "../../../assets/images/tick-circlemark.svg";

const FantasySportsFeatures = () => {
  // Data for the core features
  const coreFeatures = [
    {
      icon: tickCircleMark,
      title: "User Dashboard",
      description:
        "Keep track of all relevant data, such as profiles, teams, leagues, Points-per-game statistics, leagues, and other vital statistics related to the Fantasy Football App.",
    },
    {
      icon: tickCircleMark,
      title: "Team Management",
      description:
        "Create a custom team comprised of NFL players selected from various sources. Track team transfers and the performance of players regularly.",
    },
    {
      icon: tickCircleMark,
      title: "League Management",
      description:
        "Monitor and manage leagues, keep track of standings, plan matches, and record results for all Fantasy Football App users.",
    },
    {
      icon: tickCircleMark,
      title: "Performance Tracking",
      description:
        "Monitor and analyze teams’ performance in real-time with an interactive dashboard.",
    },
    {
      icon: tickCircleMark,
      title: "Leaderboard",
      description:
        "Keep track of all relevant data, such as profiles, teams, leagues, Points-per-game statistics, leagues, and other vital statistics related to the Fantasy Football App.",
    },
    {
      icon: tickCircleMark,
      title: "Live Scores",
      description:
        "Get updates live on the team’s performance and monitor your team’s current performance by checking live scores.",
    },
    {
      icon: tickCircleMark,
      title: "Custom Payment Gateways",
      description:
        "Integrate payment gateways that are custom-designed to allow users to transfer and deposit funds swiftly and safely.",
    },
    {
      icon: tickCircleMark,
      title: "Support & Maintenance",
      description:
        "Support is available 24/7, as are maintenance and bug-fixing services, to ensure a smooth and enjoyable Fantasy Football app experience.",
    },
    {
      icon: tickCircleMark,
      title: "Instant Withdrawal",
      description:
        "Instant withdrawal lets users withdraw the funds directly from the app and then transfer them to their banking account.",
    },
  ];

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="bodypx we-serve bg-dark py-80 pb-200">
        <div className="container text-white text-center">
          <h2 className="font-40 mb-2 we-serve__title">
            Core Features of Fantasy Sports App Development
          </h2>
          <div className="we-serve__text mx-auto font-18 mt-3">
            <p>
              The football fanatics are always searching for new ways to boost
              their adrenaline. This Fantasy Football App developed by
              INDTechMark has many features to keep your fans engaged and
              excited. Here are a few of the features we provide.
            </p>
          </div>
        </div>

        <div className="container-fluid custom-ind-slider">
          <div className="row">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="col-md-4 mt-4">
                <div className="we-serve__item br-24">
                  <div className="d-flex">
                    <div className="pe-3 pt-1">
                      <img src={feature.icon} alt="Tick Icon" />
                    </div>
                    <div className="">
                      <div className="fn-24 text-white mb-2 fw-bold">
                        {feature.title}
                      </div>
                      <p className="font-18 text-white pb-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasySportsFeatures;
