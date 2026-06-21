import "./FeedCard.css";
import { useState } from "react";

import {
  Heart,
  Bookmark,
  Play
} from "lucide-react";

import FeedModal from "../FeedModal/FeedModal";

function FeedCard({ item }) {

  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const [likeCount, setLikeCount] =
    useState(item.likes || 0);

  const handleLike = (
    e
  ) => {

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

  const handleSave = (
    e
  ) => {

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

        {/* SAVE */}

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

        {/* IMAGE */}

        <img
          src={item.image}
          alt={
            item.tailorName
          }
          className="feed-image"
        />

        {/* VIDEO ICON */}

        {item.type ===
          "video" && (
          <div className="video-icon">
            <Play
              size={18}
            />
          </div>
        )}

        {/* INFO */}

        <div className="feed-info">

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
              {likeCount}
            </span>

          </button>

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