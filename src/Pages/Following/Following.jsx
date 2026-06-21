import "./Following.css";

import { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import FeedGrid from "../../Components/FeedGrid/FeedGrid";

import { Users } from "lucide-react";

function Following() {

  const [searchTerm, setSearchTerm] =
    useState("");

  return (
    <div className="following-page">

      <Sidebar />

      <div className="following-content">

        {/* Fixed Top Content */}

        <div className="fixed-content">

          <div className="top-bar">

            <Searchbar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search posts, boutiques, designs..."
            />

            <TopProfile />

          </div>

          <div className="feed-header">

            <h1>
              Following
            </h1>

            <div className="feed-subtitle">

              <Users size={16} />

              <span>
                Updates from the people you follow
              </span>

            </div>

          </div>

        </div>

        {/* Scrollable Feed */}

        <div className="feed-scroll">

          <FeedGrid
            searchTerm={searchTerm}
          />

        </div>

      </div>

    </div>
  );
}

export default Following;