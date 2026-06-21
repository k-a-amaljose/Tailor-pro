import "./BookingTable.css";
import BookingRow from "../BookingRow/BookingRow";

function BookingTable({
  bookings,
  title,
}) {
  return (
    <div className="booking-table-wrapper">

      <h3>{title}</h3>

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

          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <BookingRow
                key={booking.id}
                booking={booking}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "40px",
                }}
              >
                No bookings found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default BookingTable;