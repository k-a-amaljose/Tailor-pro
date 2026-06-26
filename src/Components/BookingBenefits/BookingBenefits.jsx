import "./BookingBenefits.css";

import {
  CalendarClock,
  ShieldCheck,
  Scissors,
  Ruler,
} from "lucide-react";

function BookingBenefits() {
  return (
    <div className="booking-benefits">

      <div className="benefit">
        <CalendarClock />
        <h4>Flexible Scheduling</h4>
      </div>

      <div className="benefit">
        <Scissors />
        <h4>Skilled Tailors</h4>
      </div>

      <div className="benefit">
        <Ruler />
        <h4>Custom Measurements</h4>
      </div>

      <div className="benefit">
        <ShieldCheck />
        <h4>Trusted Service</h4>
      </div>

    </div>
  );
}

export default BookingBenefits;