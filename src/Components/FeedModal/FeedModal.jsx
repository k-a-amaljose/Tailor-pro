import "./FeedModal.css";

import { useState } from "react";

import {
  Heart,
  Bookmark,
  MessageCircle,
  Share2,
  MoreHorizontal,
  X,
} from "lucide-react";

function FeedModal({
  item,
  onClose,
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const [comment, setComment] =
    useState("");

  const [comments, setComments] =
    useState([
      "Beautiful design!",
      "Love the embroidery work ❤️",
    ]);

  const [showMenu, setShowMenu] =
    useState(false);

  if (!item) return null;

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      comment,
    ]);

    setComment("");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.tailorName,
        text: item.caption,
      });
    } else {
      navigator.clipboard.writeText(
        window.location.href
      );

      alert("Link copied!");
    }
  };

  const handleStoreProfile = () => {
    alert(
      "Store profile coming soon"
    );
  };

  return (
    <div
      className="feed-modal-overlay"
      onClick={onClose}
    >
      <div
        className="feed-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* Close */}

        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* LEFT IMAGE */}

        <div className="modal-image-section">
          <img
            src={item.image}
            alt={item.tailorName}
            className="modal-image"
          />
        </div>

        {/* RIGHT PANEL */}

        <div className="modal-side">

          {/* HEADER */}

          <div className="modal-header">

            <div className="modal-profile">

              <img
                src={item.profilePic}
                alt=""
                className="modal-avatar"
              />

              <div>
                <h4>
                  {item.tailorName}
                </h4>

                <span>
                  {item.date}
                </span>
              </div>

            </div>

            <div className="menu-wrapper">

              <button
                className="icon-btn"
                onClick={() =>
                  setShowMenu(
                    !showMenu
                  )
                }
              >
                <MoreHorizontal
                  size={20}
                />
              </button>

              {showMenu && (
                <div className="post-menu">

                  <button
                    onClick={
                      handleStoreProfile
                    }
                  >
                    View Store Profile
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        item.caption
                      )
                    }
                  >
                    View Full Caption
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        "We'll show fewer posts like this."
                      )
                    }
                  >
                    Not Interested
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        "Store muted."
                      )
                    }
                  >
                    Don't Recommend This Store
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        "Post reported."
                      )
                    }
                  >
                    Report Post
                  </button>

                </div>
              )}

            </div>

          </div>

          {/* ACTIONS */}

          <div className="modal-actions">

            <button
              className="icon-btn"
              onClick={() =>
                setLiked(
                  !liked
                )
              }
            >
              <Heart
                size={22}
                fill={
                  liked
                    ? "#ff4d94"
                    : "none"
                }
                color={
                  liked
                    ? "#ff4d94"
                    : "currentColor"
                }
              />
            </button>

            <button className="icon-btn">
              <MessageCircle
                size={22}
              />
            </button>

            <button
              className="icon-btn"
              onClick={
                handleShare
              }
            >
              <Share2
                size={22}
              />
            </button>

            <button
              className="icon-btn"
              onClick={() =>
                setSaved(
                  !saved
                )
              }
            >
              <Bookmark
                size={22}
                fill={
                  saved
                    ? "black"
                    : "none"
                }
              />
            </button>

          </div>

          {/* CAPTION */}

          <div className="modal-caption">
            <strong>
              {item.tailorName}
            </strong>

            <p>
              {item.caption}
            </p>
          </div>

          {/* COMMENTS */}

          <div className="comments-section">

            <h4>
              Comments
            </h4>

            {comments.map(
              (
                comment,
                index
              ) => (
                <div
                  key={index}
                  className="comment-item"
                >
                  {comment}
                </div>
              )
            )}

          </div>

          {/* INPUT */}

          <div className="comment-input-row">

            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) =>
                setComment(
                  e.target.value
                )
              }
            />

            <button
              onClick={
                handleComment
              }
            >
              Post
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default FeedModal;