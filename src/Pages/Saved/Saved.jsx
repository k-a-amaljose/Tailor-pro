import "./Saved.css";

import { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import FeedGrid from "../../Components/FeedGrid/FeedGrid";

import { Bookmark } from "lucide-react";

function Saved() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="saved-page">
      <Sidebar />

      <div className="saved-content">
        {/* Fixed Top Content */}
        <div className="fixed-content">
          <div className="top-bar">
            <Searchbar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search saved designs..."
            />

            <TopProfile />
          </div>

          <div className="feed-header">
            <h1>Saved</h1>

            <div className="feed-subtitle">
              <Bookmark size={16} />
              <span>Your bookmarked designs and inspirations</span>
            </div>
          </div>
        </div>

        {/* Scrollable Feed */}
        <div className="feed-scroll">
          <FeedGrid searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default Saved;