import React from "react";

const WhyChooseUs = () => {
  // Data for the cards
  const features = [
    {
      title: "Cloud-native",
      description:
        "We embrace the 12-factor app approach, allowing us to construct efficient cloud-native software solutions. This ensures that your fintech application can grow with your business.",
    },
    {
      title: "Third-party API development",
      description:
        "With expertise in both utilizing ready-made APIs and crafting custom connectors, we seamlessly integrate fintech software solutions with third-party payment gateways.",
    },
    {
      title: "Expert knowledge",
      description:
        "With 10+ years of experience in fintech application development, our team brings invaluable insights and knowledge to the table.",
    },
    {
      title: "Security at the forefront",
      description:
        "We prioritize security with high standards for data storage and encryption methods. Your financial data remains protected, ensuring peace of mind for both you and your customers.",
    },
  ];

  return (
    <section className="lightgraybg bodypx py-80" id="why-choose-us">
      <div className="container-fluid mi-container">
        <div className="row align-items-md-center">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">
              Why Choose INDTechMark for Fintech Mobile App Development
            </h2>
            <p className="font-18 poppins-regular my-3">
              Our financial application development services provide advanced
              data management solutions, enhancing business productivity and
              elevating the customer experience.
            </p>
          </div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-md-6 mb-4 mt-2 ${
                index % 2 === 0 ? "ps-md-0 pe-md-4" : "pe-md-0 ps-md-4"
              }`}
            >
              <div className="bg-white padding30 rounded16">
                <span className="fn-24 fw-bold pb-2 d-block">
                  {feature.title}
                </span>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
