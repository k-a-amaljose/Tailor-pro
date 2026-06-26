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
  onClose,
}) {
  const [postIndex, setPostIndex] =
    useState(currentIndex);

  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [zoomed, setZoomed] =
    useState(false);

    const [touchStartY, setTouchStartY] =
        useState(0);

    const [touchEndY, setTouchEndY] =
        useState(0);

  const [showMenu, setShowMenu] =
    useState(false);

  const [showComments, setShowComments] =
    useState(
      window.innerWidth > 768
    );

  const [comment, setComment] =
    useState("");

  const [reviewFilter, setReviewFilter] =
    useState("All");

  const currentPost =
    posts[postIndex] || item;

  useEffect(() => {
  setComments(
    currentPost.comments || []
  );
}, [postIndex]);

  const [comments, setComments] =
  useState(
    currentPost.comments || []
  );

  const formatLikes = (num) => {
    if (num >= 1000000000)
      return (
        num / 1000000000
      )
        .toFixed(1)
        .replace(".0", "") + "B";

    if (num >= 1000000)
      return (
        num / 1000000
      )
        .toFixed(1)
        .replace(".0", "") + "M";

    if (num >= 1000)
      return (
        num / 1000
      )
        .toFixed(1)
        .replace(".0", "") + "K";

    return num;
  };

  const nextPost = () => {
    if (
      postIndex <
      posts.length - 1
    ) {
      setPostIndex(
        postIndex + 1
      );
    }
  };

  const prevPost = () => {
    if (postIndex > 0) {
      setPostIndex(
        postIndex - 1
      );
    }
  };

  const handleTouchStart = (e) => {
  setTouchStartY(
    e.targetTouches[0].clientY
  );
};

const handleTouchMove = (e) => {
  setTouchEndY(
    e.targetTouches[0].clientY
  );
};

const handleTouchEnd = () => {

  const distance =
    touchStartY - touchEndY;

  if (
    Math.abs(distance) < 80
  )
    return;

  if (distance > 0) {
    nextPost();
  } else {
    prevPost();
  }
};

  useEffect(() => {

  const imageSection =
    document.querySelector(
      ".modal-image-section"
    );

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

  imageSection.addEventListener(
    "wheel",
    handleWheel,
    { passive: false }
  );

  return () => {

    imageSection.removeEventListener(
      "wheel",
      handleWheel
    );

  };

}, [postIndex]);

  const filteredComments =
    reviewFilter === "All"
      ? comments
      : comments.filter(
          (c) =>
            c.rating ===
            Number(
              reviewFilter
            )
        );

  const handleComment = () => {
    if (!comment.trim()) return;

    setComments([
      {
        id: Date.now(),
        user: "You",
        profile:
          "https://i.pravatar.cc/40?img=5",
        text: comment,
        date: "Just now",
        rating: 5,
        likes: 0,
      },
      ...comments,
    ]);

    setComment("");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title:
          currentPost.tailorName,
        text:
          currentPost.caption,
      });
    } else {
      navigator.clipboard.writeText(
        window.location.href
      );

      alert("Link copied");
    }
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
  onTouchStart={
    handleTouchStart
  }
  onTouchMove={
    handleTouchMove
  }
  onTouchEnd={
    handleTouchEnd
  }
>
        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <button
          className="nav-btn up-btn"
          onClick={prevPost}
        >
          <ChevronUp />
        </button>

        <button
          className="nav-btn down-btn"
          onClick={nextPost}
        >
          <ChevronDown />
        </button>

        <div className="modal-image-section">
          <img
            src={currentPost.image}
            alt=""
            className={`modal-image ${
              zoomed
                ? "zoomed"
                : ""
            }`}
            onDoubleClick={() =>
              setZoomed(
                !zoomed
              )
            }
          />
        </div>

        <div
  className="modal-side"
  onWheel={(e) =>
    e.stopPropagation()
  }
>
          <div className="modal-header">
            <div className="modal-profile">
              <img
                src={
                  currentPost.profilePic
                }
                alt=""
                className="modal-avatar"
              />

              <div>
                <h4>
                  {
                    currentPost.tailorName
                  }
                </h4>

                <span>
                  {
                    currentPost.date
                  }
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
                <MoreHorizontal />
              </button>

              {showMenu && (
                <div className="post-menu">
                  <button>
                    View Store Profile
                  </button>

                  <button>
                    View Full Caption
                  </button>

                  <button>
                    Not Interested
                  </button>

                  <button>
                    Don't Recommend
                    Store
                  </button>

                  <button>
                    Report Post
                  </button>
                </div>
              )}
            </div>
          </div>

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

            <button
              className="icon-btn"
              onClick={() =>
                setShowComments(
                  !showComments
                )
              }
            >
              <MessageCircle />
            </button>

            <button
              className="icon-btn"
              onClick={
                handleShare
              }
            >
              <Share2 />
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
                fill={
                  saved
                    ? "black"
                    : "none"
                }
              />
            </button>
          </div>

          <div className="modal-like-count">
            {formatLikes(
              liked
                ? currentPost.likes +
                    1
                : currentPost.likes
            )}{" "}
            likes
          </div>

          <div className="modal-caption">
            <strong>
              {
                currentPost.tailorName
              }
            </strong>

            <p>
              {
                currentPost.caption
              }
            </p>
          </div>

          {showComments && (
            <>
              <div className="review-filter">
                <button
                  onClick={() =>
                    setReviewFilter(
                      "All"
                    )
                  }
                >
                  All
                </button>

                <button
                  onClick={() =>
                    setReviewFilter(
                      "5"
                    )
                  }
                >
                  5★
                </button>

                <button
                  onClick={() =>
                    setReviewFilter(
                      "4"
                    )
                  }
                >
                  4★
                </button>

                <button
                  onClick={() =>
                    setReviewFilter(
                      "3"
                    )
                  }
                >
                  3★
                </button>

                <button
                    onClick={() =>
                        setReviewFilter("2")
                    }
                >
                    2★
                </button>

                <button
                    onClick={() =>
                        setReviewFilter("1")
                    }
                >
                    1★
                </button>
              </div>

              <div
  className="comments-section"
  onWheel={(e) =>
    e.stopPropagation()
  }
>
                <h4>
                    Comments (
                        {comments.length}
                    )
                </h4>

                {filteredComments.map(
                  (
                    comment
                  ) => (
                    <div
                      key={
                        comment.id
                      }
                      className="comment-card"
                    >
                      <img
                        src={
                          comment.profile
                        }
                        alt=""
                        className="comment-avatar"
                      />

                      <div className="comment-content">
                        <div className="comment-user">
                          {
                            comment.user
                          }
                        </div>

                        <div className="comment-stars">
                          {[
                            ...Array(
                              comment.rating
                            ),
                          ].map(
                            (
                              _,
                              i
                            ) => (
                              <Star
                                key={
                                  i
                                }
                                size={
                                  14
                                }
                                fill="gold"
                              />
                            )
                          )}
                        </div>

                        <div className="comment-text">
                          {
                            comment.text
                          }
                        </div>

                        <div className="comment-footer">
                          <span>
                            {
                              comment.date
                            }
                          </span>

                          <button className="comment-like-btn">
                            ❤️{" "}
                            {formatLikes(
                              comment.likes
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          )}

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