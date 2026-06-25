import "./BookingRow.css";

function BookingRow({ booking }) {
  return (
    <tr>

      <td>
        <div className="boutique-cell">

          <img
            src={booking.image}
            alt={booking.boutique}
          />

          <div>
            <h4>{booking.boutique}</h4>
            <p>{booking.location}</p>
          </div>

        </div>
      </td>

      <td>
        <div>
          <span className="service-tag">
            {booking.category}
          </span>

          <p>{booking.service}</p>
        </div>
      </td>

      <td>
        <div>
          <p>{booking.date}</p>
          <p>{booking.time}</p>
        </div>
      </td>

      <td>
        <span
          className={`status-badge ${booking.status.toLowerCase()}`}
        >
          {booking.status}
        </span>
      </td>

      <td>
        <button className="action-btn">
          Reschedule
        </button>
      </td>

    </tr>
  );
}

export default BookingRow;