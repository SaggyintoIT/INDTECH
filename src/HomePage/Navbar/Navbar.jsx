import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"; // Adjust the path accordingly

const Navbar = () => {
  return (
    <header className="my_header w-100 "  id="header">
      <div className="w-100 header_container d-flex align-items-center">
        <div className="logo_container">
          <Link to="/" className="d-block">
            <img src={logo} className="w-100 default_logo" alt="Logo" />
          </Link>
        </div>
        <div className="menu_container">
          <ul className="menu_list" id="menulist">
            <Dropdown title="Who We Are" index={0}>
              <div className="row">
                <div className="col-md-12 py-md-5 py-2">
                  <div className="row">
                    <div className="col-md-3 bdr">
                      <div className="menu-title">
                        <p>Incubating a culture of innovation &amp; creativity</p>
                      </div>
                    </div>
                    <DropdownColumn>
                      <li><Link to="/about-us">About Us</Link></li>
                      <li><Link to="/our-team">Our Team</Link></li>
                      <li><Link to="/careers">Career</Link></li>
                      <li><Link to="/contact-us">Contact Us</Link></li>
                    </DropdownColumn>
                    <DropdownColumn>
                      <li><Link to="/our-client">Our Clients</Link></li>
                      <li><Link to="/press-media">Press & Media</Link></li>
                      <li><Link to="/life-at-indtechmark">Life at INDTechMark</Link></li>
                      <li><Link to="/get-free-consultation">Get Free Consultation</Link></li>
                    </DropdownColumn>
                    <DropdownColumn>
                      <li><Link to="/client-reviews">Client Reviews</Link></li>
                      <li><Link to="/our-client-reviews">Our Client Reviews</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                    </DropdownColumn>
                  </div>
                </div>
              </div>
            </Dropdown>
            <Dropdown title="Services" index={1}>
              <DropdownColumn>
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                <li><Link to="/digital-marketing-services">Digital Marketing</Link></li>
                <li className="d-none"><Link to="/seo">Search Engine Optimization</Link></li>
              </DropdownColumn>
              <DropdownColumn>
                <li><Link to="/website-design-company">Web Designing</Link></li>
                <li><Link to="/portfolio">Work</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </DropdownColumn>
            </Dropdown>
            <Dropdown title="Industries" index={2}>
              <DropdownColumn>
                <li><Link to="/social-media">Social Media</Link></li>
                <li><Link to="/finance">Finance</Link></li>
                <li><Link to="/education">Education</Link></li>
              </DropdownColumn>
              <DropdownColumn>
                <li><Link to="/healthcare">Healthcare</Link></li>
                <li><Link to="/sports">Sports</Link></li>
              </DropdownColumn>
            </Dropdown>
            <li><Link to="#">Work</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>
              <Link to="/contact-us" className="btn-darkblack px-4 text-white py-3 fw-bold d-flex">
                <span>Contact Us</span>
                <i className="icon icon-arrow"></i>
              </Link>
            </li>
          </ul>
          <div id="navtoggle" className="open" title="Open menu" onClick={() => menuToggle()}>
            {[...Array(6)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const Dropdown = ({ title, index, children }) => (
  <li className="drop">
    <a href="#" title={title}>
      {title}
      <svg>
        <use xlinkHref="#down_arrow" />
      </svg>
    </a>
    <span className="sub_menu" data-index={index}></span>
    <div className="menu_dropdown px-md-5 px-3">{children}</div>
  </li>
);

const DropdownColumn = ({ children }) => (
  <div className="col-md-4 bdr">
    <ul className="sub-menu">{children}</ul>
  </div>
);

const menuToggle = () => {
  document.getElementById("menulist").classList.toggle("open");
};

export default Navbar;
