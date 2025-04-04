// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import blog1 from "../../assets/images/blog/blog_1.jpg";
// import blog2 from "../../assets/images/blog/blog_2.jpg";
// import blog3 from "../../assets/images/blog/blog_3.jpg";
// import blog4 from "../../assets/images/blog/blog_4.jpg";
// import blog5 from "../../assets/images/blog/blog_5.jpg";
// import blog6 from "../../assets/images/blog/blog_6.jpg";
// import blog7 from "../../assets/images/blog/blog_7.jpg";
// import blog8 from "../../assets/images/blog/blog_8.jpg";
// import blog9 from "../../assets/images/blog/blog_9.jpg";
// import blog10 from "../../assets/images/blog/blog_10.jpg";
// import blog11 from "../../assets/images/blog/blog_11.jpg";
// import blog12 from "../../assets/images/blog/blog_12.jpg";
// import "./Gallery.css";

// const blogs = [
//   {
//     id: 1,
//     categories: ["All Blogs", "UI Design"],
//     image: blog1,
//     title:
//       "Flutter vs React Native: Which One is Better for Your Next Project?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Are you torn between Flutter vs React Native for your next mobile app development project? To.....",
//   },
//   {
//     id: 2,
//     categories: ["All Blogs", "UI Design", "Design System"],
//     image: blog2,
//     title: "How Mobile App Solutions Accelerate Digital Transformation...",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Mobile apps empower businesses' digital transformation initiatives by providing them with....",
//   },
//   {
//     id: 3,
//     categories: ["All Blogs", "Web Design"],
//     image: blog3,
//     title: "Top 12 AI Technology Trends for 2024",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "From groundbreaking advancements in machine learning to the rise of generative AI, we have...",
//   },
//   {
//     id: 4,
//     categories: ["All Blogs", "Webflow"],
//     image: blog4,
//     title: "How Much Does a App Development Cost in 2024?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Ever wondered how much it ACTUALLY costs to build your dream app? Building an app can be...",
//   },
//   {
//     id: 5,
//     categories: ["All Blogs", "Career"],
//     image: blog5,
//     title: "How to Create a Mobile App-based Startup?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Ever wondered how much it ACTUALLY costs to build your dream app? Building an app can be...",
//   },
//   {
//     id: 6,
//     categories: ["All Blogs", "Branding"],
//     image: blog6,
//     title: "Top 10 Python Frameworks for Web Development",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "From web development to machine learning and beyond, the Python programming language helps to build..",
//   },
//   {
//     id: 7,
//     categories: ["All Blogs", "Design Thinking"],
//     image: blog7,
//     title: "How Can Generative AI Help In Application Development?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Generative AI has revolutionized the way we write content, design, and animate, but how does it...",
//   },
//   {
//     id: 8,
//     categories: ["All Blogs", "Business"],
//     image: blog8,
//     title: "How to Choose a Right Mobile App Development Partner in 2024?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "In today's tech ecosystem, finding a reliable and dedicated mobile app development partner with...",
//   },
//   {
//     id: 9,
//     categories: ["All Blogs", "Web Design"],
//     image: blog9,
//     title: "What is The Impact of Data Science on Businesses?",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Data science holds immense transformative power when strategically employed by...",
//   },
//   {
//     id: 10,
//     categories: ["All Blogs", "Design System"],
//     image: blog10,
//     title: "Everything You Need To Know About Computer Vision",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Computer vision is a field of artificial intelligence (AI) and computer science focused on enabling...",
//   },
//   {
//     id: 11,
//     categories: ["All Blogs", "Webflow"],
//     image: blog11,
//     title: "RPA Trends of 2024 Changing The Way Businesses Work",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "Robotic Process Automation (RPA) has evolved from basic rule-based automation to...",
//   },
//   {
//     id: 12,
//     categories: ["All Blogs", "Career"],
//     image: blog12,
//     title: "What Is The Role Of Artificial Intelligence In Digital",
//     date: "March 25, 2024",
//     views: "6156 Views",
//     excerpt:
//       "AI is the present that we all must accept as it offers numerous perks, particularly to businesses...",
//   },
// ];

// const BlogComponent = () => {
//   const [activeCategory, setActiveCategory] = useState("All Blogs");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredBlogs = blogs.filter(
//     (blog) =>
//       (activeCategory === "All Blogs" ||
//         blog.categories.includes(activeCategory)) &&
//       blog.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const categories = [
//     "All Blogs",
//     "UI Design",
//     "Design System",
//     "Web Design",
//     "Webflow",
//     "Career",
//     "Branding",
//     "Design Thinking",
//     "Business",
//   ];

//   return (
//     <section id="gallery-2" className="bodypx gallery py-80">
//       <div className="container-fluid">
//         <div className="row justify-content-center position-relative">
//           <div className="col-12">
//             <ul
//               className="nav nav-pills my-md-3 gap-20 position-relative navflex"
//               id="pills-tab"
//               role="tablist"
//             >
//               <div className="noVertical cnt">
//                 {categories.map((category, index) => (
//                   <li key={index} className="nav-item">
//                     <button
//                       className={`nav-link ${
//                         activeCategory === category ? "active" : ""
//                       }`}
//                       onClick={() => setActiveCategory(category)}
//                     >
//                       {category}
//                     </button>
//                   </li>
//                 ))}
//               </div>
//             </ul>

//             <div className="search-wrapper">
//               <div className="input-holder">
//                 <input
//                   type="text"
//                   className="search-input"
//                   placeholder="Type to search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tab-content" id="pills-tabContent">
//           <div
//             className="tab-pane fade show active"
//             id="pills-all"
//             role="tabpanel"
//             aria-labelledby="pills-filter-tab"
//             tabIndex="0"
//           >
//             <div className="gal">
//               {filteredBlogs.map((blog) => (
//                 <div
//                   key={blog.id}
//                   className="img-hover-zoom img-hover-zoom--zoom-n-rotate divmore"
//                 >
//                   <div className="img-hover">
//                     <img
//                       className="w-100 inner-img"
//                       src={blog.image.default || blog.image}
//                       alt={blog.title}
//                     />
//                   </div>
//                   <div className="Insights-text blogtext">
//                     <span className="fn-18 text-lgray3">
//                       {blog.date} | {blog.views}
//                     </span>
//                     <a
//                       href="blog-details"
//                       className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline"
//                       tabIndex="0"
//                     >
//                       {blog.title}
//                     </a>
//                     <p className="pe-md-4 mt-2">{blog.excerpt}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogComponent;
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import blog1 from "../../../assets/images/blog/blog_1.jpg";
import blog2 from "../../../assets/images/blog/blog_2.jpg";
import blog3 from "../../../assets/images/blog/blog_3.jpg";
import blog4 from "../../../assets/images/blog/blog_4.jpg";
import blog5 from "../../../assets/images/blog/blog_5.jpg";
import blog6 from "../../../assets/images/blog/blog_6.jpg";
import blog7 from "../../../assets/images/blog/blog_7.jpg";
import blog8 from "../../../assets/images/blog/blog_8.jpg";
import blog9 from "../../../assets/images/blog/blog_9.jpg";
import blog10 from "../../../assets/images/blog/blog_10.jpg";
import blog11 from "../../../assets/images/blog/blog_11.jpg";
import blog12 from "../../../assets/images/blog/blog_12.jpg";
import "./Gallery.css";

const blogs = [
  {
    id: 1,
    categories: ["All Blogs", "UI Design"],
    image: blog1,
    title:
      "Flutter vs React Native: Which One is Better for Your Next Project?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Are you torn between Flutter vs React Native for your next mobile app development project? To.....",
  },
  {
    id: 2,
    categories: ["All Blogs", "UI Design", "Design System"],
    image: blog2,
    title: "How Mobile App Solutions Accelerate Digital Transformation...",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Mobile apps empower businesses' digital transformation initiatives by providing them with....",
  },
  {
    id: 3,
    categories: ["All Blogs", "Web Design"],
    image: blog3,
    title: "Top 12 AI Technology Trends for 2024",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "From groundbreaking advancements in machine learning to the rise of generative AI, we have...",
  },
  {
    id: 4,
    categories: ["All Blogs", "Webflow"],
    image: blog4,
    title: "How Much Does a App Development Cost in 2024?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Ever wondered how much it ACTUALLY costs to build your dream app? Building an app can be...",
  },
  {
    id: 5,
    categories: ["All Blogs", "Career"],
    image: blog5,
    title: "How to Create a Mobile App-based Startup?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Ever wondered how much it ACTUALLY costs to build your dream app? Building an app can be...",
  },
  {
    id: 6,
    categories: ["All Blogs", "Branding"],
    image: blog6,
    title: "Top 10 Python Frameworks for Web Development",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "From web development to machine learning and beyond, the Python programming language helps to build..",
  },
  {
    id: 7,
    categories: ["All Blogs", "Design Thinking"],
    image: blog7,
    title: "How Can Generative AI Help In Application Development?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Generative AI has revolutionized the way we write content, design, and animate, but how does it...",
  },
  {
    id: 8,
    categories: ["All Blogs", "Business"],
    image: blog8,
    title: "How to Choose a Right Mobile App Development Partner in 2024?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "In today's tech ecosystem, finding a reliable and dedicated mobile app development partner with...",
  },
  {
    id: 9,
    categories: ["All Blogs", "Web Design"],
    image: blog9,
    title: "What is The Impact of Data Science on Businesses?",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Data science holds immense transformative power when strategically employed by...",
  },
  {
    id: 10,
    categories: ["All Blogs", "Design System"],
    image: blog10,
    title: "Everything You Need To Know About Computer Vision",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Computer vision is a field of artificial intelligence (AI) and computer science focused on enabling...",
  },
  {
    id: 11,
    categories: ["All Blogs", "Webflow"],
    image: blog11,
    title: "RPA Trends of 2024 Changing The Way Businesses Work",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "Robotic Process Automation (RPA) has evolved from basic rule-based automation to...",
  },
  {
    id: 12,
    categories: ["All Blogs", "Career"],
    image: blog12,
    title: "What Is The Role Of Artificial Intelligence In Digital",
    date: "March 25, 2024",
    views: "6156 Views",
    excerpt:
      "AI is the present that we all must accept as it offers numerous perks, particularly to businesses...",
  },
];

const categories = [
  "All Blogs",
  "UI Design",
  "Design System",
  "Web Design",
  "Webflow",
  "Career",
  "Branding",
  "Design Thinking",
  "Business",
  "Webflow",
  "Career",
  "Branding",
  "Design Thinking",
  "Business",
];

const BlogComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All Blogs");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleItems, setVisibleItems] = useState(8);
  const [showSearch, setShowSearch] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const categoryRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    categoryRefs.current = categoryRefs.current.slice(0, categories.length);
    updateUnderlinePosition();
  }, []);

  useEffect(() => {
    updateUnderlinePosition();
  }, [activeCategory]);

  const updateUnderlinePosition = () => {
    const activeIndex = categories.indexOf(activeCategory);
    if (activeIndex >= 0 && categoryRefs.current[activeIndex]) {
      const activeElement = categoryRefs.current[activeIndex];
      const container = containerRef.current;

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      setUnderlineStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
        opacity: 1,
      });
    }
  };

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        (activeCategory === "All Blogs" ||
          blog.categories.includes(activeCategory)) &&
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const handleCategoryClick = (category, index) => {
    setActiveCategory(category);
    setVisibleItems(8);

    if (categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery("");
    }
  };

  return (
    <section id="gallery-2" className="bodypx gallery py-80">
      <div className="container-fluid">
        <div className="row justify-content-center position-relative">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4 position-relative">
              {!showSearch && (
                <div
                  ref={containerRef}
                  className="d-flex flex-nowrap overflow-auto hide-scrollbar pe-3 position-relative"
                  style={{ flex: 1 }}
                >
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      ref={(el) => (categoryRefs.current[index] = el)}
                      className={`btn btn-category ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick(category, index)}
                    >
                      {category}
                    </button>
                  ))}
                  <div className="category-underline" style={underlineStyle} />
                </div>
              )}

              <div className={`search-wrapper ${showSearch ? "active" : ""}`}>
                {showSearch ? (
                  <div
                    className="input-holder"
                    style={{ border: "1px solid black", borderRadius: "20px" }}
                  >
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Type to search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button className="close" onClick={toggleSearch}></button>
                  </div>
                ) : (
                  <button className="search-icon" onClick={toggleSearch}>
                    <span></span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div
                    className="card-img-top overflow-hidden"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={blog.image}
                      className="img-fluid w-100 h-100 object-fit-cover"
                      alt={blog.title}
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between text-muted small mb-2">
                      <span>{blog.date}</span>
                      <span>{blog.views}</span>
                    </div>
                    <h3 className="h5 card-title mb-3 fw-bold hover-underline">
                      <a
                        href="blog-details"
                        className="text-dark text-decoration-none"
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p className="card-text text-secondary">{blog.excerpt}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="text-muted">No blog posts found</h4>
            </div>
          )}
        </div>

        {visibleItems < blogs.length && filteredBlogs.length > 0 && (
          <div className="text-center mt-3 d-flex justify-content-center">
            <button
              id="loadMore"
              className="btn2 px-4 py-3 fw-bold d-flex align-items-center"
              onClick={loadMore}
            >
              <span>load More</span>
              <i className="icon icon-arrow ms-2"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogComponent;
