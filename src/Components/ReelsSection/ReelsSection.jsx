import React, { useRef, useEffect, useState } from "react";
import "./ReelsSection.css";

function ReelsSection({ data }) {
  const scrollRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [activeReel, setActiveReel] = useState(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  
  // NEW STATES: For interactive features
  const [likedReels, setLikedReels] = useState({}); // Stores { reelId: true/false }
  const [showComments, setShowComments] = useState(false);

  // Smooth mouse-wheel logic
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };
    const slider = scrollRef.current;
    if (slider) slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (slider) slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (isModalPlaying) modalVideoRef.current.pause();
      else modalVideoRef.current.play().catch(err => console.log(err));
      setIsModalPlaying(!isModalPlaying);
    }
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setActiveReel(null);
    setIsModalPlaying(false);
    setShowComments(false); // Reset comments panel on close
  };

  const handleArrowScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // NEW FUNCTIONS: Interaction Handlers
  const handleLikeToggle = (e, reelId) => {
    e.stopPropagation(); // Prevents video from pausing when clicking like
    setLikedReels(prev => ({
      ...prev,
      [reelId]: !prev[reelId]
    }));
  };

  const handleCommentToggle = (e) => {
    e.stopPropagation();
    setShowComments(!showComments);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // Simulates a share action using the native browser alert
    alert("Link copied to clipboard! 📋");
  };

  // Helper to format numbers (e.g., 12400 -> 12.4K)
  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <section className="reels-feed-section">
      <div className="reels-title-container">
        <h2>Shorts & Reels</h2>
      </div>

      <div className="reels-slider-wrapper">
        <button className="reels-arrow left" onClick={() => handleArrowScroll("left")}>&#10094;</button>
        
        <div className="reels-grid" ref={scrollRef}>
          {data.map((reel) => (
            <div 
              key={reel.id} 
              className="reel-layout-card" 
              onClick={() => {
                setActiveReel(reel);
                setIsModalPlaying(true);
              }}
            >
              <div className="reel-media-wrapper">
                <video src={reel.videoUrl} className="reel-video-preview" preload="metadata" muted />
                <div className="reel-play-btn">▶</div>
                <div className="reel-creator-tag">
                  <img src={reel.creator.avatar} alt="creator" />
                  <span>@{reel.creator.name}</span>
                </div>
              </div>
              <div className="reel-text-metadata">
                <h3>{reel.title}</h3>
                <p>{reel.views}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="reels-arrow right" onClick={() => handleArrowScroll("right")}>&#10095;</button>
      </div>

      {/* ================= MODAL PLAYER ================= */}
      {activeReel && (
        <div className="shorts-modal-overlay" onClick={closeModal}>
          <button className="shorts-close-btn" onClick={closeModal}>&times;</button>
          
          <div className="shorts-player-container" onClick={(e) => e.stopPropagation()}>
            
            <div className="shorts-video-wrapper" onClick={toggleModalPlay}>
              <video ref={modalVideoRef} src={activeReel.videoUrl} className="shorts-actual-video" autoPlay loop playsInline />
              {!isModalPlaying && <div className="shorts-paused-icon">▶</div>}

              {/* NEW: Sliding Comments Overlay inside the video wrapper */}
              <div className={`shorts-comments-panel ${showComments ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                <div className="comments-header">
                  <h3>Comments</h3>
                  <button onClick={() => setShowComments(false)}>✕</button>
                </div>
                <div className="comments-list">
                  {activeReel.comments && activeReel.comments.length > 0 ? (
                    activeReel.comments.map(comment => (
                      <div key={comment.id} className="comment-item">
                        <span className="comment-user">@{comment.user}</span>
                        <p className="comment-text">{comment.text}</p>
                      </div>
                    ))
                  ) : (
                    <p className="no-comments">No comments yet. Be the first!</p>
                  )}
                </div>
                <div className="comment-input-area">
                  <input type="text" placeholder="Add a comment..." />
                  <button>Post</button>
                </div>
              </div>

              {/* Video Metadata */}
              <div className="shorts-content-overlay">
                <div className="shorts-user-row">
                  <img src={activeReel.creator.avatar} alt="avatar" />
                  <span>@{activeReel.creator.name}</span>
                  <button className="shorts-subscribe-btn">Subscribe</button>
                </div>
                <h3 className="shorts-video-title">{activeReel.title}</h3>
              </div>
            </div>

            {/* ACTION SIDEBAR */}
            <div className="shorts-actions-sidebar">
              
              {/* Profile Button (Non-functional as requested) */}
              <div className="action-item profile-action">
                <img src={activeReel.creator.avatar} alt="Profile" className="sidebar-profile-img" />
              </div>

              {/* Functional Like Button */}
              <div className="action-item" onClick={(e) => handleLikeToggle(e, activeReel.id)}>
                <div className={`action-icon ${likedReels[activeReel.id] ? "liked" : ""}`}>
                  {likedReels[activeReel.id] ? "❤️" : "🤍"}
                </div>
                {/* Dynamically update the count based on the liked state */}
                <span>{formatNumber(activeReel.likes + (likedReels[activeReel.id] ? 1 : 0))}</span>
              </div>

              {/* Functional Comment Button */}
              <div className="action-item" onClick={handleCommentToggle}>
                <div className="action-icon">💬</div>
                <span>{activeReel.comments ? activeReel.comments.length : 0}</span>
              </div>

              {/* Functional Share Button */}
              <div className="action-item" onClick={handleShare}>
                <div className="action-icon">↪️</div>
                <span>Share</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default ReelsSection;