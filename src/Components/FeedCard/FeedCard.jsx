import "./FeedCard.css";
import { useState } from "react";

import {
  Heart,
  Bookmark,
  Play,
  MessageCircle
} from "lucide-react";

import FeedModal from "../FeedModal/FeedModal";

function FeedCard({
  item,
  index,
  posts,
}) {

  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const [likeCount, setLikeCount] =
    useState(item.likes || 0);

  const formatLikes = (num) => {

    if (num >= 1000000000) {
      return (
        num / 1000000000
      )
        .toFixed(1)
        .replace(".0", "") + "B";
    }

    if (num >= 1000000) {
      return (
        num / 1000000
      )
        .toFixed(1)
        .replace(".0", "") + "M";
    }

    if (num >= 1000) {
      return (
        num / 1000
      )
        .toFixed(1)
        .replace(".0", "") + "K";
    }

    return num;
  };

  const handleLike = (e) => {

    e.stopPropagation();

    if (liked) {
      setLikeCount(
        likeCount - 1
      );
    } else {
      setLikeCount(
        likeCount + 1
      );
    }

    setLiked(!liked);
  };

  const handleSave = (e) => {

    e.stopPropagation();

    setSaved(!saved);
  };

  return (
    <>
      <div
        className="feed-card"
        onClick={() =>
          setShowModal(true)
        }
      >

        <button
          className={`save-btn ${
            saved
              ? "saved"
              : ""
          }`}
          onClick={
            handleSave
          }
        >
          <Bookmark
            size={20}
            fill={
              saved
                ? "black"
                : "none"
            }
            color="black"
          />
        </button>

        <img
          src={item.image}
          alt={
            item.tailorName
          }
          className="feed-image"
        />

        {item.type ===
          "video" && (
          <div className="video-icon">
            <Play size={18} />
          </div>
        )}

        <div className="feed-info">

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >

            <button
              className="likes-row like-btn"
              onClick={
                handleLike
              }
            >
              <Heart
                size={18}
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

              <span>
                {formatLikes(
                  likeCount
                )}
              </span>

            </button>

            <div className="likes-row">
              <MessageCircle size={18} />

              <span>
                {item.comments ? item.comments.length : 0}
              </span>
            </div>

          </div>

          <div className="tailor-row">

            <img
              src={
                item.profilePic
              }
              alt=""
              className="tailor-avatar"
            />

            <span>
              {
                item.tailorName
              }
            </span>

          </div>

          <p className="feed-caption">
            {item.caption}
          </p>

        </div>

      </div>

      {showModal && (

        <FeedModal
          item={item}
          posts={posts}
          currentIndex={index}
          onClose={() =>
            setShowModal(
              false
            )
          }
        />

      )}

    </>
  );
}

export default FeedCard;