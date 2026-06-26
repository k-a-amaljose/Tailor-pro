import React, { useState } from "react";
import "./Notifications.css";
import { initialNotifications } from "../../data/notifications";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TopProfile from "../../Components/TopProfile/TopProfile";

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState("all");

  // Marks a single notification as read when clicked
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif))
    );
  };

  // Marks every notification on the screen as read instantly
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, isRead: true })));
  };

  // Filters items dynamically based on the selected tab
  const filteredNotifications = notifications.filter((notif) => {
    if (activeFilter === "all") return true;
    return notif.type === activeFilter;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="dashboard-layout-container">
      {/* Pinned Left Sidebar */}
      <Sidebar />

      {/* Main Content Workspace */}
      <div className="main-content-workspace">
        
        {/* Top Header Row with Search & Profile */}
        <div className="dashboard-top-bar">
          <SearchBar />
          <TopProfile />
        </div>

        {/* Notifications Specific Panel */}
        <div className="notifications-page-container">
          <div className="notifications-header">
            <div>
              <h1 className="notifications-title">Notifications</h1>
              <p className="notifications-subtitle">
                You have <strong>{unreadCount}</strong> unread updates waiting for your review.
              </p>
            </div>
            {unreadCount > 0 && (
              <button className="mark-all-btn" onClick={markAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>

          {/* Navigation Filter Tabs */}
          <div className="notifications-tabs">
            <button 
              className={`tab-btn ${activeFilter === "all" ? "active" : ""}`} 
              onClick={() => setActiveFilter("all")}
            >
              All Updates
            </button>
            <button 
              className={`tab-btn ${activeFilter === "booking" ? "active" : ""}`} 
              onClick={() => setActiveFilter("booking")}
            >
              Bookings
            </button>
            <button 
              className={`tab-btn ${activeFilter === "drop" ? "active" : ""}`} 
              onClick={() => setActiveFilter("drop")}
            >
              Latest Drops
            </button>
          </div>

          {/* Notifications List Track */}
          <div className="notifications-list">
            {filteredNotifications.length === 0 ? (
              <div className="empty-notifications">
                <p>No notifications found in this category.</p>
              </div>
            ) : (
              filteredNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`notification-item ${!notif.isRead ? "unread-tint" : ""}`}
                  onClick={() => markAsRead(notif.id)}
                >
                  {/* Type Badge Indicators */}
                  <div className={`notification-icon-badge ${notif.type}`}>
                    {notif.type === "booking" && "📅"}
                    {notif.type === "drop" && "✨"}
                    {notif.type === "status" && "📦"}
                  </div>

                  <div className="notification-content">
                    <div className="notification-meta-row">
                      <h3 className="notification-item-title">{notif.title}</h3>
                      <span className="notification-time">{notif.time}</span>
                    </div>
                    <p className="notification-message">{notif.message}</p>
                    
                    {notif.dateTag && (
                      <span className="notification-date-badge">{notif.dateTag}</span>
                    )}
                  </div>

                  {/* Unread Visual Pinned Dot */}
                  {!notif.isRead && <div className="unread-pulse-dot" />}
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Notifications;