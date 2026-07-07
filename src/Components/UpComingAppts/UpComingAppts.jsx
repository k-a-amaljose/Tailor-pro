import "./UpComingAppts.css";

function UpComingAppts({
  appointments,
}) {
  return (
    <section className="upcoming-appts">

      <div className="upcoming-appts-header">
        <h2>Upcoming Appointments</h2>
      </div>

      {appointments.length > 0 ? (
        <div className="appts-list">

          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="appt-card"
            >
              <div className="appt-main">

                <img
                  src={appointment.customerImage}
                  alt={appointment.customerName}
                  className="appt-avatar"
                />

                <div className="appt-details">

                  <h3>
                    {appointment.customerName}
                  </h3>

                  <p>
                    {appointment.service}
                  </p>

                </div>

              </div>

              <div className="appt-meta">

                <span>
                  {appointment.date}
                </span>

                <span>
                  {appointment.time}
                </span>

              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="empty-appts-state">

          <h3>No Upcoming Appointments</h3>

          <p>
            Your upcoming bookings will appear
            here.
          </p>

        </div>
      )}

    </section>
  );
}

export default UpComingAppts;