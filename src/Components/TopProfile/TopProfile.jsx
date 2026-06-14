import "./TopProfile.css";

import {
  Heart,
  Bell,
} from "lucide-react";

function TopProfile() {
  return (
    <div className="top-profile">

      <button className="icon-btn">
        <Heart size={20} />
      </button>

      <button className="icon-btn">
        <Bell size={20} />
      </button>

      <img
        src="https://i.pravatar.cc/150"
        alt=""
        className="profile-image"
      />

    </div>
  );
}

export default TopProfile;