import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <div className="video-card" onClick={() => navigate(`/watch/${video.id}`)}>
      <div className="video-card__thumbnail-wrap">
        <img className="video-card__thumbnail" src={video.thumbnail} alt={video.title}
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${video.id}/480/270`; }} />
        <div className="video-card__overlay"></div>
        <span className="video-card__duration">{video.duration}</span>
      </div>
      <div className="video-card__info">
        <img src={video.avatar} alt={video.channel} className="video-card__avatar" />
        <div className="video-card__meta">
          <h3 className="video-card__title">{video.title}</h3>
          <p className="video-card__channel">{video.channel}</p>
          <p className="video-card__stats">{video.views} • {video.timestamp}</p>
        </div>
      </div>
    </div>
  );
}