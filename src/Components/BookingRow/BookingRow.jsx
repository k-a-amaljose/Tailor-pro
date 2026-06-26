import "./BookingRow.css";
import { useState } from "react";
import RescheduleModal from "../RescheduleModal/RescheduleModal";

function BookingRow({ booking }) {
  const [showReschedule, setShowReschedule] =
    useState(false);

  const [requestedDate, setRequestedDate] =
    useState(null);

  return (
    <>
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
            <p>
              {requestedDate ? (
                <>
                  <span
                    style={{
                      color: "#d62828",
                      fontWeight: 600,
                    }}
                  >
                    Requested:
                  </span>

                  <br />

                  <span
                    style={{
                      color: "#d62828",
                    }}
                  >
                    {requestedDate}
                  </span>
                </>
              ) : (
                booking.date
              )}
            </p>

            <p>{booking.time}</p>
          </div>
        </td>

        <td>
          <span
            className={`status-badge ${(booking.status || "").toLowerCase()}`}
          >
            {requestedDate
              ? "Reschedule Requested"
              : booking.status}
          </span>
        </td>

        <td>
          <button
            className="reschedule-btn"
            onClick={() =>
              setShowReschedule(true)
            }
          >
            Reschedule
          </button>
        </td>
      </tr>

      {showReschedule && (
        <RescheduleModal
          currentDate={booking.date}
          onClose={() =>
            setShowReschedule(false)
          }
          onSubmit={(date) => {
            setRequestedDate(
              date.toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )
            );

            setShowReschedule(false);
          }}
        />
      )}
    </>
  );
}

export default BookingRow;