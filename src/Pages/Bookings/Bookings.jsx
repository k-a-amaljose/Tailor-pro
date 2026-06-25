import "./Bookings.css";

import Sidebar from "../../Components/Sidebar/Sidebar"
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";

import BookingTabs from "../../Components/BookingTabs/BookingTabs";
import BookingStats from "../../Components/BookingStats/BookingStats";
import BookingTable from "../../Components/BookingTable/BookingTable";
import BookingSection from "../../Components/BookingSection/BookingSection";
import BookingBenefits from "../../Components/BookingBenefits/BookingBenefits";

import {
  upcomingBookings,
  completedBookings,
  cancelledBookings,
} from "../../data/bookings";

function Bookings() {
  return (
    <div className="bookings-page">
      <Sidebar />

      <div className="bookings-content">
        <div className="fixed-content">

          <div className="top-bar">
            <Searchbar />
            <TopProfile />
          </div>

          <div className="page-header">
            <h1>Bookings</h1>
            <p>
              Manage all your appointments and consultations in one place.
            </p>
          </div>

          <BookingTabs />

          <BookingStats
            total={12}
            upcoming={4}
            completed={6}
            cancelled={2}
          />
        </div>

        <div className="scrollable-content">
          <BookingTable bookings={upcomingBookings} />

          <div className="booking-sections">
            <BookingSection
              title="Completed Bookings"
              bookings={completedBookings}
            />

            <BookingSection
              title="Cancelled Bookings"
              bookings={cancelledBookings}
            />
          </div>

          <BookingBenefits />
        </div>
      </div>
    </div>
  );
}

export default Bookings;