import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Following from "./Pages/Following/Following";
import Bookings from "./Pages/Bookings/Bookings";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/following" element={<Following />} />
  <Route path="/bookings" element={<Bookings />} />
</Routes>
  );
}

export default App;