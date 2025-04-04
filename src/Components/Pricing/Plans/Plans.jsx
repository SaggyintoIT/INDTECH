// import React from "react";
// import tickCircle from "../../assets/images/tick-circlecheckfill.svg";
// import closeCircle from "../../assets/images/close-circlefill.svg";
// import closeFillRed from "../../assets/images/closefillred.svg";
// import planIcon from "../../assets/images/Planicon.svg";
// import planIcon1 from "../../assets/images/Planicon1.svg";
// import planIcon2 from "../../assets/images/Planicon2.svg";
// // import "./Plans.css";

// const Plans = () => {
//   return (
//     <div>
//       {/* Pricing Plans Section */}
//       <section className="bodypx pb-4 pt-0">
//         <div className="pricing">
//           <div className="container-fluid px-md-0">
//             <div className="row">
//               {/* Trial Plan */}
//               <div className="col-md-6 col-xl-3 mt-md-0 mt-4">
//                 <div className="plan rounded16">
//                   <span className="fn-18 fw-600 text-uppercase">
//                     Protect for testing
//                   </span>
//                   <h2 className="mt-3">Trial Plan</h2>
//                   <div className="fn-18 fw-600 text-red">FREE-Monthly</div>
//                   <hr />
//                   <ul className="features mt-4">
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" /> Brand
//                       Awareness Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Retargeting Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Contextual, Demographic
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Facebook Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Global Certificates
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Snapchat Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       TikTok Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Advanced List Building
//                     </li>
//                   </ul>
//                   <a
//                     href="pricing-detail"
//                     className="btn-darkblack fw-bold fn-16 mt-4 w-100 text-capitalize"
//                   >
//                     <span>View Detail</span>
//                     <i className="icon icon-arrow"></i>
//                   </a>
//                 </div>
//               </div>

//               {/* Standard Plan */}
//               <div className="col-md-6 col-xl-3 mt-md-0 mt-4">
//                 <div className="plan popular rounded16">
//                   <span className="topfixed rounded24">Most popular</span>
//                   <span className="fn-18 fw-600 text-uppercase">
//                     Advanced project
//                   </span>
//                   <h2 className="mt-3">Standard</h2>
//                   <div className="fn-18 fw-600 text-red">$29-Monthly</div>
//                   <hr />
//                   <ul className="features mt-4">
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" /> Brand
//                       Awareness Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Retargeting Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Contextual, Demographic
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Facebook Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Global Certificates
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Snapchat Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Advanced List Building
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       TikTok Advertising
//                     </li>
//                   </ul>
//                   <a
//                     href="pricing-detail"
//                     className="btn-darkblack fw-bold fn-16 mt-4 w-100 text-capitalize"
//                   >
//                     <span>View Detail</span>
//                     <i className="icon icon-arrow"></i>
//                   </a>
//                 </div>
//               </div>

//               {/* Professional Plan */}
//               <div className="col-md-6 col-xl-3 mt-xl-0 mt-4">
//                 <div className="plan rounded16">
//                   <span className="fn-18 fw-600 text-uppercase">
//                     Protect for testing
//                   </span>
//                   <h2 className="mt-3">Professional</h2>
//                   <div className="fn-18 fw-600 text-red">$99-Monthly</div>
//                   <hr />
//                   <ul className="features mt-4">
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" /> Brand
//                       Awareness Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Retargeting Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Contextual, Demographic
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Facebook Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Global Certificates
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Snapchat Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       TikTok Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Advanced List Building
//                     </li>
//                   </ul>
//                   <a
//                     href="pricing-detail"
//                     className="btn-darkblack fw-bold fn-16 mt-4 w-100 text-capitalize"
//                   >
//                     <span>View Detail</span>
//                     <i className="icon icon-arrow"></i>
//                   </a>
//                 </div>
//               </div>

//               {/* Enterprise Plan */}
//               <div className="col-md-6 col-xl-3 mt-xl-0 mt-4">
//                 <div className="plan rounded16">
//                   <span className="fn-18 fw-600 text-uppercase">
//                     Protect for testing
//                   </span>
//                   <h2 className="mt-3">Enterprise</h2>
//                   <div className="fn-18 fw-600 text-red">$299-Monthly</div>
//                   <hr />
//                   <ul className="features mt-4">
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" /> Brand
//                       Awareness Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Retargeting Ads
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Contextual, Demographic
//                     </li>
//                     <li>
//                       <img src={tickCircle} className="me-1" alt="Tick" />{" "}
//                       Facebook Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Global Certificates
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Snapchat Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       TikTok Advertising
//                     </li>
//                     <li>
//                       <img src={closeCircle} className="me-1" alt="Close" />{" "}
//                       Advanced List Building
//                     </li>
//                   </ul>
//                   <a
//                     href="pricing-detail"
//                     className="btn-darkblack fw-bold fn-16 mt-4 w-100 text-capitalize"
//                   >
//                     <span>View Detail</span>
//                     <i className="icon icon-arrow"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Comparison Table */}
//       <section className="bodypx pb-5 pt-0">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="table-responsive-md invoicecereen">
//               <table id="example" className="my-4 w-100">
//                 <thead className="table-light">
//                   <tr>
//                     <th>Feature</th>
//                     <th>Free</th>
//                     <th>Standard</th>
//                     <th>Business</th>
//                     <th>Enterprise</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="even">
//                     <td data-title="Feature">
//                       <span>Requests Quota</span>
//                     </td>
//                     <td data-title="Free">
//                       <span>50k Requests/Day</span>
//                     </td>
//                     <td data-title="Standard">
//                       <span>100k Requests/Day</span>
//                     </td>
//                     <td data-title="Business">
//                       <span>500k Requests/Day</span>
//                     </td>
//                     <td data-title="Enterprise">
//                       <span>Unlimited</span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-title="Feature">
//                       <span>Account Access</span>
//                     </td>
//                     <td data-title="Free">
//                       <span>35</span>
//                     </td>
//                     <td data-title="Standard">
//                       <span>85</span>
//                     </td>
//                     <td data-title="Business">
//                       <span>120</span>
//                     </td>
//                     <td data-title="Enterprise">
//                       <span>Unlimited</span>
//                     </td>
//                   </tr>
//                   <tr className="even">
//                     <td data-title="Feature">
//                       <span>Account Access</span>
//                     </td>
//                     <td data-title="Business">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                     <td data-title="Enterprise">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                     <td data-title="Free">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                     <td data-title="Standard">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td data-title="Feature">
//                       <span>Account Access</span>
//                     </td>
//                     <td data-title="Business">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                     <td data-title="Enterprise">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                     <td data-title="Free">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                     <td data-title="Standard">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                   </tr>
//                   <tr className="even">
//                     <td data-title="Feature">
//                       <span>Account Access</span>
//                     </td>
//                     <td data-title="Business">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                     <td data-title="Enterprise">
//                       <span>
//                         <img src={closeFillRed} alt="Close" />
//                       </span>
//                     </td>
//                     <td data-title="Free">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                     <td data-title="Standard">
//                       <span>
//                         <img src={tickCircle} alt="Tick" />
//                       </span>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Additional Information Section */}
//         <div className="row mt-5">
//           <div className="col-md-4 mb-4">
//             <div className="bg-white padding30 rounded16 h-100 green_bor">
//               <img className="d-block" src={planIcon} alt="Plan Icon" />
//               <span className="fn-24 fw-bold pt-3 pb-2 d-block">
//                 Daily Updates
//               </span>
//               <p>
//                 Share updates instantly within our project management software,
//                 and get the entire team collaborating.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="bg-white padding30 rounded16 h-100 green_bor">
//               <img className="d-block" src={planIcon1} alt="Plan Icon" />
//               <span className="fn-24 fw-bold pt-3 pb-2 d-block">
//                 24/7 Support
//               </span>
//               <p>
//                 Share updates instantly within our project management software,
//                 and get the entire team collaborating.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="bg-white padding30 rounded16 h-100 green_bor">
//               <img className="d-block" src={planIcon2} alt="Plan Icon" />
//               <span className="fn-24 fw-bold pt-3 pb-2 d-block">
//                 Weekly Reports
//               </span>
//               <p>
//                 Share updates instantly within our project management software,
//                 and get the entire team collaborating.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Plans;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tickCircle from "../../../assets/images/tick-circlecheckfill.svg";
import closeCircle from "../../../assets/images/close-circlefill.svg";
import closeFillRed from "../../../assets/images/closefillred.svg";
import planIcon from "../../../assets/images/Planicon.svg";
import planIcon1 from "../../../assets/images/Planicon1.svg";
import planIcon2 from "../../../assets/images/Planicon2.svg";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  // Fetch plans data from the backend when the component mounts
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/planRoutes/plans"
        );
        setPlans(response.data); // Set the fetched plans data
      } catch (error) {
        console.error("Failed to fetch plans:", error);
        toast.error("Failed to fetch plans. Please try again later.");
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
      <ToastContainer /> {/* For displaying toast messages */}
      {/* Pricing Plans Section */}
      <section className="bodypx pb-4 pt-0">
        <div className="pricing">
          <div className="container-fluid px-md-0">
            <div className="row">
              {plans.map((plan) => (
                <div key={plan._id} className="col-md-6 col-xl-3 mt-md-0 mt-4">
                  <div
                    className={`plan rounded16 ${
                      plan.isPopular ? "popular" : ""
                    }`}
                  >
                    {plan.isPopular && (
                      <span className="topfixed rounded24">Most popular</span>
                    )}
                    <span className="fn-18 fw-600 text-uppercase">
                      {plan.description}
                    </span>
                    <h2 className="mt-3">{plan.name}</h2>
                    <div className="fn-18 fw-600 text-red">{plan.price}</div>
                    <hr />
                    <ul className="features mt-4">
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <img
                            src={feature.included ? tickCircle : closeCircle}
                            className="me-1"
                            alt={feature.included ? "Tick" : "Close"}
                          />
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="pricing-detail"
                      className="btn-darkblack fw-bold fn-16 mt-4 w-100 text-capitalize"
                    >
                      <span>View Detail</span>
                      <i className="icon icon-arrow"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Comparison Table */}
      <section className="bodypx pb-5 pt-0">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive-md invoicecereen">
              <table id="example" className="my-4 w-100">
                <thead className="table-light">
                  <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th>Standard</th>
                    <th>Business</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even">
                    <td data-title="Feature">
                      <span>Requests Quota</span>
                    </td>
                    <td data-title="Free">
                      <span>50k Requests/Day</span>
                    </td>
                    <td data-title="Standard">
                      <span>100k Requests/Day</span>
                    </td>
                    <td data-title="Business">
                      <span>500k Requests/Day</span>
                    </td>
                    <td data-title="Enterprise">
                      <span>Unlimited</span>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="Feature">
                      <span>Account Access</span>
                    </td>
                    <td data-title="Free">
                      <span>35</span>
                    </td>
                    <td data-title="Standard">
                      <span>85</span>
                    </td>
                    <td data-title="Business">
                      <span>120</span>
                    </td>
                    <td data-title="Enterprise">
                      <span>Unlimited</span>
                    </td>
                  </tr>
                  <tr className="even">
                    <td data-title="Feature">
                      <span>Account Access</span>
                    </td>
                    <td data-title="Business">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                    <td data-title="Enterprise">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                    <td data-title="Free">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                    <td data-title="Standard">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td data-title="Feature">
                      <span>Account Access</span>
                    </td>
                    <td data-title="Business">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                    <td data-title="Enterprise">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                    <td data-title="Free">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                    <td data-title="Standard">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                  </tr>
                  <tr className="even">
                    <td data-title="Feature">
                      <span>Account Access</span>
                    </td>
                    <td data-title="Business">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                    <td data-title="Enterprise">
                      <span>
                        <img src={closeFillRed} alt="Close" />
                      </span>
                    </td>
                    <td data-title="Free">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                    <td data-title="Standard">
                      <span>
                        <img src={tickCircle} alt="Tick" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="bg-white padding30 rounded16 h-100 green_bor">
              <img className="d-block" src={planIcon} alt="Plan Icon" />
              <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                Daily Updates
              </span>
              <p>
                Share updates instantly within our project management software,
                and get the entire team collaborating.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white padding30 rounded16 h-100 green_bor">
              <img className="d-block" src={planIcon1} alt="Plan Icon" />
              <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                24/7 Support
              </span>
              <p>
                Share updates instantly within our project management software,
                and get the entire team collaborating.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white padding30 rounded16 h-100 green_bor">
              <img className="d-block" src={planIcon2} alt="Plan Icon" />
              <span className="fn-24 fw-bold pt-3 pb-2 d-block">
                Weekly Reports
              </span>
              <p>
                Share updates instantly within our project management software,
                and get the entire team collaborating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
