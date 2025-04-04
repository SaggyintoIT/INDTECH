import React from "react";

// Import images (adjust paths as needed)
import seoIcon1 from "../../../assets/images/seoicon_1.svg";
import seoIcon2 from "../../../assets/images/seoicon_2.svg";
import seoIcon3 from "../../../assets/images/seoicon_3.svg";
import seoIcon4 from "../../../assets/images/seoicon_4.svg";
import seoIcon5 from "../../../assets/images/seoicon_5.svg";
import seoIcon6 from "../../../assets/images/seoicon_6.svg";
import tickCircle from "../../../assets/images/tick-circle.svg";
import cmsImage from "../../../assets/images/cms.svg";

const SEOServices = () => {
  return (
    <>
      {/* SEO Services Section */}
      <section className="bodypx py-80">
        <div className="container">
          <div className="col-md-12 text-center mb-4">
            <h2 className="font-40">SEO Services We Offer</h2>
            <p>
              Our team of SEO experts provide you end-to-end services ranging
              from helping with optimizing the website, solving the technical
              issues, helping your keywords rank, and making you the most
              linkable source of information. Our SEO services are a testament
              to the strategic merger of what Google wants and what your
              customers need from your digital platform. We help you rank on top
              of the SERPs.
            </p>
          </div>
        </div>
        <div className="container-fluid mi-container">
          <div className="row">
            {[
              {
                icon: seoIcon1,
                title: "Keyword analysis",
                description:
                  "Climb the google podium with keyword analysis. Determining which keywords are worth generating around is essential for gaining more targeted traffic and increasing your page rankings and search volume.",
              },
              {
                icon: seoIcon2,
                title: "On-page SEO",
                description:
                  "Following good on-page SEO practices helps ensure that search engines and users can navigate your pages with ease. From internal links and HTML to page layout and content density, our SEO team can help increase the relevancy and accessibility of your web pages.",
              },
              {
                icon: seoIcon3,
                title: "Technical SEO",
                description:
                  "Building a technically strong website means increasing its 'crawlability' and credibility. This involves Assessing your core web vitals, internal linking structure and making sure your website is secure.",
              },
              {
                icon: seoIcon4,
                title: "Linkbuilding",
                description:
                  "Building a good reputation requires more than just a high-performing website, you also need to gain the seal of approval from other credible websites. Novicell works with three concepts within link building; internal, external and outgoing links.",
              },
              {
                icon: seoIcon5,
                title: "International SEO",
                description:
                  "Going international? We are well-versed in international SEO and marketing to a global audience. Whether your goal is to increase your site's visibility in targeted countries, or you're entering a new foreign market, our process for scaling websites to multinational markets will help you get there.",
              },
              {
                icon: seoIcon6,
                title: "Site migration",
                description:
                  "Site migrations are usually considered a risk for SEO, but they shouldn't have to be. With our help, our SEO specialists can ensure that your site is migrated seamlessly, without losing the traffic you worked so hard to gain.",
              },
            ].map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
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

      {/* SEO Benefits Section */}
      <section className="bodypx py-80 lightgraybg">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-8 mb-4">
              <div className="col-lg-9">
                <h2 className="font-40 fw-400">
                  <strong>What are the benefits of SEO</strong>
                  to your website?
                </h2>
                <ul className="list-unstyled mt-4 mb-4 ps-md-0 ps-1">
                  <li className="font-18 d-flex gap-2 align-items-start">
                    <img src={tickCircle} alt="Tick" className="me-2" />
                    Helps enhance the overall customer experience on your
                    website
                  </li>
                  <li className="font-18 d-flex gap-2 align-items-start mt-2">
                    <img src={tickCircle} alt="Tick" className="me-2" />
                    Can Improve your page rankings on Google, maximise traffic
                    and conversions
                  </li>
                  <li className="font-18 d-flex gap-2 align-items-start mt-2">
                    <img src={tickCircle} alt="Tick" className="me-2" />
                    Helps you improve the functionality and performance of your
                    website
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="appdevbggar padding30 rounded16">
                <img className="d-block w-75 m-auto" src={cmsImage} alt="CMS" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOServices;
