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
  }
];

export const completedBookings = [
  {
    id: 4,
    boutique: "Vaani Boutique",
    location: "Koramangala, Bangalore",
    image: sampleDress4,

    service: "Anarkali Suit Consultation",
    date: "05 May 2026",
  }
];

export const cancelledBookings = [
  {
    id: 5,
    boutique: "Moha Design Studio",
    location: "Indiranagar, Bangalore",
    image: sampleDress1,

    service: "Lehenga Fitting",
    date: "26 Apr 2026",
  }
];