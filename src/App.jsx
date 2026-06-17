import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import WatchPage from "./pages/WatchPage";
import SearchResults from "./pages/SearchResults";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="app-layout">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/watch/:id"     element={<WatchPage />} />
            <Route path="/search"        element={<SearchResults />} />
            <Route path="/trending"      element={<ComingSoon />} />
            <Route path="/subscriptions" element={<ComingSoon />} />
            <Route path="/library"       element={<ComingSoon />} />
            <Route path="/history"       element={<ComingSoon />} />
            <Route path="/liked"         element={<ComingSoon />} />
            <Route path="/your-videos"   element={<ComingSoon />} />
            <Route path="/watch-later"   element={<ComingSoon />} />
            <Route path="*"              element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}