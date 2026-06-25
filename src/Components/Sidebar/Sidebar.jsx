import {
  Home,
  Store,
  Users,
  ShoppingCart,
  Bookmark,
  MessageCircle,
  Bell,
  User,
  Settings,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Boutiques", icon: Store, path: "/boutiques" },
  { name: "Following", icon: Users, path: "/following" },
  { name: "Booking", icon: ShoppingCart, path: "/bookings" },
  { name: "Saved", icon: Bookmark, path: "/saved" },
  { name: "Messages", icon: MessageCircle, path: "/messages" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Tailor<span>Pro</span>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.name}
              className={`menu-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;