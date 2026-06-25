import "./BookingSection.css";

function BookingSection({
  title,
  bookings
}) {
  return (
    <div className="booking-section">

      <div className="section-header">
        <h3>{title}</h3>
        <button>View All</button>
      </div>

      {bookings.map((booking) => (
        <div
          className="mini-booking-card"
          key={booking.id}
        >
          <img
            src={booking.image}
            alt={booking.boutique}
          />

          <div>
            <h4>{booking.boutique}</h4>
            <p>{booking.service}</p>
            <span>{booking.date}</span>
          </div>

          <button>
            Book Again
          </button>
        </div>
      ))}

    </div>
  );
}

export default BookingSection;