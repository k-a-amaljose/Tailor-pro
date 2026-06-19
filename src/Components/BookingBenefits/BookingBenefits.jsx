import "./BookingBenefits.css";

import {
  CalendarClock,
  ShieldCheck,
  Bell,
  BadgeCheck
} from "lucide-react";

function BookingBenefits() {
  return (
    <div className="booking-benefits">

      <div className="benefit">
        <CalendarClock />
        <h4>Easy Rescheduling</h4>
      </div>

      <div className="benefit">
        <BadgeCheck />
        <h4>Instant Confirmations</h4>
      </div>

      <div className="benefit">
        <ShieldCheck />
        <h4>Secure & Reliable</h4>
      </div>

      <div className="benefit">
        <Bell />
        <h4>Reminder Alerts</h4>
      </div>

    </div>
  );
}

export default BookingBenefits;