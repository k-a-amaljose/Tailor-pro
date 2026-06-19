import "./BookingTable.css";
import BookingRow from "../BookingRow/BookingRow";

function BookingTable({ bookings }) {
  return (
    <div className="booking-table-wrapper">

      <h3>Upcoming Bookings</h3>

      <table className="booking-table">

        <thead>
          <tr>
            <th>Boutique</th>
            <th>Service</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {bookings.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BookingTable;