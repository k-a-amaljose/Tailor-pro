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

    likes: 239,

    date: "2 days ago",

    caption:
      "Elegant bridal lehenga with detailed hand embroidery designed for engagement and wedding ceremonies.",
  },

  {
    id: 2,

    image: sampleDress2,
    type: "image",

    tailorName: "Elite Tailors",
    profilePic: tailor2,

    likes: 67,

    date: "5 days ago",

    caption:
      "Premium olive green ethnic outfit crafted with luxury fabric and intricate embellishments.",
  },

  {
    id: 3,

    image: sampleDress3,
    type: "image",

    tailorName: "Fashion Hub",
    profilePic: tailor3,

    likes: 455,

    date: "1 week ago",

    caption:
      "Traditional festive wear collection featuring vibrant colors and elegant embroidery patterns.",
  },

  {
    id: 4,

    image: sampleDress4,
    type: "image",

    tailorName: "Royal Stitch Boutique",
    profilePic: tailor4,

    likes: 987,

    date: "2 weeks ago",

    caption:
      "Modern designer outfit combining contemporary fashion with classic tailoring techniques.",
  },
];

export default feedData;