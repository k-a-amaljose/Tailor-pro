import "./BookingTabs.css";

function BookingTabs({
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="booking-tabs">

      <button
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => setActiveFilter("all")}
      >
        All Bookings
      </button>

      <button
        className={activeFilter === "upcoming" ? "active" : ""}
        onClick={() => setActiveFilter("upcoming")}
      >
        Upcoming
      </button>

      <button
        className={activeFilter === "completed" ? "active" : ""}
        onClick={() => setActiveFilter("completed")}
      >
        Completed
      </button>

      <button
        className={activeFilter === "cancelled" ? "active" : ""}
        onClick={() => setActiveFilter("cancelled")}
      >
        Cancelled
      </button>

    </div>
  );
}

export default BookingTabs;