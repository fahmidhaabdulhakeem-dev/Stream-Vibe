import { useLocation } from "react-router-dom";
import { videos } from "../data/mockVideos";
import VideoCard from "../components/VideoCard";
import "./SearchResults.css";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";
  const results = videos.filter((v) =>
    v.title.toLowerCase().includes(query.toLowerCase()) ||
    v.channel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results">
      <h2 className="search-results__heading">Results for: <span>"{query}"</span></h2>
      <p className="search-results__count">{results.length} video(s) found</p>
      {results.length === 0
        ? <div className="search-results__empty">😕 No results found for "{query}"</div>
        : <div className="search-grid">{results.map((v) => <VideoCard key={v.id} video={v} />)}</div>
      }
    </div>
  );
}