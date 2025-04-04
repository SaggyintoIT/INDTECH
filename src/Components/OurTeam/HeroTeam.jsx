import React from 'react'
import HeroTeamImg from "../../assets/images/ourteam.jpg"
import leadHero from "../../assets/images/Lead_with_outcomes.svg"
import TrustHero from "../../assets/images/TRUST.svg"
import peopleHero from "../../assets/images/PEOPLE_CULTURE.svg"
import coFounder1 from "../../assets/images/cofoundersnew_1.png"
import coFounder2 from "../../assets/images/cofoundersnew_2.png"
import pandit from "../../assets/images/dhirendra_pandit.png"
import Mukesh from "../../assets/images/mukeshsharma.png"
import Avinish from "../../assets/images/cofounders_3.jpg"


const HeroTeam = () => {
  return (
    <>
<section className="bodypx banner bg-white text-dgray pt-77">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 tracking-in-expand">
            <h2 className="text-dgray fs-70 fw-200">
              We're <span className="fborder fw-bold">passionate</span>
              <br /> about creating <span className="fw-bold fborder2">beautiful</span>
              <br /> & <span className="fw-bold">unique</span> digital work.
            </h2>
          </div>
          <div className="col-md-6 text-end py-5 mb-md-5">
            <img className="imgph-w" src={HeroTeamImg} alt="Our Team" />
          </div>
        </div>
      </div>
    </section>

    <section className="bodypx bg-dark py-4">
   <div className="container-fluid"> 
       <ul className="verticalitem text-center text-white">
        <li><span className="me-2 fw-bold">10+</span>   EMPLOYEES</li>
        <li><span className="me-2 fw-bold">2 </span>    LOCATIONS</li>
        <li><span className="me-2 fw-bold">8+ </span>   OF INDUSTRY EXPERIENCE</li>
        <li><span className="me-2 fw-bold">200+</span>    DELIGHTED CLIENTS</li>
       </ul>
            
        </div>
      
  
  </section>
  <section className="bodypx bg-white py-80 position-relative overflow text-center">
    <div className="container"> 
    <h2 className="text-dgray pb-2 pb-md-3">Why INDTechMark</h2>
   <p>
    INDTechMark . is a global technology consulting firm that enables organizations to modernize through digital transformation. With data as the new currency, INDTechMark helps transform long-term strategy with outcomes in mind around happiness, health and the economy. INDTechMark improves decision-making with speed and quality by partnering with leading cloud technologies.
   </p>
 
   <ul className="verticalitem text-center pt-md-5 pt-4">
    <li className="text-dgray border-0">
      <img src={leadHero}/>
      <span className="d-block fn-24 text-uppercase fw-600 mt-3">Lead with outcomes</span>  
      </li>
      <li className="text-dgray border-0">
        <img src={TrustHero}/>
        <span className="d-block fn-24 text-uppercase fw-600 mt-3"> Trust</span>  
        </li>
        <li className="text-dgray">
          <img src={peopleHero}/>
          <span className="d-block fn-24 text-uppercase fw-600 mt-3">People & Culture</span>  
        </li>
    
   </ul>
  </div>
</section>
<section className="bodypx bg-red co_bg py-80 position-relative overflow text-center">
      <div className="container"> 
      <h2 className="text-white pb-2 pb-md-3">CO - Founders</h2> 
     <ul className="verticalitem text-center pt-md-4">
      <li className="text-white border-0">
        <img className="rounded100 ph-w" src={coFounder1}/>
        <span className="d-block fn-24 fw-600 mt-3">Aman Singh</span>  
        <p className="opc text-white">CO-FOUNDER, CEO</p>
        </li>
        <li className="text-white border-0">
          <img className="rounded100 ph-w" src={coFounder2}/>
          <span className="d-block fn-24 fw-600 mt-3"> Avinish Kalura</span>
          <p className="opc text-white">CO-FOUNDER</p>  
          </li>        
      
     </ul>
    </div>
  </section>

    </>
  )
}

export default HeroTeam