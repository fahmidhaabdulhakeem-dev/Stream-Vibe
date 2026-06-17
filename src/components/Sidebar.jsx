import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { icon: "🏠", label: "Home",          path: "/" },
  { icon: "🔥", label: "Trending",      path: "/trending" },
  { icon: "📺", label: "Subscriptions", path: "/subscriptions" },
  { icon: "📚", label: "Library",       path: "/library" },
  { icon: "🕐", label: "History",       path: "/history" },
  { icon: "👍", label: "Liked Videos",  path: "/liked" },
];

const channels = [
  { name: "Traversy Media",   color: "#f093fb" },
  { name: "freeCodeCamp",     color: "#06b6d4" },
  { name: "Fireship",         color: "#f472b6" },
  { name: "Academind",        color: "#7c3aed" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">

        {/* Main Nav Links */}
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `sidebar__item ${isActive ? "sidebar__item--active" : ""}`
            }
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </NavLink>
        ))}

        <hr className="sidebar__divider" />
        <p className="sidebar__section-title">Subscriptions</p>

        {/* Channel Links — clicking searches for that channel */}
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="sidebar__item sidebar__channel"
            onClick={() =>
              navigate(`/search?q=${encodeURIComponent(ch.name)}`)
            }
            title={`View ${ch.name} videos`}
          >
            <div
              className="sidebar__channel-avatar"
              style={{ background: ch.color }}
            >
              {ch.name[0]}
            </div>
            <span className="sidebar__label">{ch.name}</span>
          </div>
        ))}

      </nav>
    </aside>
  );
}