import React from "react";
import "./Home.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import AdBanner from "../../Components/AdBanner/AdBanner"; // 1. Import the new component
import ReelsSection from "../../Components/ReelsSection/ReelsSection";
import { reelsData } from "../../data/HomeReel";
import ProductSection from "../../Components/ProductSection/ProductSection";

function Home() {
  return (
    <div className="home-page">
      <Sidebar />

      <div className="home-content">
        <div className="top-bar">
          <SearchBar />
          <TopProfile />
        </div>

        {/* 2. Add the main display wrapper and the AdBanner */}
        <div className="main-display-scroll-feed">
          <AdBanner />
          <ReelsSection data={reelsData} />
          <ProductSection />
        </div>

      </div>
    </div>
  );
}

export default Home;