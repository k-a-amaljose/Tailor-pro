import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Following from "./Pages/Following/Following";
import Bookings from "./Pages/Bookings/Bookings";
import Boutiques from "./Pages/Boutiques/Boutiques";
import Messages from "./Pages/Messages/Messages";
import Saved from "./Pages/Saved/Saved";
import VideoCall from "./Pages/VideoCall/videoCall";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/following" element={<Following />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/boutiques" element={<Boutiques />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/video-call" element={<VideoCall />} />
    </Routes>
  );
}

export default App;