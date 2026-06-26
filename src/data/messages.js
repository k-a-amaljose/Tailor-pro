import tailor1 from "../assets/Images/tailor1.png";
import tailor2 from "../assets/Images/tailor2.jpg";
import tailor3 from "../assets/Images/tailor3.png";
import tailor4 from "../assets/Images/tailor4.jpg";

export const chats = [
  {
    id: 1,
    name: "House of Myraa",
    avatar: tailor1,
    status: "Online",
    lastMessage: "Yes, I can do that for you.",
    time: "11:30 AM",
    unread: 2,
    active: true,
    messages: [
      {
        id: 1,
        type: "received",
        text: "Hi! Thank you for booking with us.",
        time: "10:15 AM",
      },
      {
        id: 2,
        type: "received",
        text: "May I know if you have any specific design in mind?",
        time: "10:16 AM",
      },
      {
        id: 3,
        type: "sent",
        text: "I'm looking for a bridal lehenga with a modern touch.",
        time: "10:18 AM",
      },
      {
        id: 4,
        type: "received",
        text: "That sounds beautiful! I'll share some inspirations.",
        time: "10:20 AM",
      },
    ],
  },

  {
    id: 2,
    name: "The Silk Room",
    avatar: tailor2,
    status: "Offline",
    lastMessage: "Perfect! See you then.",
    time: "10:15 AM",
    unread: 1,
    active: false,
    messages: [],
  },

  {
    id: 3,
    name: "Threads & You",
    avatar: tailor3,
    status: "Online",
    lastMessage: "Thank you so much!",
    time: "Yesterday",
    unread: 0,
    active: false,
    messages: [],
  },

  {
    id: 4,
    name: "Stitch Story",
    avatar: tailor4,
    status: "Online",
    lastMessage: "Your order has been confirmed.",
    time: "Yesterday",
    unread: 0,
    active: false,
    messages: [],
  },

  {
    id: 5,
    name: "Lé Couture",
    avatar: tailor1,
    status: "Offline",
    lastMessage: "We've shared the measurements.",
    time: "2 May",
    unread: 0,
    active: false,
    messages: [],
  },

  {
    id: 6,
    name: "Diva Designs",
    avatar: tailor2,
    status: "Online",
    lastMessage: "Let me know if you need any changes.",
    time: "1 May",
    unread: 0,
    active: false,
    messages: [],
  },
];