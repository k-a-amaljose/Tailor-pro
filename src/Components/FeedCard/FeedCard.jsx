import "./FeedCard.css";

import {
  Heart,
  Bookmark,
  Play
} from "lucide-react";

function FeedCard({ item }) {
  return (
    <div className="feed-card">

      <button className="save-btn">
        <Bookmark size={20} />
      </button>

      <img
        src={item.image}
        alt=""
        className="feed-image"
      />

      {item.type === "video" && (
        <div className="video-icon">
          <Play size={18} />
        </div>
      )}

      <div className="feed-info">

        <div className="likes-row">
          <Heart size={18} />
          <span>{item.likes}</span>
        </div>

        <div className="tailor-row">
          <img
            src={item.profilePic}
            alt=""
            className="tailor-avatar"
          />

          <span>{item.tailorName}</span>
        </div>

      </div>

    </div>
  );
}

export default FeedCard;