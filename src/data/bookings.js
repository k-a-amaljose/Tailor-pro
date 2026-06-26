import sampleDress1 from "../assets/Images/sampleDress1.jpg";
import sampleDress2 from "../assets/Images/sampleDress2.jpg";
import sampleDress3 from "../assets/Images/sampleDress3.jpg";
import sampleDress4 from "../assets/Images/sampleDress4.png";

export const upcomingBookings = [
  {
    id: 1,
    boutique: "House of Myraa",
    location: "Koramangala, Bangalore",
    image: sampleDress1,

    category: "Consultation",
    service: "Bridal Lehenga Consultation",

    date: "15 May 2026",
    time: "11:00 AM",

    status: "Confirmed",

 rescheduleRequested: false,

  requestedDate: "",
  requestedTime: "",

  confirmedDate: "",
  confirmedTime: ""
  },

  {
    id: 2,
    boutique: "The Silk Room",
    location: "Jayanagar, Bangalore",
    image: sampleDress2,

    category: "Fitting",
    service: "Lehenga First Trial",

    date: "16 May 2026",
    time: "04:30 PM",

    status: "Confirmed",

     rescheduleRequested: false,

  requestedDate: "",
  requestedTime: "",

  confirmedDate: "",
  confirmedTime: ""
  },

  {
    id: 3,
    boutique: "Raaga Bridal Studio",
    location: "HSR Layout, Bangalore",
    image: sampleDress3,

    category: "Consultation",
    service: "Saree Draping Consultation",

    date: "20 May 2026",
    time: "03:00 PM",

    status: "Pending",

     rescheduleRequested: false,

  requestedDate: "",
  requestedTime: "",

  confirmedDate: "",
  confirmedTime: ""
  }
];

export const completedBookings = [
  {
    id: 4,
    boutique: "Vaani Boutique",
    location: "Koramangala, Bangalore",
    image: sampleDress4,

    category: "Consultation",
    service: "Anarkali Suit Consultation",

    date: "05 May 2026",
    time: "02:00 PM",

    status: "Completed",

     rescheduleRequested: false,

  requestedDate: "",
  requestedTime: "",

  confirmedDate: "",
  confirmedTime: ""
  },
];

export const cancelledBookings = [
  {
    id: 5,
    boutique: "Moha Design Studio",
    location: "Indiranagar, Bangalore",
    image: sampleDress1,

    category: "Fitting",
    service: "Lehenga Fitting",

    date: "26 Apr 2026",
    time: "10:30 AM",

    status: "Cancelled",

     rescheduleRequested: false,

  requestedDate: "",
  requestedTime: "",

  confirmedDate: "",
  confirmedTime: ""
  },
];