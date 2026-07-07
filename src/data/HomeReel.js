import reel1 from "../assets/videos/Video1.mp4";
import reel2 from "../assets/videos/Video2.mp4";
import reel3 from "../assets/videos/Video3.mp4";
import reel4 from "../assets/videos/Video4.mp4";
import reel5 from "../assets/videos/Video5.mp4";
import reel6 from "../assets/videos/Video6.mp4";
import reel7 from "../assets/videos/Video7.mp4";
import reel8 from "../assets/videos/Video8.mp4";
import reel9 from "../assets/videos/Video9.mp4";
import reel10 from "../assets/videos/Video10.mp4";

export const reelsData = [
  { 
    id: 1, 
    title: "Behind the Design ✏️", 
    views: "120K views", 
    videoUrl: reel1, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "TailorPro_HQ", avatar: "https://i.pravatar.cc/150?u=1" },
    comments: [ // Added mock comments
      { id: 1, user: "Fashionista99", text: "The attention to detail here is insane! 😍" },
      { id: 2, user: "StyleBySarah", text: "She is a great designer." }
    ]
  },
  { 
    id: 2, 
    title: "Stitch by Stitch 🪡", 
    views: "85K views", 
    videoUrl: reel2, 
    thumbnail: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=400&q=80",
    creator: { name: "Artisan_Stitch", avatar: "https://i.pravatar.cc/150?u=2" },
    comments: [ // Added mock comments
      { id: 1, user: "99clothe", text: "The fabric working is insane!" },
      { id: 2, user: "StyleJames", text: "There is a lot of work BTS." }
    ]
  },
  { 
    id: 3, 
    title: "Summer Collection ☀️", 
    views: "210K views", 
    videoUrl: reel3, 
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
    creator: { name: "Sarah_Styles", avatar: "https://i.pravatar.cc/150?u=3" },
    comments: [ // Added mock comments
      { id: 1, user: "MesssiFan99", text: "A great model" },
      { id: 2, user: "RonaldoFan", text: "Cool Filter" },
      { id: 2, user: "MbappeGoat", text: "Great Effects" }
    ]
  },
  { 
    id: 4, 
    title: "Fabric Selection 🧵", 
    views: "45K views", 
    videoUrl: reel4, 
    thumbnail: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80",
    creator: { name: "Master_Tailor", avatar: "https://i.pravatar.cc/150?u=4" },
    comments: [ // Added mock comments
      { id: 1, user: "Pikachu", text: "skilled work" },
      { id: 2, user: "gamemaster", text: "So much hardwork." }
    ]
  },
  { 
    id: 5, 
    title: "Boutique Tour 👗", 
    views: "300K views", 
    videoUrl: reel5, 
    thumbnail: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80",
    creator: { name: "Chic_Boutique", avatar: "https://i.pravatar.cc/150?u=5" },
    comments: [ // Added mock comments
      { id: 1, user: "Jessi", text: "Drop the location" },
      { id: 2, user: "JamesxSarah", text: "I need this in my wardrobe ASAP." }
    ]
  },
   { 
    id: 6, 
    title: "WOW", 
    views: "60K views", 
    videoUrl: reel6, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "ElainaExplore", avatar: "https://i.pravatar.cc/400?img=45" },
    comments: [ // Added mock comments
      { id: 1, user: "AmyLovesCloths", text: "The attention to detail here is insane! 😍" },
      { id: 2, user: "JoshHutch", text: "She is a great designer." },
      { id: 2, user: "Derik98", text: "Quite solid" }
    ]
  },
   { 
    id: 7, 
    title: "#Trending", 
    views: "1.1M views", 
    videoUrl: reel7, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "MellyModern", avatar: "https://i.pravatar.cc/400?img=47" },
    comments: [ // Added mock comments
      { id: 1, user: "MellyModern", text: "It was so fun " },  
      { id: 2, user: "Fashionista99", text: "Great setup" },
      { id: 3, user: "StyleBySarah", text: "Melly is so class" },
      { id: 4, user: "MayMay98", text: "Cool dress" },
      { id: 5, user: "AliStyles", text: "<3" },
      { id: 6, user: "JamesPhoto", text: "Incredible fun working with you on this" }
    ]
  },
   { 
    id: 8, 
    title: "Vintage Design", 
    views: "1.9K views", 
    videoUrl: reel8, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "AllyVintageDesign", avatar: "https://i.pravatar.cc/400?img=48" },
    comments: [ // Added mock comments
      { id: 1, user: "Vintage explorer", text: "Incredible styling , Keepit up." },
    ]
  },
   { 
    id: 9, 
    title: "Silver beauty", 
    views: "10K views", 
    videoUrl: reel9, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "CustomCosplay", avatar: "https://i.pravatar.cc/400?img=49" },
    comments: [ // Added mock comments
      { id: 1, user: "Fashionista99", text: "The whole costume is INSANE" },
      { id: 2, user: "StyleBySarah", text: "My Queen" }
    ]
  },
   { 
    id: 10, 
    title: "casual vibes", 
    views: "12K views", 
    videoUrl: reel10, 
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&w=400&q=80",
    creator: { name: "JhoshStyling", avatar: "https://i.pravatar.cc/400?img=67" },
    comments: [ // Added mock comments
      { id: 1, user: "Fashionista99", text: "The attention to detail here is insane!" },
      { id: 2, user: "StyleBySarah", text: "She looks so good ." }
    ]
  },
];

// ... keep your featuredProducts and newArrivals arrays below this