import { useLocation } from "react-router-dom";
import "./ComingSoon.css";

export default function ComingSoon() {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "").replace("-", " ");

  return (
    <div className="coming-soon">
      <div className="coming-soon__icon">🎬</div>
      <h1 className="coming-soon__title">
        {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
      </h1>
      <p className="coming-soon__text">This section is coming soon!</p>
      <p className="coming-soon__sub">
        In a real YouTube app, your {pageName} would appear here.
      </p>
      <a href="/" className="coming-soon__btn">← Go Back Home</a>
    </div>
  );
}