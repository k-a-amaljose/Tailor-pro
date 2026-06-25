import "./Following.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import FeedGrid from "../../Components/FeedGrid/FeedGrid";

import { Users } from "lucide-react";

function Following() {
  return (
    <div className="following-page">

      <Sidebar />

      <div className="following-content">

        <div className="fixed-content">

          <div className="top-bar">
            <Searchbar />
            <TopProfile />
          </div>

          <div className="feed-header">
            <h1>Following</h1>

            <div className="feed-subtitle">
              <Users size={16} />
              <span>Updates from the people you follow</span>
            </div>
          </div>

        </div>

        <div className="feed-scroll">

          <FeedGrid />

        </div>

      </div>

    </div>
  );
}

export default Following;