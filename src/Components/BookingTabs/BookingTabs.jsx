import "./BookingTabs.css";

function BookingTabs() {
  return (
    <div className="booking-tabs">

      <button className="active">
        All Bookings
      </button>

      <button>
        Upcoming
      </button>

      <button>
        Completed
      </button>

      <button>
        Cancelled
      </button>

    </div>
  );
}

export default BookingTabs;