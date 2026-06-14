import "./FeedCard.css";
import { useState } from "react";

import {
  Heart,
  Bookmark,
  Play
} from "lucide-react";

function FeedCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes || 0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setLiked(!liked);
  };

  const [saved, setSaved] = useState(false);

const handleSave = () => {
  setSaved(!saved);
};

  return (
    <div className="feed-card">

<button
  className="save-btn"
  onClick={handleSave}
>
  <Bookmark
    size={20}
    fill={saved ? "black" : "none"}
    color="black"
  />
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

        <button
          className="likes-row like-btn"
          onClick={handleLike}
        >
          <Heart
            size={18}
            fill={liked ? "#ff4d94" : "none"}
            color={liked ? "#ff4d94" : "currentColor"}
          />

          <span>{likeCount}</span>
        </button>

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