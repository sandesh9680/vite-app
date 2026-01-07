import React, { useEffect, useState } from "react";
import work3 from "../assets/blogs.png";

const blogs = [
  {
    icon: "laptop",
    date: "Aug 7",
    readTime: "3 min read",
    title: "How to Register Your Company Online",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
  {
    icon: "clipboard",
    date: "Aug 5",
    readTime: "5 min read",
    title: "GST Filing Process",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
  {
    icon: "money",
    date: "Aug 3",
    readTime: "4 min read",
    title: "Income Tax Filing Guide",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
  {
    icon: "laptop",
    date: "Aug 1",
    readTime: "6 min read",
    title: "Startup Compliance Checklist",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
  {
    icon: "clipboard",
    date: "Jul 29",
    readTime: "4 min read",
    title: "Trademark Registration Explained",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
  {
    icon: "money",
    date: "Jul 26",
    readTime: "5 min read",
    title: "Understanding Business Taxation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  },
];

const Insights = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalCards = blogs.length;

  /* ----------------------------
     RESPONSIVE LOGIC
  -----------------------------*/
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setActiveIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(totalCards / cardsPerView);

  /* ----------------------------
     AUTO SLIDE
  -----------------------------*/
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const renderIcon = () => <img src={work3} alt="" />;

  return (
    <section className="insights">
      <div className="container overflow-hidden" style={{padding:"0px"}}>
        <div className="insights-label-wrapper">
          <div className="heading_short_long">
            <div className="short_title">BUSINESS BLOG</div>
            <h2 className="long_title text-center">
              Insights That Drive Your Business
            </h2>
          </div>
        </div>

        {/* BLOG SLIDER */}
        <div
          className="blog-cards"
          style={{
            display: "flex",
            // overflow: "hidden",
            transition: "transform 0.6s ease",
            transform: `translateX(-${activeIndex * 100}%)`,
            gap:"60px",
            padding:"0 20px"
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card"
              style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            >
              <div className="blog-icon">{renderIcon(blog.icon)}</div>

              <div className="blog_content">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-separator">·</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>

                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>

                <button className="blog-read-more">
                  Read More{" "}
                  <span>
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.59304 0L0.0687474 1.60477L6.89496 7.8L0 14.1573L1.59304 15.6L10.0141 7.8L1.59304 0Z"
                        fill="#FFFDFC"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="blog-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
