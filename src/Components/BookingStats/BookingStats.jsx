import "./BookingStats.css";

import {
  Calendar,
  CalendarClock,
  CheckCircle,
  XCircle
} from "lucide-react";

function BookingStats({
  total,
  upcoming,
  completed,
  cancelled
}) {
  return (
    <div className="booking-stats">

      <div className="stat-card">
        <Calendar size={24} />
        <div>
          <h2>{total}</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      <div className="stat-card">
        <CalendarClock size={24} />
        <div>
          <h2>{upcoming}</h2>
          <p>Upcoming</p>
        </div>
      </div>

      <div className="stat-card">
        <CheckCircle size={24} />
        <div>
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>
      </div>

      <div className="stat-card">
        <XCircle size={24} />
        <div>
          <h2>{cancelled}</h2>
          <p>Cancelled</p>
        </div>
      </div>

    </div>
  );
}

export default BookingStats;