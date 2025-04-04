import React from "react";
import Insights1 from "../../../assets/images/Insights1.jpg";
import Insights2 from "../../../assets/images/Insights2.jpg";
import Insights3 from "../../../assets/images/Insights3.jpg";

const Insights = () => {
  return (
    <section className="bodypx ourworksection bg-white py-80">
      <div className="container-fluid px-md-0">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <b>Featured Insights</b>
            </h2>
            <p className="pe-md-4">
              Explore our featured insights for expert advice, industry trends,
              and valuable knowledge. Our content provides in-depth analysis to
              keep you informed and inspired, ensuring you stay ahead in the
              ever-evolving digital landscape.
            </p>
          </div>

          <div className="pt-3 px-0">
            <div className="wrapper">
              <div className="ourwork-slider">
                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights1}
                      alt="Passio.AI - An Edge AI Platform"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      March 25, 2024 | 6156 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-30 fw-medium my-1 text-dgray hoverunderline"
                    >
                      Passio.AI - An Edge AI Platform
                    </a>
                    <p className="pe-md-4">
                      How MindInventory contributed to the success of Passio -
                      an edge AI platform, transforming the lifestyle.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights2}
                      alt="Tech Transformation in the Logistics Industry"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      November 15, 2013 | 12705 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-30 fw-medium my-1 text-dgray hoverunderline"
                    >
                      Tech Transformation in the
                      <br /> Logistics Industry
                    </a>
                    <p className="pe-md-4">
                      Understand ways technology evolution enables logistics
                      businesses to boost their productivity and earn more
                      profit.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="img-hover">
                    <img
                      className="inner-img"
                      src={Insights3}
                      alt="How AI Benefits Healthcare Startups"
                    />
                  </div>
                  <div className="Insights-text">
                    <span className="fn-18 text-lgray3">
                      May 25, 2024 | 6156 Views
                    </span>
                    <a
                      href="#"
                      className="d-block fn-30 fw-medium my-1 text-dgray hoverunderline"
                    >
                      How AI Benefits Healthcare
                      <br /> Startups
                    </a>
                    <p className="pe-md-4">
                      How AI in healthcare is transforming the whole industry
                      landscape and ways HealthTech startups are adopting it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Insights = () => {
//   const [insights, setInsights] = useState([]); // State to store fetched insights
//   const [loading, setLoading] = useState(true); // State to handle loading state
//   const [error, setError] = useState(null); // State to handle errors

//   // Fetch insights from the backend
//   useEffect(() => {
//     const fetchInsights = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/insights");
//         setInsights(response.data); // Set fetched data to state
//         setLoading(false); // Set loading to false
//       } catch (error) {
//         setError(error.message); // Set error message
//         setLoading(false); // Set loading to false
//       }
//     };

//     fetchInsights();
//   }, []);

//   // Display loading or error messages
//   if (loading) {
//     return <div>Loading insights...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <section
//       className="bodypx ourworksection bg-white py-80"
//       data-aos="fade-up"
//     >
//       <div className="container-fluid px-md-0">
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <h2>
//               <b>Featured Insights</b>
//             </h2>
//             <p className="pe-md-4">
//               Explore our featured insights for expert advice, industry trends,
//               and valuable knowledge. Our content provides in-depth analysis to
//               keep you informed and inspired, ensuring you stay ahead in the
//               ever-evolving digital landscape.
//             </p>
//           </div>

//           <div className="pt-3 px-0">
//             <div className="wrapper">
//               <div className="ourwork-slider">
//                 {insights.map((insight) => (
//                   <div key={insight._id}>
//                     <div className="img-hover">
//                       <img
//                         className="inner-img"
//                         src={`http://localhost:5000/${insight.image}`} // Use the backend URL
//                         alt={insight.title}
//                       />
//                     </div>
//                     <div className="Insights-text">
//                       <span className="fn-18 text-lgray3">
//                         {insight.date} | {insight.views} Views
//                       </span>
//                       <a
//                         href="#"
//                         className="d-block fn-30 fw-medium my-1 text-dgray hoverunderline"
//                       >
//                         {insight.title}
//                       </a>
//                       <p className="pe-md-4">{insight.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Insights;
