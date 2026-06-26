import "./RescheduleModal.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { X, CalendarDays } from "lucide-react";

function RescheduleModal({
  currentDate,
  onClose,
  onSubmit,
}) {
  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const handleSubmit = () => {
    onSubmit(selectedDate);
  };

  return (
    <div
      className="reschedule-overlay"
      onClick={onClose}
    >
      <div
        className="reschedule-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="reschedule-header">
          <div className="title-row">
            <CalendarDays size={22} />

            <h2>
              Reschedule Booking
            </h2>
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="current-date-box">
          <span>
            Current Appointment
          </span>

          <strong>
            {currentDate}
          </strong>
        </div>

        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={new Date()}
        />

        <div className="selected-date">
          Requested Date

          <h3>
            {selectedDate.toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </h3>
        </div>

        <div className="reschedule-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-btn"
            onClick={handleSubmit}
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default RescheduleModal;