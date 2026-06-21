import "./Bookings.css";
import { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";

import BookingTabs from "../../Components/BookingTabs/BookingTabs";
import BookingStats from "../../Components/BookingStats/BookingStats";
import BookingTable from "../../Components/BookingTable/BookingTable";
import BookingBenefits from "../../Components/BookingBenefits/BookingBenefits";

import {
  upcomingBookings,
  completedBookings,
  cancelledBookings,
} from "../../data/bookings";

function Bookings() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allBookings = [
    ...upcomingBookings,
    ...completedBookings,
    ...cancelledBookings,
  ];

  const totalCount = allBookings.length;
  const upcomingCount = upcomingBookings.length;
  const completedCount = completedBookings.length;
  const cancelledCount = cancelledBookings.length;

  let filteredBookings = allBookings;

  if (activeFilter === "upcoming") {
    filteredBookings = upcomingBookings;
  }

  if (activeFilter === "completed") {
    filteredBookings = completedBookings;
  }

  if (activeFilter === "cancelled") {
    filteredBookings = cancelledBookings;
  }

  filteredBookings = filteredBookings.filter((booking) => {
    const search = searchTerm.toLowerCase();

    return (
      booking.boutique?.toLowerCase().includes(search) ||
      booking.service?.toLowerCase().includes(search) ||
      booking.location?.toLowerCase().includes(search) ||
      booking.category?.toLowerCase().includes(search)
    );
  });

  const tableTitle =
    activeFilter === "all"
      ? "All Bookings"
      : activeFilter === "upcoming"
      ? "Upcoming Bookings"
      : activeFilter === "completed"
      ? "Completed Bookings"
      : "Cancelled Bookings";

  return (
    <div className="bookings-page">
      <Sidebar />

      <div className="bookings-content">
        <div className="fixed-content">
          <div className="top-bar">
            <Searchbar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search bookings..."
            />

            <TopProfile />
          </div>

          <div className="page-header">
            <h1>Bookings</h1>

            <p>
              Manage all your appointments and consultations in one place.
            </p>
          </div>

          <BookingTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <BookingStats
            total={totalCount}
            upcoming={upcomingCount}
            completed={completedCount}
            cancelled={cancelledCount}
          />
        </div>

        <div className="scrollable-content">
          <BookingTable
            bookings={filteredBookings}
            title={tableTitle}
          />

          <BookingBenefits />
        </div>
      </div>
    </div>
  );
}

export default Bookings;