import "./FeedModal.css";

import { useState, useEffect } from "react";

import {
  Heart,
  Bookmark,
  MessageCircle,
  Share2,
  MoreHorizontal,
  X,
  ChevronUp,
  ChevronDown,
  Star,
} from "lucide-react";

function FeedModal({
  item,
  posts = [],
  currentIndex = 0,
  gridLiked,
  gridSaved,
  onGridLikeToggle,
  onGridSaveToggle,
  onClose,
}) {
  const [postIndex, setPostIndex] = useState(currentIndex);

  // Safely seed tracking states using structural state properties passed down from Grid item
  const [likedPosts, setLikedPosts] = useState({ [item.id]: gridLiked });
  const [savedPosts, setSavedPosts] = useState({ [item.id]: gridSaved });

  const [zoomed, setZoomed] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const [showComments, setShowComments] = useState(
    window.innerWidth > 768
  );

  const [comment, setComment] = useState("");
  const [selectedRating, setSelectedRating] = useState(5);
  const [reviewFilter, setReviewFilter] = useState("All");

  const currentPost = posts[postIndex] || item;

  // Determine active states for current post
  const isCurrentPostLiked = !!likedPosts[currentPost.id];
  const isCurrentPostSaved = !!savedPosts[currentPost.id];

  useEffect(() => {
    setComments(currentPost.comments || []);
    setShowMenu(false);
    setZoomed(false);
  }, [postIndex, currentPost]);

  const [comments, setComments] = useState(
    currentPost.comments || []
  );

  const formatLikes = (num) => {
    if (num >= 1000000000)
      return (num / 1000000000).toFixed(1).replace(".0", "") + "B";
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1000)
      return (num / 1000).toFixed(1).replace(".0", "") + "K";
    return num;
  };

  const nextPost = () => {
    if (postIndex < posts.length - 1) {
      setPostIndex(postIndex + 1);
    }
  };

  const prevPost = () => {
    if (postIndex > 0) {
      setPostIndex(postIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    const distance = touchStartY - touchEndY;
    if (Math.abs(distance) < 80) return;
    if (distance > 0) {
      nextPost();
    } else {
      prevPost();
    }
  };

  useEffect(() => {
    const imageSection = document.querySelector(".modal-image-section");
    if (!imageSection) return;

    let locked = false;
    const handleWheel = (e) => {
      e.preventDefault();
      if (locked) return;
      locked = true;

      if (e.deltaY > 0) {
        nextPost();
      } else {
        prevPost();
      }

      setTimeout(() => {
        locked = false;
      }, 500);
    };

    imageSection.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      imageSection.removeEventListener("wheel", handleWheel);
    };
  }, [postIndex, posts.length]);

  const filteredComments =
    reviewFilter === "All"
      ? comments
      : comments.filter((c) => c.rating === Number(reviewFilter));

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments([
      {
        id: Date.now(),
        user: "You",
        profile: "https://i.pravatar.cc/40?img=5",
        text: comment,
        date: "Just now",
        rating: selectedRating,
        likes: 0,
      },
      ...comments,
    ]);

    setComment("");
    setSelectedRating(5);
  };

  const handleCopyLink = () => {
    const postUrl = `${window.location.origin}${window.location.pathname}?post=${currentPost.id}`;
    navigator.clipboard.writeText(postUrl);
    alert("Link to this post copied to clipboard!");
    setShowMenu(false);
  };

  const toggleLike = () => {
    // If interacting with the original post element context, sync the parent Card view instantly
    if (currentPost.id === item.id) {
      onGridLikeToggle();
    }
    setLikedPosts((prev) => ({
      ...prev,
      [currentPost.id]: !prev[currentPost.id],
    }));
  };

  const toggleSave = () => {
    // If interacting with the original post element context, sync the parent Card view instantly
    if (currentPost.id === item.id) {
      onGridSaveToggle();
    }
    setSavedPosts((prev) => ({
      ...prev,
      [currentPost.id]: !prev[currentPost.id],
    }));
  };

  return (
    <div className="feed-modal-overlay" onClick={onClose}>
      <div
        className="feed-modal"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <button className="nav-btn up-btn" onClick={prevPost}>
          <ChevronUp />
        </button>

        <button className="nav-btn down-btn" onClick={nextPost}>
          <ChevronDown />
        </button>

        <div className="modal-image-section">
          <img
            src={currentPost.image}
            alt=""
            className={`modal-image ${zoomed ? "zoomed" : ""}`}
            onDoubleClick={() => setZoomed(!zoomed)}
          />
        </div>

        <div className="modal-side" onWheel={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-profile">
              <img src={currentPost.profilePic} alt="" className="modal-avatar" />
              <div>
                <h4>{currentPost.tailorName}</h4>
                <span>{currentPost.date}</span>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button className="icon-btn" onClick={toggleLike}>
              <Heart
                fill={isCurrentPostLiked ? "#ff4d94" : "none"}
                color={isCurrentPostLiked ? "#ff4d94" : "currentColor"}
              />
            </button>

            <button className="icon-btn" onClick={() => setShowComments(!showComments)}>
              <MessageCircle />
            </button>

            <div className="menu-wrapper">
              <button
                className="icon-btn action-three-dot"
                onClick={() => setShowMenu(!showMenu)}
              >
                <MoreHorizontal size={24} />
              </button>
              {showMenu && (
                <div className="post-menu">
                  <button onClick={handleCopyLink}>Copy Link</button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowReport(true);
                    }}
                  >
                    Report Post
                  </button>
                </div>
              )}
            </div>

            <button className="icon-btn" onClick={handleCopyLink}>
              <Share2 />
            </button>

            <button
              className="icon-btn"
              style={{ marginLeft: "auto" }}
              onClick={toggleSave}
            >
              <Bookmark fill={isCurrentPostSaved ? "black" : "none"} />
            </button>
          </div>

          <div className="modal-like-count">
            {formatLikes(
              currentPost.id === item.id
                ? (isCurrentPostLiked ? (gridLiked ? currentPost.likes : currentPost.likes + 1) : (gridLiked ? currentPost.likes - 1 : currentPost.likes))
                : (isCurrentPostLiked ? currentPost.likes + 1 : currentPost.likes)
            )}{" "}
            likes
          </div>

          <div className="modal-caption">
            <strong>{currentPost.tailorName}</strong>
            <p>{currentPost.caption}</p>
          </div>

          {showComments && (
            <>
              <div className="review-filter">
                <button onClick={() => setReviewFilter("All")}>All</button>
                {["5", "4", "3", "2", "1"].map((stars) => (
                  <button
                    key={stars}
                    className={reviewFilter === stars ? "active" : ""}
                    onClick={() => setReviewFilter(stars)}
                  >
                    {stars}★
                  </button>
                ))}
              </div>

              <div className="comments-section" onWheel={(e) => e.stopPropagation()}>
                <h4>Comments ({comments.length})</h4>
                {filteredComments.map((comment) => (
                  <div key={comment.id} className="comment-card">
                    <img src={comment.profile} alt="" className="comment-avatar" />
                    <div className="comment-content">
                      <div className="comment-user">{comment.user}</div>
                      <div className="comment-stars">
                        {[...Array(comment.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="gold" />
                        ))}
                      </div>
                      <div className="comment-text">{comment.text}</div>
                      <div className="comment-footer">
                        <span>{comment.date}</span>
                        <button
                          className="comment-like-btn"
                          onClick={() => {
                            setComments(
                              comments.map((c) =>
                                c.id === comment.id
                                  ? { ...c, liked: !c.liked, likes: c.likes + (c.liked ? -1 : 1) }
                                  : c
                              )
                            );
                          }}
                        >
                          {comment.liked ? "❤️" : "🤍"} {formatLikes(comment.likes)}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="rating-input">
            <span>Your Rating</span>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={22}
                  color="#ffc107"
                  fill={star <= selectedRating ? "#ffc107" : "none"}
                  onClick={() => setSelectedRating(star)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          <div className="comment-input-row">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleComment}>Post</button>
          </div>

          {showReport && (
            <div className="report-overlay" onClick={() => setShowReport(false)}>
              <div className="report-modal" onClick={(e) => e.stopPropagation()}>
                <h3>Report Post</h3>
                {["Spam", "Harassment", "Inappropriate Content", "Fake Information", "Other"].map((reason) => (
                  <label key={reason}>
                    <input
                      type="radio"
                      checked={reportReason === reason}
                      onChange={() => setReportReason(reason)}
                    />
                    {reason}
                  </label>
                ))}
                <button
                  onClick={() => {
                    alert("Report submitted.");
                    setShowReport(false);
                    setReportReason("");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedModal;