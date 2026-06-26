import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Following from "./Pages/Following/Following";
import Bookings from "./Pages/Bookings/Bookings";
import Boutiques from "./Pages/Boutiques/Boutiques";
import Messages from "./Pages/Messages/Messages";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pasges/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/following" element={<Following />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/boutiques" element={<Boutiques />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
