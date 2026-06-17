import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          <div className="logo__icon">
            <span>▶</span>
          </div>
          <span className="logo__text">Stream<span className="logo__vibe">Vibe</span></span>
        </a>
      </div>

      <form className={`navbar__search ${focused ? "navbar__search--focused" : ""}`} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search videos, channels..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="navbar__search-input"
        />
        <button type="submit" className="navbar__search-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </form>

      <div className="navbar__right">
        <button className="navbar__icon-btn" onClick={toggleDarkMode} title="Toggle theme">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="navbar__upload-btn">+ Upload</button>
        <div className="navbar__avatar">
          <span>U</span>
        </div>
      </div>
    </nav>
  );
}