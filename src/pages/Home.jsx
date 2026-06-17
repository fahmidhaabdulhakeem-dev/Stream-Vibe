import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { videos, categories } from "../data/mockVideos";
import "./Home.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filtered = activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  const handleWatchNow = () => {
    // Scrolls down to the video grid smoothly
    document.querySelector(".video-grid").scrollIntoView({ behavior: "smooth" });
  };

  const handleTrending = () => {
    navigate("/trending");
  };

  return (
    <div className="home">

      {/* Hero Banner */}
      <div className="hero">
        <div className="hero__content">
          <p className="hero__tag">✨ Discover Something New</p>
          <h1 className="hero__title">
            Your World of <span>Streaming</span>
          </h1>
          <p className="hero__subtitle">
            Explore thousands of videos from top creators around the world.
          </p>
          <div className="hero__buttons">
            <button
              className="hero__btn hero__btn--primary"
              onClick={handleWatchNow}
            >
              ▶ Watch Now
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={handleTrending}
            >
              🔥 Trending
            </button>
          </div>
        </div>
        <div className="hero__glow"></div>
      </div>

      {/* Category Bar */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? "category-pill--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="section-title">
        {activeCategory === "All" ? "🎬 All Videos" : `📂 ${activeCategory}`}
      </h2>

      <div className="video-grid">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

    </div>
  );
}