import React, { useState, useEffect } from "react";
import portfolio1 from "../../../assets/images/portfolio/portfolio_1.jpg";
import portfolio2 from "../../../assets/images/portfolio/portfolio_2.jpg";
import portfolio3 from "../../../assets/images/portfolio/portfolio_3.jpg";
import portfolio4 from "../../../assets/images/portfolio/portfolio_4.jpg";
import portfolio5 from "../../../assets/images/portfolio/portfolio_5.jpg";
import portfolio6 from "../../../assets/images/portfolio/portfolio_6.jpg";
import portfolio7 from "../../../assets/images/portfolio/portfolio_7.jpg";
import portfolio8 from "../../../assets/images/portfolio/portfolio_8.jpg";
import portfolio9 from "../../../assets/images/portfolio/portfolio_9.jpg";
import portfolio10 from "../../../assets/images/portfolio/portfolio_10.jpg";
import "./Gallery.css"; // Import CSS for animations

const Gallery = () => {
  const [filter, setFilter] = useState("*"); // State for active filter
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const items =
      filter === "*"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter);
    setVisibleItems(items);
  }, [filter]);
  // Gallery items data
  const galleryItems = [
    { id: 1, category: "first", image: portfolio1, alt: "Elegant Room" },
    { id: 2, category: "second", image: portfolio2, alt: "Elegant Room" },
    { id: 3, category: "second", image: portfolio3, alt: "Elegant Room" },
    { id: 4, category: "first", image: portfolio4, alt: "Elegant Room" },
    { id: 5, category: "second", image: portfolio5, alt: "Elegant Room" },
    { id: 6, category: "fifth", image: portfolio6, alt: "Elegant Room" },
    { id: 7, category: "six", image: portfolio7, alt: "Elegant Room" },
    { id: 8, category: "first", image: portfolio8, alt: "Elegant Room" },
    { id: 9, category: "third", image: portfolio9, alt: "Elegant Room" },
    { id: 10, category: "third", image: portfolio10, alt: "Elegant Room" },
  ];

  // Filter gallery items based on the selected category
  const filteredItems =
    filter === "*"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-block bodypx pt-5">
      <div className="container-fluid mt-lg-5">
        <div className="row">
          <div className="col-12 text-center">
            <ul className="nav" id="gallery-flter">
              <li
                className={filter === "*" ? "active" : ""}
                onClick={() => setFilter("*")}
              >
                <a href="javascript:void(0);">All</a>
              </li>
              <li
                className={filter === "first" ? "active" : ""}
                onClick={() => setFilter("first")}
              >
                <a href="javascript:void(0);">Apps</a>
              </li>
              <li
                className={filter === "second" ? "active" : ""}
                onClick={() => setFilter("second")}
              >
                <a href="javascript:void(0);">Web</a>
              </li>
              <li
                className={filter === "third" ? "active" : ""}
                onClick={() => setFilter("third")}
              >
                <a href="javascript:void(0);">Social media post</a>
              </li>
              <li
                className={filter === "fifth" ? "active" : ""}
                onClick={() => setFilter("fifth")}
              >
                <a href="javascript:void(0);">Logo</a>
              </li>
              <li
                className={filter === "six" ? "active" : ""}
                onClick={() => setFilter("six")}
              >
                <a href="javascript:void(0);">BLOGS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container mt-lg-5 mt-2" id="gallery">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 portfolio-item ${item.category} ${
                filter === "*" || filter === item.category
                  ? "visible"
                  : "hidden"
              }`}
            >
              <div className="item">
                <img
                  className="img-fluid"
                  src={item.image}
                  alt={item.alt}
                  width="600"
                  height="500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
