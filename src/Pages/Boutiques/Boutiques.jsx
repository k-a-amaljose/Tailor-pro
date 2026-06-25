import "./Boutiques.css";

import { useState } from "react";
import { Star } from "lucide-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import BoutiqueMap from "../../Components/BoutiqueMap/BoutiqueMap";

import Boutique_1 from "../../assets/Images/Boutique_1.jpg";
import Boutique_2 from "../../assets/Images/Boutique_2.jpg";
import Boutique_3 from "../../assets/Images/Boutique_3.jpg";
import Boutique_4 from "../../assets/Images/Boutique_4.jpg";
import Boutique_5 from "../../assets/Images/Boutique_5.jpg";
import Boutique_6 from "../../assets/Images/Boutique_6.jpg";

function Boutiques() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample boutique data with UNIQUE high-quality images
  const boutiques = [
    {
      id: 1,
      name: "Savile Row Bespoke",
      rating: 5,
      reviews: 128,
      image: Boutique_1,
      location: "Savile Row, London",
      distance: "0.2 km",
      description: "Luxury bespoke tailoring since 1850",
      lat: 51.5095,
      lng: -0.1357,
    },
    {
      id: 2,
      name: "Heritage Tailors",
      rating: 5,
      reviews: 95,
      image: Boutique_2,
      location: "New Bond Street, London",
      distance: "0.4 km",
      description: "Premium custom tailoring services",
      lat: 51.5084,
      lng: -0.1408,
    },
    {
      id: 3,
      name: "Lorenzo & Sons",
      rating: 5,
      reviews: 156,
      image: Boutique_3,
      location: "Regent Street, London",
      distance: "0.6 km",
      description: "Italian craftsmanship meets London tradition",
      lat: 51.5144,
      lng: -0.1282,
    },
    {
      id: 4,
      name: "The Saniza",
      rating: 4,
      reviews: 87,
      image: Boutique_4,
      location: "Jermyn Street, London",
      distance: "0.8 km",
      description: "Exclusive membership tailoring club",
      lat: 51.5069,
      lng: -0.1347,
    },
    {
      id: 5,
      name: "Mayfair Tailoring",
      rating: 3,
      reviews: 72,
      image: Boutique_5,
      location: "South Molton Street, London",
      distance: "1.0 km",
      description: "Modern luxury tailoring experience",
      lat: 51.5138,
      lng: -0.1486,
    },
    {
      id: 6,
      name: "Threadcraft Studio",
      rating: 5,
      reviews: 142,
      image: Boutique_6,
      location: "Oxford Street, London",
      distance: "1.2 km",
      description: "Contemporary bespoke tailoring",
      lat: 51.5154,
      lng: -0.1361,
    },
  ];

  const nearbyBoutiques = boutiques.slice(0, 6 );

  // Filter boutiques based on search and rating
  const filteredBoutiques = boutiques.filter((boutique) => {
    const matchesSearch = boutique.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRating = selectedFilter === "all" || boutique.rating >= 4;
    return matchesSearch && matchesRating;
  });

  // Render star rating component
  const renderStars = (rating) => (
    <div className="stars-container">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "star-filled" : "star-empty"}
        />
      ))}
    </div>
  );

  return (
    <div className="boutiques-page">
      <Sidebar />
      <div className="boutiques-content">
        <div className="top-bar">
          <Searchbar />
          <TopProfile />
        </div>

        <div className="boutiques-main">
          {/* Left Section: Boutique Grid */}
          <div className="boutiques-grid-section">
            {/* Header and Filters */}
            <div className="boutiques-header">
              <h2 className="boutiques-title">Boutiques</h2>
              <div className="filter-pills">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`filter-pill ${
                    selectedFilter === "all" ? "active" : ""
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedFilter("4+")}
                  className={`filter-pill ${
                    selectedFilter === "4+" ? "active" : ""
                  }`}
                >
                  4+ Rating
                </button>
              </div>
            </div>

            {/* Boutique Cards Grid */}
            <div className="boutiques-grid">
              {filteredBoutiques.map((boutique) => (
                <div key={boutique.id} className="boutique-card">
                  {/* Card Image */}
                  <img
                    src={boutique.image}
                    alt={boutique.name}
                    className="boutique-card-image"
                    loading="lazy"
                  />

                  {/* Card Content */}
                  <div className="boutique-card-content">
                    <h3 className="boutique-card-name">{boutique.name}</h3>

                    {/* Rating */}
                    <div className="boutique-card-rating">
                      {renderStars(boutique.rating)}
                      <span className="review-count">({boutique.reviews})</span>
                    </div>

                    {/* Description */}
                    <p className="boutique-card-description">
                      {boutique.description}
                    </p>

                    {/* Contact Button */}
                    <button className="contact-button">Contact Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Map + Nearby Boutiques */}
          <div className="sidebar-section">
            {/* React Google Map Component */}
            <div className="map-container">
              <BoutiqueMap />
            </div>

            {/* Nearby Boutiques */}
            <div className="nearby-sidebar">
              <h3 className="nearby-title">Boutiques Near You</h3>

              {/* Nearby List */}
              <div className="nearby-list">
                {nearbyBoutiques.map((boutique) => (
                  <div key={boutique.id} className="nearby-item">
                    {/* Thumbnail Image */}
                    <img
                      src={boutique.image}
                      alt={boutique.name}
                      className="nearby-image"
                      loading="lazy"
                    />

                    {/* Boutique Info */}
                    <div className="nearby-content">
                      <h4 className="nearby-name">{boutique.name}</h4>
                      <div className="nearby-rating">
                        {renderStars(boutique.rating)}
                      </div>
                      <p className="nearby-location">
                        {boutique.distance} • {boutique.location}
                      </p>
                    </div>

                    {/* Arrow */}
                    <button className="nearby-arrow">→</button>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <button className="view-all-button">View All Boutiques</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutiques;