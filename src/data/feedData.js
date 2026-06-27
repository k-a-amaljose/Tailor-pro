import sampleDress1 from "../assets/Images/sampleDress1.jpg";
import sampleDress2 from "../assets/Images/sampleDress2.jpg";
import sampleDress3 from "../assets/Images/sampleDress3.jpg";
import sampleDress4 from "../assets/Images/sampleDress4.png";

import tailor1 from "../assets/Images/tailor1.png";
import tailor2 from "../assets/Images/tailor2.jpg";
import tailor3 from "../assets/Images/tailor3.png";
import tailor4 from "../assets/Images/tailor4.jpg";

const feedData = [
  {
    id: 1,
    image: sampleDress1,
    type: "image",

    tailorName: "Sarah Designs",
    profilePic: tailor1,

    likes: 223439,

    date: "2 days ago",

    caption:
      "Elegant bridal lehenga with detailed hand embroidery designed for engagement and wedding ceremonies.",

    comments: [
      {
        id: 1,
        user: "Ayesha Khan",
        profile: "https://i.pravatar.cc/40?img=1",
        text: "Absolutely stunning work ❤️",
        rating: 5,
        liked: false,
        likes: 42,
        date: "2 days ago",
      },
      {
        id: 2,
        user: "Mariam Ali",
        profile: "https://i.pravatar.cc/40?img=2",
        text: "The embroidery is beautiful.",
        rating: 4,
        likes: 17,
        liked: false,
        date: "1 day ago",
      },
      {
        id: 3,
        user: "Fatima Noor",
        profile: "https://i.pravatar.cc/40?img=3",
        text: "Would definitely order this design.",
        rating: 5,
        likes: 8,
        liked: false,
        date: "12 hours ago",
      },
    ],
  },

  {
    id: 2,
    image: sampleDress2,
    type: "image",

    tailorName: "Elite Tailors",
    profilePic: tailor2,

    likes: 6754,

    date: "5 days ago",

    caption:
      "Premium olive green ethnic outfit crafted with luxury fabric and intricate embellishments.",

    comments: [
      {
        id: 1,
        user: "Rahul Menon",
        profile: "https://i.pravatar.cc/40?img=4",
        text: "Love this color combination.",
        rating: 5,
        likes: 24,
        liked: false,
        date: "4 days ago",
      },
      {
        id: 2,
        user: "Sneha Joseph",
        profile: "https://i.pravatar.cc/40?img=5",
        text: "Looks premium and elegant.",
        rating: 4,
        likes: 12,
        liked: false,
        date: "3 days ago",
      },
      {
        id: 3,
        user: "Fathima",
        profile: "https://i.pravatar.cc/40?img=6",
        text: "Would wear this for an event.",
        rating: 5,
        likes: 9,
        liked: false,
        date: "2 days ago",
      },
    ],
  },

  {
    id: 3,
    image: sampleDress3,
    type: "image",

    tailorName: "Fashion Hub",
    profilePic: tailor3,

    likes: 45587,

    date: "1 week ago",

    caption:
      "Traditional festive wear collection featuring vibrant colors and elegant embroidery patterns.",

    comments: [
      {
        id: 1,
        user: "Anjali",
        profile: "https://i.pravatar.cc/40?img=7",
        text: "Perfect festive outfit.",
        rating: 5,
        likes: 33,
        liked: false,
        date: "5 days ago",
      },
      {
        id: 2,
        user: "Hiba",
        profile: "https://i.pravatar.cc/40?img=8",
        text: "Love the detailing.",
        rating: 4,
        likes: 14,
        liked: false,
        date: "4 days ago",
      },
      {
        id: 3,
        user: "Nihal",
        profile: "https://i.pravatar.cc/40?img=9",
        text: "Looks amazing.",
        rating: 5,
        likes: 11,
        liked: false,
        date: "3 days ago",
      },
    ],
  },

  {
    id: 4,
    image: sampleDress4,
    type: "image",

    tailorName: "Royal Stitch Boutique",
    profilePic: tailor4,

    likes: 9874,

    date: "2 weeks ago",

    caption:
      "Modern designer outfit combining contemporary fashion with classic tailoring techniques.",

    comments: [
      {
        id: 1,
        user: "Arjun",
        profile: "https://i.pravatar.cc/40?img=10",
        text: "Modern and stylish.",
        rating: 5,
        likes: 16,
        liked: false,
        date: "1 week ago",
      },
      {
        id: 2,
        user: "Riya",
        profile: "https://i.pravatar.cc/40?img=11",
        text: "Would love to get one stitched.",
        rating: 4,
        likes: 10,
        liked: false,
        date: "6 days ago",
      },
      {
        id: 3,
        user: "Faiz",
        profile: "https://i.pravatar.cc/40?img=12",
        text: "Clean tailoring work.",
        rating: 5,
        likes: 7,
        liked: false,
        date: "5 days ago",
      },
    ],
  },
];

export default feedData;