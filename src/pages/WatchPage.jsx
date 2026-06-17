import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../data/mockVideos";
import VideoCard from "../components/VideoCard";
import "./WatchPage.css";

export default function WatchPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => v.id === id);

  if (!video) return (
    <div className="watch__not-found">
      <h2>Video not found</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );

  const related = videos.filter((v) => v.id !== id).slice(0, 5);

  return (
    <div className="watch">
      <div className="watch__main">
        <div className="watch__player">
          <iframe src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title} frameBorder="0" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div>
        <h1 className="watch__title">{video.title}</h1>
        <div className="watch__meta">
          <div className="watch__channel-info">
            <img src={video.avatar} alt={video.channel} className="watch__avatar" />
            <div>
              <p className="watch__channel-name">{video.channel}</p>
              <p className="watch__subs">1.2M subscribers</p>
            </div>
            <button className="watch__subscribe-btn">Subscribe</button>
          </div>
          <div className="watch__actions">
            <button className="watch__action-btn">👍 {video.likes}</button>
            <button className="watch__action-btn">👎 Dislike</button>
            <button className="watch__action-btn">↗️ Share</button>
            <button className="watch__action-btn">⬇️ Save</button>
          </div>
        </div>
        <div className="watch__description">
          <p>{video.views} • {video.timestamp}</p>
          <p style={{marginTop:"8px"}}>{video.description}</p>
        </div>
      </div>
      <div className="watch__sidebar">
        <h3 className="watch__related-title">Related Videos</h3>
        {related.map((v) => <VideoCard key={v.id} video={v} />)}
      </div>
    </div>
  );
}